import ApiBaseService, { IResponse } from '../apiServices/ApiBaseService';

export interface ILoginRequest {
  user_name: string;
  password: string;
}

export interface ILogin {
  token: string;
}

export default class AuthService extends ApiBaseService {
  public static async login({ user_name, password }: ILoginRequest): Promise<IResponse<ILogin>> {
    let res = await this.unsecuredPost<ILogin>(`login`, { user_name, password });

    if (res.success) {
      localStorage.setItem('jwt-token', res.token);
    } else {
      localStorage.setItem('jwt-token', '');
    }

    return res;
  }

  public static async getUserData(){
    return localStorage.getItem('jwt-token');
  }
}
