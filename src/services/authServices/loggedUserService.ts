import * as jwt from 'jose';
import AuthService from './authService';

export default async function getUserLoggedData(){
    const ls = await AuthService.getUserData();
    const decodePayload = jwt.decodeJwt(ls as string);
    return decodePayload
  };
  