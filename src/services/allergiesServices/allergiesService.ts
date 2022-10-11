import ApiBaseService from '../apiServices/ApiBaseService';

export default class AllergiesServices extends ApiBaseService {
  public static async getAllergiesData(): Promise<any> {
    const res = await this.securedGet(`allergies/all`);
    console.log(res);
    return res;
  }
}
