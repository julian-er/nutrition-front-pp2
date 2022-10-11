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
  isPatient:boolean,
}

export interface IRegisterPatientRequest extends IRegisterRequest{
  nutritionist_id: number
}

export default class RegisterService extends ApiBaseService {
  public static async register({ user_name, password, email, first_name, last_name, phone_number, birth_date, profile_image, isNutritionist, isPatient}: IRegisterRequest): Promise<IResponse<any>> {
    let res = await this.unsecuredPost(`users/create`, { user_name, password, email, first_name, last_name, phone_number, birth_date, profile_image, isNutritionist, isPatient});
    return res;
  }

  public static async registerPatient({ user_name, password, email, first_name, last_name, phone_number, birth_date, profile_image, isNutritionist, isPatient, nutritionist_id}: IRegisterPatientRequest): Promise<IResponse<any>> {
    let createPatient = await this.securedPost(`users/create`, { user_name, password, email, first_name, last_name, phone_number, birth_date, profile_image, isNutritionist, isPatient});
    let patient_id = createPatient.response    
    let createRelation = await this.securedPost(`users/relation/add`, {nutritionist_id, patient_id});
    return createRelation;
  }
}



export function getBase64(file: Blob){
  return new Promise(resolve => {
    let baseURL: any = "";
    let reader = new FileReader();
    // Convert the file to base64 text
     reader.readAsDataURL(file);
    reader.onload = () => {
    baseURL = reader.result;
    resolve(baseURL);
          };
    });
};

