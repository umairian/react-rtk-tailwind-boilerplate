import { Route, Routes } from "react-router";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import routes from "./routes";

function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => (
      <Route path={route.path} element={route.component} key={route.key} />
    ));

  return (
    <Routes>
      {getRoutes(routes)}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
