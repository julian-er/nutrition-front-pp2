import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes, IRoute } from '../routes';
import Router from '../Router';
import PrivateRoute from '../PrivateRoute';

/**
 * Route Switch
 * @param routes Array of routes
 * Create routes of the APP
 */
function RouteSwitch(): ReactElement {
  return (
    <Router>
      <Routes>
        {/* Set our routes throwing our routes object */}
        {routes.map((route: IRoute) => (
          <Route key={route.url} path={`/${route.url}`} element={route.isPublic ? route.element : <PrivateRoute>{route.element}</PrivateRoute>} />
        ))}
        {/* The main page when user is logged is dashboard */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Navigate to="/dashboard" />
            </PrivateRoute>
          }
        />
        {/* If use a page that is not in our routes and it is logged in go to 404 not found page */}
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Navigate to="/404" />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default RouteSwitch;
