import ApiBaseService, { IResponse } from '../apiServices/ApiBaseService';

export interface IRegisterRequest {
    name:string,
    last_name:string,
    email:string,
    phone_number:string,
    user_name:string,
    birth_date:string,
    password: string,
    confirm_pass:string
}




export default class RegisterService extends ApiBaseService {
  public static async register({ name, last_name, email, phone_number, user_name, birth_date, password, confirm_pass}: IRegisterRequest): Promise<IResponse<any>> {
    let res = await this.unsecuredPost(`/users/create`, { name, last_name, email, phone_number, user_name, birth_date, password, confirm_pass});
    
    return res;
  }
}