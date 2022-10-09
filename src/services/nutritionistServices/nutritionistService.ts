import ApiBaseService, { IResponse } from '../apiServices/ApiBaseService';


export default class NutritionistService extends ApiBaseService {
  public static async getNutritionistPatients(id:number) {
    let res = await this.unsecuredPost(`patientsRelated`, { id });

    if (res.success) {
      console.log("patients")
    } else {
     console.log("error")
    }
    return res;
  }
}
