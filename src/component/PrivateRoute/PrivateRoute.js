import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import auth from"../../Firebase/firebase.initialization"
import Loading from "../Loading/Loading";

const PrivateRoute = () => {
  const location = useLocation();
  console.log(location.pathname);
  const {user, loading} = useAuth(auth);
  console.log(Outlet);
  if(loading){
    return<Loading></Loading>
  }
  return user?.email ? (
    <Outlet />
  ) 
  : (
    <Navigate to="/login" state={{ form: location }} replace />
  );
};

export default PrivateRoute;
