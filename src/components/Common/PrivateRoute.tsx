import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import Dashboard from "../../features/Dashboard";

export interface PrivateRouteProps {}

const PrivateRoute = (props: RouteProps) => {
  // check if user is logged in

  // if no -> then redirect to login page
  const isLogged = Boolean(localStorage.getItem("accessToken"));
  if (!isLogged) return <Redirect to="/" />;

  return (
    <Route {...props}>
      <Dashboard />
    </Route>
  );
};

export default PrivateRoute;
