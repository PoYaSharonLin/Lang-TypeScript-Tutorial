var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class HttpClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    request(url, method, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseUrl}${url}`, {
                    method,
                    headers: Object.assign({ 'Content-Type': 'application/json' }, (headers || {})),
                    body: body ? JSON.stringify(body) : undefined,
                });
                const data = yield response.json();
                if (!response.ok) {
                    return {
                        status: response.status,
                        data: null,
                        error: (data === null || data === void 0 ? void 0 : data.message) || 'An error occurred',
                    };
                }
                return { status: response.status, data };
            }
            catch (error) {
                return {
                    status: 500,
                    data: null,
                    error: error.message || 'Network error',
                };
            }
        });
    }
    get(url, headers) {
        return this.request(url, 'GET', undefined, headers);
    }
    post(url, body, headers) {
        return this.request(url, 'POST', body, headers);
    }
    put(url, body, headers) {
        return this.request(url, 'PUT', body, headers);
    }
    delete(url, headers) {
        return this.request(url, 'DELETE', undefined, headers);
    }
}
