import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../../components/utils/NotFound";
import Sidebar from "../../components/dashboard/Sidebar";
import CardSections from "../../components/dashboard/CardSections";
const Overview = React.lazy(() => import("../dashboard/Overview"));
const Accounts = React.lazy(() => import("../dashboard/Accounts"));
const Bills = React.lazy(() => import("../dashboard/Bills"));
const Income = React.lazy(() => import("../dashboard/Income"));
const Transactions = React.lazy(() => import("../dashboard/Transactions"));
export default function Index() {
  let route = [
    {
      path: "",
      element: <Overview />,
    },
    {
      path: "accounts",
      element: <Accounts />,
    },
    {
      path: "bills",
      element: <Bills />,
    },
    {
      path: "income",
      element: <Income />,
    },
    {
      path: "transaction",
      element: <Transactions />,
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
        <div className="flex ">
          <Sidebar />
          {routes}
          <CardSections />
        </div>
      </React.Suspense>
    </>
  );
}
