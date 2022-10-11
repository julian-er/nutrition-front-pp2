import ApiBaseService, { IResponse } from '../apiServices/ApiBaseService';

export interface IRegisterRequest {
  user_name:string,
  password:string,
  email:string,
  first_name:string,
  last_name:string,
  phone_number:string,
  birth_date:string,
  profile_image: string| null,
  isNutritionist:boolean,
  isPatient:boolean
}

export default class RegisterService extends ApiBaseService {
  public static async register({ user_name, password, email, first_name, last_name, phone_number, birth_date, profile_image, isNutritionist, isPatient}: IRegisterRequest): Promise<IResponse<any>> {
    console.log( user_name, password, email, first_name, last_name, phone_number, birth_date, profile_image, isNutritionist, isPatient)
    let res = await this.unsecuredPost(`users/create`, { user_name, password, email, first_name, last_name, phone_number, birth_date, profile_image, isNutritionist, isPatient});
    return res;
  }
}