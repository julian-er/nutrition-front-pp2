import ApiBaseService, { IResponse } from '../apiServices/ApiBaseService';

export interface IPatientsResponse {
  id:number,
  first_name:string,
  last_name:string,
  birth_date:string,
  profile_image:string
}

export default class NutritionistService extends ApiBaseService {
  public static async getNutritionistPatients(user_id:number) {
    let res = await this.securedGet<Array<IPatientsResponse>>(`patients/related/${user_id}`);
    return res;
  }
}
