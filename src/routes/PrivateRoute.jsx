import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isLoggedIn || !token) {
    return <Navigate to="/authentication/sign-in" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
