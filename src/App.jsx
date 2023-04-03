import { Route, Routes } from "react-router";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import routes from "./routes";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => (
      <Route
        path={route.path}
        element={
          route.private ? (
            <PrivateRoute>{route.component}</PrivateRoute>
          ) : (
            route.component
          )
        }
        key={route.key}
      />
    ));

  return (
    <Routes>
      {getRoutes(routes)}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
