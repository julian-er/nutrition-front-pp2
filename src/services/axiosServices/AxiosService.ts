import axios, { AxiosInstance } from "axios";

export default class AxiosService {
  protected static axiosInstance: AxiosInstance = this.getInstance();

  // -- Get instance
  protected static getInstance(): AxiosInstance {
    return axios.create();
  }

  public static setInstance(instance: AxiosInstance) {
    this.axiosInstance = instance;
  }

  public static async get(url: string, params?: any, headers?: any) {
    return await this.axiosInstance.get(`/${url}`, { params, headers });
  }

  public static async post(url: string, body: any, headers?: any) {
    return await this.axiosInstance.post(`/${url}`, body, { headers });
  }

  public static async put(url: string, body: any, headers?: any) {
    return await this.axiosInstance.put(`/${url}`, body, { headers });
  }

  public static async delete(url: string, params: any, headers?: any) {
    return await this.axiosInstance.delete(`/${url}`, { params, headers });
  }
}
