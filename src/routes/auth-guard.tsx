
import { useLocation, Navigate, Outlet } from "react-router-dom";


// import { getDecryptedCookie } from "src/utils";

import { APP_PATHS } from "./paths";
// import { APP_SECRET_KEY } from "../config";



const AuthGuard = ({ children, allowedRoles }: any) => {

  const location = useLocation();


  const storedUser = JSON.parse(localStorage.getItem('user') || '[]');

  // const decryptedToken = getDecryptedCookie(APP_SECRET_KEY);

console.log('storedUser', storedUser);


  if (storedUser.name) {

    // if (allowedRoles.includes(decryptedToken.role)) {
      return children || <Outlet />;
    // }
    
    // else if (storedUser) {
    //   return <Navigate to={`/${APP_PATHS.unAuthorized}`} state={{ from: location }} replace />
    // }

  }


  return <Navigate to={`/${APP_PATHS.login}`} state={{ from: location }} replace />;
};

export default AuthGuard;
