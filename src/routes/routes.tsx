import { FC, LazyExoticComponent, Suspense, lazy } from "react";

import { Navigate } from "react-router-dom";


import { AuthLayout, ProtectedLayout } from "src/layout";


import { LoadingComponent } from "src/common";


import { APP_PATHS } from "./paths";
import AuthGuard from "./auth-guard";




const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={<LoadingComponent />}>
    <Component {...props} />
  </Suspense>
);




const LoginPage = Loadable(lazy(() => import("../pages/auth/login")));
const SignUpPage = Loadable(lazy(() => import("../pages/auth/sign-up")));



const NotFoundPage = Loadable(lazy(() => import("../pages/not-found")));


const DashboardPage = Loadable(lazy(() => import("../pages/dashboard")));

const ShoppingCartPage = Loadable(lazy(() => import("../pages/shopping-cart")));




export const APP_ROUTES = [
  { path: "/", element: <Navigate to={APP_PATHS.dashboard} /> },


  {
    path: "auth",
    element: (
      <AuthLayout />
    ),
    children: [
      {
        path: "login",
        title: "Login",
        element: <LoginPage />
      },

      {
        path: "sign-up",
        title: "Sign Up",
        element: <SignUpPage />
      },

    ],
  },


  {
    path: "/",
    element: (
      <ProtectedLayout />
    ),
    children: [

      {
        path: "dashboard",
        title: "Dashboard",
        element: (
          <AuthGuard >
            <DashboardPage />
          </AuthGuard>
        )
      },
      {
        path: "shopping-cart",
        title: "Shopping Cart",
        element: (
          <AuthGuard >
            <ShoppingCartPage />
          </AuthGuard>
        )
      },

    ],
  },

  {
    path: "*",
    title: 'Not Found',
    element: <NotFoundPage />,
  },
];
