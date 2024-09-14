import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"


import { APP_PATHS } from "src/routes";
// import { APP_SECRET_KEY } from "src/config";
// import { getDecryptedCookie } from "src/utils";
import { AuthLeftComponent } from "./components";



export const AuthLayout = () => {

  // const accessToken = getDecryptedCookie(APP_SECRET_KEY);
  const storedUser = JSON.parse(localStorage.getItem('user') || '[]');


  const navigate = useNavigate();



  useEffect(() => {

    if (storedUser.name) {
      navigate(`/${APP_PATHS.dashboard}`)
    }

  }, [navigate, storedUser])


  return (
    <div className="h-screen min-h-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 justify-between overflow-hidden">
      <div className="md:col-span-3 hidden md:block">
        <AuthLeftComponent />
      </div>
     <div className="h-full grid-cols-1 md:col-span-3 lg:col-span-2 px-[30px] sm:px-[64px]">
        <Outlet />
      </div>

    </div>
  )
}
