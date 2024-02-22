import { Home, SignIn, Watch } from "../components/features";

export const routes = {
  defaultRoutes: [
    {
      path: "/",
      element: Home,
    },
    {
      path: "/watch/:id",
      element: Watch,
    },
  ],
  privateRoutes: [
    {
      path: "/sign-in",
      element: SignIn,
    },
  ],
};

const { defaultRoutes, privateRoutes } = routes;

export { defaultRoutes, privateRoutes };
