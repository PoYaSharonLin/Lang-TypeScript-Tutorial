export interface HttpResponse<T> {
    status: number;
    data: T;
    error?: string;
  }
  
  export class HttpClient {
    private baseUrl: string;
  
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }
  
    private async request<T>(
      url: string,
      method: string,
      body?: any,
      headers?: Record<string, string>
    ): Promise<HttpResponse<T>> {
      try {
        const response = await fetch(`${this.baseUrl}${url}`, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...(headers || {}),
          },
          body: body ? JSON.stringify(body) : undefined,
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          return {
            status: response.status,
            data: null as unknown as T,
            error: data?.message || 'An error occurred',
          };
        }
  
        return { status: response.status, data };
      } catch (error: any) {
        return {
          status: 500,
          data: null as unknown as T,
          error: error.message || 'Network error',
        };
      }
    }
  
    public get<T>(url: string, headers?: Record<string, string>): Promise<HttpResponse<T>> {
      return this.request<T>(url, 'GET', undefined, headers);
    }
  
    public post<T>(
      url: string,
      body: any,
      headers?: Record<string, string>
    ): Promise<HttpResponse<T>> {
      return this.request<T>(url, 'POST', body, headers);
    }
  
    public put<T>(
      url: string,
      body: any,
      headers?: Record<string, string>
    ): Promise<HttpResponse<T>> {
      return this.request<T>(url, 'PUT', body, headers);
    }
  
    public delete<T>(url: string, headers?: Record<string, string>): Promise<HttpResponse<T>> {
      return this.request<T>(url, 'DELETE', undefined, headers);
    }
  }
  