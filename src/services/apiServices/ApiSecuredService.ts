import { AxiosInstance } from 'axios';
import ApiService from './ApiService';

export default class ApiSecuredService extends ApiService {
  protected static axiosInstance: AxiosInstance = this.getInstance();

  protected static getInstance(): AxiosInstance {
    let baseInstance = super.getInstance();

    baseInstance.interceptors.request.use(function (reqConfig: any) {
      // -- Get Token from ls
      const token = localStorage.getItem('jwt-token') as string;
      // -- Add bearer
      const bearerToken = 'bearer ' + token;
      // -- Set full token
      reqConfig.headers['x-auth'] = bearerToken;
      return reqConfig;
    });

    baseInstance.interceptors.response.use(function(reqConfig){
         //-- Get the new token
         let token = reqConfig.headers['x-auth'];

         if(token){
            localStorage.setItem("jwt-token", token)
         }

         return reqConfig
    })

    return baseInstance
  }
}
