import ApiService from './ApiService';

export interface IResponse<T> {
  success: boolean;
  message: string;
  httpStatusCode: number;
  response: T;
}

export default class ApiBaseService {
  private static readonly isWindow: any = typeof window !== 'undefined' ? window : null;
  private static readonly token: string = this.isWindow ? (localStorage.getItem('jwt-token') as string) : '';

  // Unsecure get //

  protected static async unsecuredGet<T>(url: string, params?: any, headers?: any): Promise<IResponse<T>> {
    try {
      let res = await ApiService.get(url, params, headers);
      let data = res.data;
      let response: IResponse<T> = data;
      return response;
    } catch (error) {
      return { success: false, message: 'Unexpected Error', httpStatusCode: 500, response: null as any };
    }
  }

  protected static async unsecuredPost<T>(url: string, params?: any, headers?: any): Promise<any> {
    try {
      let res = await ApiService.post(url, params, headers);
      let data = res.data;
      let response: IResponse<T> = data;
      return response;
    } catch (error) {
      return { success: false, message: 'Unexpected Error', httpStatusCode: 500, response: null as any };
    }
  }
}
