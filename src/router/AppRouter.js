import { Route, Routes } from "react-router-dom";
import Error from "../components/features/Error";
import { defaultRoutes, privateRoutes } from "../constants/routes";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map(({ path, element }, index) => {
        return <Route key={index} path={path} element={element} />;
      })}

      {defaultRoutes.map(({ path, element: Element }, index) => {
        return (
          <Route
            key={index}
            path={path}
            element={
              <PrivateRoute>
                <Element />
              </PrivateRoute>
            }
          />
        );
      })}

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
