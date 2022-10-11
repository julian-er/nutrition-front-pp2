import ApiBaseService, { IResponse } from '../apiServices/ApiBaseService';
export interface IPatientsRequest {
  id:number,
  first_name:string,
  last_name:string,
  user_name:string,
  profile_image:string
}
export default class NutritionistService extends ApiBaseService {
  public static async getNutritionistPatients(id:number) {
    let res = await this.unsecuredGet(`/patients/related/`, {id});
    if (res.success) {
      console.log("patients")
    } else {
     console.log("error")
    }
    return res;
  }
}
