import { Inject, Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import env from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { EndPoint, get, getStore, getToken, post, parsePostParameter } from '../http/post';
import { httpErrorHandlerToken } from '../tokens/http-error-handler.token';
import DialogService from './dialog.service';
import { Global } from './Global';

const requesting$ = new BehaviorSubject(false);

@Injectable({ providedIn: 'root' })
export default class HttpService {
    constructor(readonly dialogs: DialogService, readonly router: Router, readonly global: Global, @Inject(httpErrorHandlerToken) @Optional()
        readonly errorHandler?: (error: any) => Promise<void | never> | void | never
    ) { }
    async post(type: string, endPoint: EndPoint, body: object): Promise<any>;
    async post(endPoint: EndPoint, body: object): Promise<any>;
    async post(typeOrEndPoint: string | EndPoint, endPointOrBody: EndPoint | object, body?: object) {
        requesting$.next(true);
        try {
            return await post(
                <any>typeOrEndPoint,
                <any>endPointOrBody,
                <any>body
            );
        } catch (e) {
            const { controller, method, type } = parsePostParameter(typeOrEndPoint, endPointOrBody);
            const obj = {
                message: e.message,
                details: {
                    Exception: e,
                    Type: type,
                    Controller: controller,
                    Method: method
                }
            };
            if (this.errorHandler) return await this.errorHandler(e);

            switch (e.status) {
                case 401:
                    Object.keys(localStorage).forEach(key => {
                        switch (key) {
                            case 'store':
                            case 'workstation':
                                break;
                            default:
                                delete localStorage[key];
                                break;
                        }
                    });
                    this.router.navigate(['/login']);
                    break;
                case 404:
                    this.dialogs.error({ title: 'Not Found', message: `The requested ${type} does not exist.` });
                    break;
                default:
                    this.dialogs.error(obj);
                    throw e;
            }
        } finally {
            requesting$.next(false);
        }
    }
    withErrorHandler(
        handler: this['errorHandler']
    ) {
        return (
            Reflect.construct(HttpService, [this.router, this.global, handler])
        );
    }
    async get(endPoint: string | EndPoint) {
        requesting$.next(true);
        try {
            if (typeof endPoint === 'string' && endPoint.startsWith('http')) {
                return await fetch(endPoint, {
                    mode: 'cors',
                    credentials: 'omit',
                    cache: 'no-cache',
                    headers: createHeaders()
                });
            }
            return await get(endPoint);
        } finally {
            requesting$.next(false);
        }
    }

    async delete(url: string) {
        requesting$.next(true);
        try {
            return await this.fetch(`${env.endpointBaseUrl}/${url}`, {
                mode: 'cors',
                credentials: 'omit',
                cache: 'no-cache',
                method: 'DELETE',
                headers: createHeaders()
            });
        } finally {
            requesting$.next(false);
        }
    }

    async fetch(input: RequestInfo, init?: RequestInit) {
        const headers = createHeaders();
        requesting$.next(true);
        try {
            const response = await fetch(typeof input === 'string' && input.startsWith('http') ? input : `${env.endpointBaseUrl}/${input}`, {
                mode: 'cors',
                credentials: 'omit',
                cache: 'no-cache',
                headers: {
                    ...init && init.headers,
                    ...headers,
                    'Content-Type': 'application/json'
                },
                ...init
            });
            if (response.ok)
                return response;

            const errorText = await response.text();
            let error;
            try {
                error = JSON.parse(errorText);
            } catch { }
            throw Error(
                (error &&
                    (error.message ||
                        error.exceptionMessage ||
                        error.ExceptionMessage)) ||
                errorText ||
                response.statusText
            );
        } finally {
            requesting$.next(false);
        }
    }
    get requesting$() {
        return requesting$;
    }
}

function createHeaders(): HeadersInit {
    const token = getToken();
    const store = getStore();
    let headers: HeadersInit = {};
    if (token)
        headers = { ...headers, User: token };
    if (store)
        headers = { ...headers, Store: store };
    return headers;
}
