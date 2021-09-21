import { Injectable } from '@angular/core';
import env from 'env';
import moment from 'moment';
import { Contract } from '../contracts/types/Contract';
import { getStore, getToken } from '../http/post';
import HttpService from './http.service';
import ModelService from './model.service';

@Injectable({ providedIn: 'root' })
export default class ContractService {
    constructor(readonly http: HttpService, readonly models: ModelService) { }

    async byLoan(loanID?: number) {
        const url = env.endpointBaseUrl;
        const response = await fetch(`${url}/Contract/ByLoan/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    User: getToken(),
                    Store: getStore()
                },
                body: JSON.stringify({ LoanID: loanID })
            }
        );
        const contractData = <Contract>await response.json();
        const contract = contractData;
        contract.Pages = [];
        contract.Signatures = [];
        contract.Initials = [];
        for (const document of contract.Documents) {
            document.Contract = contract;
            document.Signatures = [];
            document.Initials = [];
            for (const page of document.Pages) {
                contract.Pages.push(page);
                page.Document = document;
                if (page.Signatures.length > 0) {
                    for (const signature of page.Signatures) {
                        contract.Signatures.push(signature);
                        document.Signatures.push(signature);
                        signature.Page = page;
                    }
                }
                if (page.Initials.length > 0) {
                    for (const initials of page.Initials) {
                        contract.Initials.push(initials);
                        document.Initials.push(initials);
                        initials.Page = page;
                    }
                }
            }
        }
        for (const document of contract.Documents) {
            for (const page of document.Pages) {
                if (page.Signatures.length > 0) {
                    for (const signature of page.Signatures) {
                    }
                }
                if (page.Initials.length > 0) {
                    for (const initials of page.Initials) {
                    }
                }
            }
        }
        this.contract = contract;
        return this.contract;
    }
    async byAddendum(id?: number) {
        const url = env.endpointBaseUrl;
        const response = await fetch(`${url}/Contract/ByAddendum/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    User: getToken(),
                    Store: getStore()
                },
                body: JSON.stringify({ ID: id })
            }
        );
        const contractData = <Contract>await response.json();
        const contract = contractData;
        contract.Pages = [];
        contract.Signatures = [];
        contract.Initials = [];
        for (const document of contract.Documents) {
            document.Contract = contract;
            document.Signatures = [];
            document.Initials = [];
            for (const page of document.Pages) {
                contract.Pages.push(page);
                page.Document = document;
                if (page.Signatures.length > 0) {
                    for (const signature of page.Signatures) {
                        contract.Signatures.push(signature);
                        document.Signatures.push(signature);
                        signature.Page = page;
                    }
                }
                if (page.Initials.length > 0) {
                    for (const initials of page.Initials) {
                        contract.Initials.push(initials);
                        document.Initials.push(initials);
                        initials.Page = page;
                    }
                }
            }
        }
        for (const document of contract.Documents) {
            for (const page of document.Pages) {
                if (page.Signatures.length > 0) {
                    for (const signature of page.Signatures) {
                    }
                }
                if (page.Initials.length > 0) {
                    for (const initials of page.Initials) {
                    }
                }
            }
        }
        this.contract = contract;
        return this.contract;
    }


    contract: Contract | undefined;
    async signContract(contract: Contract) {
        const url = env.endpointBaseUrl;
        const body = {
            LoanID: contract.LoanRequest.ID,
            Inputs: {
                Documents: {}
            }
        };
        for (const document of contract.Documents) {
            body.Inputs.Documents[document.Name] = {};
            if (document.Signatures.length > 0) {
                body.Inputs.Documents[document.Name].Signatures = {};
                for (const signature of document.Signatures) {
                    body.Inputs.Documents[document.Name].Signatures[signature.Name] = signature.Image;
                }
            }
            if (document.Initials.length > 0) {
                body.Inputs.Documents[document.Name].Initials = {};
                for (const initials of document.Initials) {
                    body.Inputs.Documents[document.Name].Initials[initials.Name] = initials.Image;
                }
            }

        }
        const response = await fetch(`${url}/Contract/Sign/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    User: getToken(),
                    Store: getStore()
                },
                body: JSON.stringify(body)

            }
        );

        contract = (await response.json()) as Contract;
        return contract;

    }
    async signAddenda(contract: Contract) {
        const url = env.endpointBaseUrl;
        const body = {
            ID: contract.LoanRequest.ID,
            Inputs: {
                Documents: {}
            }
        };
        for (const document of contract.Documents) {
            body.Inputs.Documents[document.Name] = {};
            if (document.Signatures.length > 0) {
                body.Inputs.Documents[document.Name].Signatures = {};
                for (const signature of document.Signatures) {
                    body.Inputs.Documents[document.Name].Signatures[signature.Name] = signature.Image;
                }
            }
            if (document.Initials.length > 0) {
                body.Inputs.Documents[document.Name].Initials = {};
                for (const initials of document.Initials) {
                    body.Inputs.Documents[document.Name].Initials[initials.Name] = initials.Image;
                }
            }

        }
        const response = await fetch(`${url}/Contract/SignAddendum/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    User: getToken(),
                    Store: getStore()
                },
                body: JSON.stringify(body)

            }
        );

        contract = (await response.json()) as Contract;
        return contract;
    }

    async signByEmail(loanRequestID: number) {
        const url = env.endpointBaseUrl;
        const body = {
            LoanRequestID: loanRequestID
        };
        const response = await fetch(`${url}/Contract/SignByEmail/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }
        );

        return  (await response.json()) as Contract;

    }

    async download(contract: Contract);
    async download(id: number);
    async download(value: Contract | number) {
        if (typeof value === 'number') {
            const contract = await this.byLoan(value);
            this.download(contract);
        } else {
            if (value.PDF) {
                const blob = this.base64toBlob(value.PDF, 'application/pdf');
                if (blob) {
                    const a = window.document.createElement('a');
                    a.href = window.URL.createObjectURL(blob);
                    a.download = this.contractFileName(value.LoanRequest.ID);
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                }
            }
        }
    }
    async downloadPDF(id: number) {
        const base64 = await this.http.post(
            'Contract',
            { method: 'PDF', controller: 'Contract' },
            { Input: { Contract: { ID: id } } }
        );

        const blob = this.base64toBlob(base64, 'application/pdf', base64.length);
        if (!blob) {
            return;
        }

        downloadViaAnchor(
            blob,
            `Contract_${id}_phf_${moment().format('YYYY-MM-DD')}.pdf`
        );

        function downloadViaAnchor(blob: Blob, filename: string) {
            if ('msSaveBlob' in window.navigator && typeof window.navigator.msSaveBlob === 'function') {
                window.navigator.msSaveBlob(blob, filename);
            }
            else {
                const a = window.document.createElement('a');
                a.href = window.URL.createObjectURL(blob);
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
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

    contractFileName(id: number): string {
        return `Contract_${id}_phf_${new Date().getDate()}.pdf`;
    }
}
