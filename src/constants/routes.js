export const routes = {
  defaultRoutes: [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/watch/:id",
      element: "Watch",
    },
  ],
  privateRoutes: [
    {
      path: "/sign-in",
      element: "Sign In",
    },
  ],
};

const { defaultRoutes, privateRoutes } = routes;

export { defaultRoutes, privateRoutes };
