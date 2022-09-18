import * as jwt from 'jose';

/**
 * useAuth 
 * Verify if a user was logged in and the time of expiration
 * @returns boolean
 */
const useAuth = (): boolean => {
  let ls = localStorage.getItem('jwt-token');

  if (ls && typeof ls === 'string') {
    try {
      const decodePayload = jwt.decodeJwt(ls as string);
      if (decodePayload && decodePayload.exp && decodePayload.exp * 1000 > Date.now()) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

export default useAuth;
