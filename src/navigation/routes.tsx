import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
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
    element: (
      <div>
        <p>Error 404</p>
      </div>
    )
  },

  {
    url: '/notes',
    label: 'Notes',
    icon: notesIcon,
    showNavigation: true,
    isPublic: false,
    element: (
      <div>
        <p>NOTES</p>
      </div>
    )
  },
  {
    url: '/notes/:notesId',
    isPublic: false,
    element: (
      <div>
        <p>NOTES</p>
      </div>
    )
  },

  {
    url: '/food',
    label: 'Food',
    icon: foodIcon,
    showNavigation: true,
    isPublic: false,
    element: (
      <div>
        <p>FOOD</p>
      </div>
    )
  },

  {
    url: '/food/:foodId',
    isPublic: false,
    element: (
      <div>
        <p>FOOD</p>
      </div>
    )
  },

  {
    url: '/patients',
    label: 'Patients',
    icon: patientsIcon,
    isPublic: false,
    showNavigation: true,
    element: (
      <div>
        <p>PATIENTS</p>
      </div>
    )
  },
  {
    url: '/patients/:patientsId',
    isPublic: false,
    element: (
      <div>
        <p>PATIENTS ID</p>
      </div>
    )
  },
  {
    url: '/pathologies',
    label: 'Pathologies',
    icon: pathologiesIcon,
    isPublic: false,
    showNavigation: true,
    element: (
      <div>
        <p>PATHOLOGIES</p>
      </div>
    )
  },
  {
    url: '/pathologies/:pathologiesId',
    isPublic: false,
    element: (
      <div>
        <p>PATHOLOGIES</p>
      </div>
    )
  },

  {
    url: '/allergies',
    label: 'Allergies',
    icon: allergiesIcon,
    showNavigation: true,
    isPublic: false,
    element: (
      <div>
        <p>ALLERGIES</p>
      </div>
    )
  },
  {
    url: '/allergies/:allergiesId',
    isPublic: false,
    element: (
      <div>
        <p>ALLERGIES</p>
      </div>
    )
  },

  {
    url: '/profile',
    label: 'Profile',
    icon: profileIcon,
    showNavigation: false,
    isPublic: false,
    element: (
      <div>
        <p>PROFILES</p>
      </div>
    ) // esto debería llamarse nutritionists o professional como en el dashboard???
  },
  {
    url: '/profile/:profileId',
    isPublic: false,
    element: (
      <div>
        <p>PROFILE ID</p>
      </div>
    )
  }
]);
