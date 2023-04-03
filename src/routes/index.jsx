import Dashboard from "../pages/Dashboard/Dashboard";

const routes = [
  {
    name: "Dashboard",
    key: "dashboard",
    path: "/",
    component: <Dashboard />,
    private: true,
  },
];

export default routes;
