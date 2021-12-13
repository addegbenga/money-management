import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../../components/utils/NotFound";
const Login = React.lazy(() => import("../auth/Login"));
const Register = React.lazy(() => import("../auth/Register"));

export default function Index() {
  let route = [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  let routes = useRoutes(route);
  return (
    <>
      <React.Suspense
        fallback={
          <div className="flex justify-center items-center text-white h-screen text-4xl">
            loading...
          </div>
        }
      >
        {routes}
      </React.Suspense>
    </>
  );
}
