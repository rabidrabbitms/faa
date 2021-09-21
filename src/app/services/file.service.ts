import { Injectable } from '@angular/core';
import HttpService from './http.service';
import ModelService from './model.service';
import { Global } from '../services/Global';
import ScannedDocument from '../../MLC/Types/ScannedDocument';
import env from 'env';
import { getStore, getToken } from '../http/post';

@Injectable({ providedIn: 'root' })
export default class FileService {
    constructor(
        readonly global: Global,
        readonly httpService: HttpService,
        readonly modelService: ModelService
    ) {}

    async downloadFile(resource: string) {
        const response = await fetch(`${env.endpointBaseUrl}/${resource}`, {
            headers: {
                user: getToken(),
                store: getStore()
            }
        });

        const [_, filename] = (/"(.*)"/.exec(response.headers.get('Content-Disposition') ?? '') || []);
        const blob = await response.blob();
        if (blob) {
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = filename || `${this.global.brand.replace(' ', '-')}-download.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    }

    async downloadStatement(statementID: number): Promise<any> {
        console.log(statementID);
        const response = await this.httpService.post({ controller: 'File', method: 'GetStatementPDF'},
            {
                StatementID: statementID,
            }
        );

        const blob = this.base64toBlob(response.Base64, 'application/pdf');
        if (blob) {
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = this.statementFileName(statementID);
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    }

    base64toBlob(
        b64Data: string,
        contentType = '',
        sliceSize = b64Data.length || 512
    ) {
        const byteCharacters = atob(b64Data);
        const byteArrays: Uint8Array[] = [];

        for (
            let offset = 0;
            offset < byteCharacters.length;
            offset += sliceSize
        ) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, { type: contentType });
    }
    statementFileName(id: number): string {
        return `Statement_${id}_phf_${new Date().getDate()}.pdf`;
    }

    async getStatement(statementID: number) {
        const response = await this.httpService.post('File',
            { controller: 'File', method: 'GenerateDocumentHtml' },
            {
                Input: statementID
            }
        );
        return response;
	}

    /**
     * Uploads a file to the API to be stored in the database as a byte array.
     * @param file File to be uploaded.
     * @param documentType Type of document.
     */
    async uploadDocument(file: File, documentType: string) {
        const formData = new FormData();
        formData.append('File', file, file.name);

        try {
            const result = await fetch(
                `${env.endpointBaseUrl}/File/uploadDocument?documentType=${documentType}`,
                {
                    method: 'POST',
                    headers: new Headers({
                        User: this.getToken(),
                        Store: `${this.global.storeID}`
                    }),
                    body: formData
                }
            );
            return await result.json();
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    /**
     * Archives documents in the database.
     * @param document Document to archive.
     */
    async removeDocument(document: Document): Promise<ScannedDocument> {
        const scannedDocument: ScannedDocument = {
            ID: document.DocumentID,
            UserID: this.global.userID,
            Status: {
                ID: 2,
                Name: "Archived"
            }
        };

        const response = await this.modelService.save('ScannedDocument', scannedDocument);
        return response;
    }

    /**
     * Returns all documents belonging to this user of the
     * document type.
     * @param documentType Type of documents to return.
     */
    async retrieveDocuments(documentType: string | undefined): Promise<Document[]> {
        const response: Document[] = await this.httpService.post(
            { controller: "File", method: 'RetrieveDocuments' },
            {
                CustomerID: this.global.customerID,
                DocumentType: documentType
            }
        );
        // Prepares each document with a URL, so one could just call
        // the document's URL, as it already contains the data type (e.g. image/png, application/pdf, etc.).
        for (const document of response) {
            if (document.FileName) {
                // Extract file extension
                const extension = document.FileName.substr(document.FileName.lastIndexOf('.') + 1);

                // Extract data type for displaying document
                const dataType = this.extractDataType(extension) + document.Blob;

                // Attaching URL to document object
                document.URL = dataType;
            }
        }
        return response;
    }

    /**
     * Displays document in another page.
     * @param document Document object.
     */
    displayDocument(document: Document): void {
        /*
            Google removed top-frame navigation, so we have to display
            the document in a new window inside an iFrame.
        */
        const win = window.open();
        if (win) {
            win.document.write(`<iframe src='${document.URL}' frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
        }
    }

    /**
     * Returns user's token.
     */
    getToken() {
        const userJson = localStorage.user;
        if (userJson)
            return JSON.parse(userJson).Token;
    }

    /**
     * Looks at the file extension and returns a data type
     * that's just missing the base64 string to be attached to the end.
     * @param extension File extension
     */
    extractDataType(extension: string): string {
        let mimeType = "data:";
        switch (extension.toLowerCase()) {
            case "jpg":
            case "jpeg":
            case "jfif":
            case "png":
                mimeType += `image/jpeg`;
                break;
            case "pdf":
                mimeType += `application/${extension.toLowerCase()}`;
                break;
            default:
                break;
        }
        mimeType += `;base64,`;

        return mimeType;
    }
}

export interface Document {
    DocumentID?: number;
    FileName?: string;
    Blob?: string;
    Status?: string;
    Type?: string;
    URL?: string;
}