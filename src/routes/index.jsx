import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

const routes = [
  {
    name: "Dashboard",
    key: "dashboard",
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    name: "Login",
    key: "login",
    path: "/",
    component: <Login />,
  },
];

export default routes;
