import env from 'src/environments/environment';

export interface EndPoint { method: string; controller: string; }
export async function post(type: string, endPoint: EndPoint, body: object): Promise<any>;
export async function post(endPoint: EndPoint, body: object): Promise<any>;
export async function post(typeOrEndPoint: string | EndPoint, endPointOrBody: EndPoint | object, body?: object) {
    // tslint:disable-next-line:no-unnecessary-initializer spurious warning
    const { controller, method, type } = parsePostParameter(typeOrEndPoint, endPointOrBody);
    const postBody = body ? body : endPointOrBody;
    const response = await makeRequest(controller, method, postBody, type, "POST");

    return await processResponse(response);
}

async function processResponse(response: Response) {
    if (response.ok) {
        switch (response.status) {
            case 204:
                return;
            default:
                const data = await response.json();
                if (env.verbose) {
                    if (data.Result)
                        console.info('Result: ', data.Result);
                    if (data.Error)
                        console.info('Error: ', data.Error);
                }
                if (data.Error && !data.Result) {
                    throw { status: response.status < 400 ? 400 : response.status, message: data.Error.Message || data.Error.Description || data.Error.Name };
                }
                return data.Result ?? data;
        }
    } else {
        let data: { ExceptionMessage?} = {};
        // Attempt to extract detailed errors in JSON format with no expectation of success.
        try { data = await response.json(); } catch { } //
        throw { status: response.status, message: "ExceptionMessage" in data ? data.ExceptionMessage : response.statusText, data };
    }
}

async function makeRequest(controller?: string, method?: string, postBody?: object, type?: string, httpMethod?: "GET" | "POST" | "PUT" | "PATCH") {
    if (env.verbose)
        console.log(JSON.stringify({ ...postBody, Method: method, Controller: controller, Type: type ? type.startsWith('MLC.Data.Models.') ? type : `MLC.Data.Models.${type}` : undefined }));
    let headers: HeadersInit = {
        "Content-Type": "Application/JSON"
    };
    const token = getToken();
    const store = getStore();
    if (token) headers = { ...headers, User: token };
    if (store) headers = { ...headers, Store: store };
    let request: RequestInit = {
        method: httpMethod,
        headers
    };
    if (postBody && method !== "GET") {
        request = {
            ...request,
            body: JSON.stringify({
                ...postBody, Method: method,
                Controller: controller,
                Type: type
                    ? type.startsWith('MLC.Data.Models.') ? type
                        : `MLC.Data.Models.${type}` : undefined
            })
        };
    }
    return await fetch(`${env.endpointBaseUrl}/${controller}/${method}`, request);
}

export async function get(endPoint: string | EndPoint) {
    const { controller, method } = typeof endPoint === 'string' ? { method: undefined, controller: undefined } : endPoint;
    const response = await makeRequest(controller, method, undefined, undefined, "GET");

    return await processResponse(response);
}

export function getUser() {
    const userJson = localStorage.user;
    if (userJson) {
        const user = JSON.parse(userJson);
        return user;
    }
}
export function getToken() {
    const user = getUser();
    if (user)
        return user.Token;
}
export function getStore() {
    const user = getUser();
    if (user && user.Person && user.Person.Customer && user.Person.Customer.Store)
        return user.Person.Customer.Store.ID;

}

export function parsePostParameter(typeOrEndPoint: string | EndPoint, endPointOrBody: EndPoint | object) {
    // tslint:disable-next-line: no-unnecessary-initializer
    const { controller = undefined, method = undefined } = typeof typeOrEndPoint !== 'string' ? typeOrEndPoint : 'method' in endPointOrBody ? endPointOrBody : {};
    const type = typeof typeOrEndPoint === 'string' ? typeOrEndPoint : undefined;
    return { controller, method, type };
}

export type Method = "ByID" | "Signin";
export type Controller = "User" | "Model";
