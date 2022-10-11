import ApiBaseService, { IResponse } from '../apiServices/ApiBaseService';

export interface ICreateRequest {
    name:string,
    description:string,
}

export default class CreateItemService extends ApiBaseService {
  public static async createItem({name, description}: ICreateRequest, type:string): Promise<IResponse<any>> {
    let res = await this.unsecuredPost(`${type}/create`, {name, description});
    return res;
  }
}