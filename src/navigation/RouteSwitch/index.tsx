import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { routes, IRoute } from "../routes";
import Router from "../Router";
import PrivateRoute from "../PrivateRoute";

/**
 * Route Switch
 * @param routes Array of routes
 * Create routes of the APP 
 */
function RouteSwitch(): ReactElement {
  return (
    <Router>
      <Routes>
        {routes.map((route: IRoute) => (
          <Route
            key={route.url}
            path={`/${route.url}`}
            element={route.isPublic ? (route.element) : (<PrivateRoute>{route.element}</PrivateRoute>) }
          />
        ))}
        <Route />
      </Routes>
    </Router>
  );
}

export default RouteSwitch;
