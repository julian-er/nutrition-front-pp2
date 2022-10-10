import * as jwt from 'jose';

/**
 * decryptJwt
 * Return info in JWT
 * @returns boolean
 */
export interface IUserJWTInfo {
  id: number;
  user_name: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  birth_date: string;
  profile_image: null | string;
  isNutritionist: number;
  isPatient: number;
  iat: number;
  exp: number;
}
const decryptJwt = (): IUserJWTInfo | void => {
  let ls = localStorage.getItem('jwt-token');

  if (ls && typeof ls === 'string') {
    try {
      const decodePayload = jwt.decodeJwt(ls as string) as unknown as IUserJWTInfo;
      return decodePayload;
    } catch (error) {
      return console.log(error);
    }
  }
};

export default decryptJwt;
