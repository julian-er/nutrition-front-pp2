import ApiBaseService from '../apiServices/ApiBaseService';

export interface ISinglePatientResponse {
  id:number,
  first_name:string,
  last_name:string,
  birth_date:string,
  phone_number:string,
  email:string,
  profile_image:string
}

export default class PatientService extends ApiBaseService {
  public static async getSingularPatientData(id:number) {
    let res = await this.securedGet<Array<ISinglePatientResponse>>(`users/${id}`);
    return res;
  }
}

export function getAge(date:string):string{
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) age=age-1;
    return age.toString();
}
