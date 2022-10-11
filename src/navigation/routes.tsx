import NotFound from '../pages/404';
import Allergies from '../pages/Allergies';
import Dashboard from '../pages/Dashboard';
import DayPlan from '../pages/DayPlan/indedx';
import Food from '../pages/Food';
import Login from '../pages/Login';
import Notes from '../pages/Notes';
import Pathologies from '../pages/Pathologies';
import Patients from '../pages/Patients';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import SinglePatient from '../pages/Patients/SinglePatient';
import { allergiesIcon, dashboardIcon, foodIcon, notesIcon, pathologiesIcon, patientsIcon, profileIcon } from '../shared/icons';

export interface IRoute {
  url: string;
  label?: string;
  icon?: JSX.Element;
  isPublic?: boolean;
  showNavigation?: boolean;
  element: JSX.Element;
}

/**
 *  Routes file
 *  @param url string;
 *  @param label string; -> Optional
 *  @param icon JSX.Element; -> SVG Optional
 *  @param isPublic boolean;
 *  @param showNavigation : boolean; -> Optional
 *  @param element JSX.Element; -> Page to rendering
 *  @return Array of routes
 *
 * Label param is optional because we use it only for display the name in a navigation component like Sidebar or Menu, when the showNavigation options it's setting on true we proceed to display in these components
 */
export const routes = Object.freeze<IRoute[]>([
  {
    url: 'login',
    label: 'Log In',
    isPublic: true,
    element: <Login />
  },

  {
    url: '/dashboard',
    label: 'Dashboard',
    icon: dashboardIcon,
    isPublic: false,
    showNavigation: true,
    element: <Dashboard />
  },
  {
    url: '/404',
    isPublic: false,
    element: <NotFound />
  },

  {
    url: '/notes',
    label: 'Notes',
    icon: notesIcon,
    showNavigation: true,
    isPublic: false,
    element: <Notes />
  },

  {
    url: '/food',
    label: 'Food',
    icon: foodIcon,
    showNavigation: true,
    isPublic: false,
    element: <Food />
  },
  {
    url: '/patients',
    label: 'Patients',
    icon: patientsIcon,
    isPublic: false,
    showNavigation: true,
    element: <Patients />
  },
  {
    url: '/patients/:patientsId',
    isPublic: false,
    element: <SinglePatient />
  },
  {
    url: '/patients/:patientsId/day-plan',
    isPublic: false,
    element: <DayPlan />
  },
  {
    url: '/pathologies',
    label: 'Pathologies',
    icon: pathologiesIcon,
    isPublic: false,
    showNavigation: true,
    element: <Pathologies />
  },
  {
    url: '/allergies',
    label: 'Allergies',
    icon: allergiesIcon,
    showNavigation: true,
    isPublic: false,
    element: <Allergies />
  },
  {
    url: '/profile',
    icon: profileIcon,
    showNavigation: false,
    isPublic: false ,
    element: <Profile />
  },
  {
    url: 'register',
    label: 'Register',
    isPublic: true,
    element: <Register />
  }
]);
