import Login from "../pages/Login";
import Nutritionist from "../pages/Nutritionist";

export interface IRoute {
  url: string;
  label?: string;
  icon?: string;
  isPublic?: boolean;
  showNavigation? : boolean;
  element: JSX.Element;
}

/**
*  Routes file 
*  @param url string;
*  @param label string; -> Optional
*  @param icon string; -> Optional
*  @param isPublic boolean;
*  @param showNavigation : boolean; -> Optional
*  @param element JSX.Element; -> Page to rendering 
*  @return Array of routes
*  
* Label param is optional because we use it only for display the name in a navigation component like Sidebar or Menu, when the showNavigation options it's setting on true we proceed to display in these components
*/
export const routes = Object.freeze<IRoute[]>([
  {
    url: "login",
    label: "Log In",
    isPublic: true,
    element: <Login />,
  },
  {
    url: "nutritionists",
    label: "Nutritionists",
    showNavigation: true,
    isPublic: false,
    element: <Nutritionist />,
  },
  {
    url: "nutritionists/:nutritionistsId",
    isPublic: false,
    element: <div><p>NUTRITIONIST ID</p></div>,
  },
  {
    url: "patients",
    label: "Patients",
    isPublic: false,
    element: <div><p>PATIENTS</p></div>,
  },
  {
    url: "patients/:patientsId",
    isPublic: false,
    element: <div><p>PATIENTS ID</p></div>,
  },
]);
