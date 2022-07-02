import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";


/**
 * Private Route
 * @param props propsWithChildren 
 * @returns JSX Element
 * 
 * IF the users isn't logged we send they to login's page, else if is logged we display the page of the url 
 */
function PrivateRoute(props: PropsWithChildren) {
  const { children } = props;
  const token = true; // TODO : create service for login and token auth
  const location = useLocation();

  if(!token){
    console.log('navigate')
    return <Navigate to="/login" state={{from : location}} />
  }

  return (children as JSX.Element);
}

export default PrivateRoute;
