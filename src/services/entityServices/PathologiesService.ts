import ApiBaseService from '../apiServices/ApiBaseService';

export default class PathologiesServices extends ApiBaseService {
  public static async getPathologiesData(): Promise<any> {
    const res = await this.securedGet(`pathologies/all`);
    return res;
  }
}
