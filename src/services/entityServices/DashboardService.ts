import ApiBaseService from '../apiServices/ApiBaseService';
import { IDashboardDataResponse } from '../interfaces/IDashboard';

export default class DashboardService extends ApiBaseService {
  public static async getDashboardData(user_id: number): Promise<any> {
    const res = await this.securedGet<IDashboardDataResponse>(`dashboard/${user_id}`);
    return res;
  }
}
