import axios, { AxiosInstance } from "axios";
import AxiosService from "../axiosServices/AxiosService";
import { config } from "./config";

export default class ApiService extends AxiosService {
    //-- Override the instance
    protected static axiosInstance: AxiosInstance = this.getInstance();

    //-- Get instance
    protected static getInstance(): AxiosInstance {
        const instance = axios.create({
            baseURL: config.apiUrl
        });
        return instance
    }
}