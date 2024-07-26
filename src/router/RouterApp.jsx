import { createBrowserRouter } from "react-router-dom";

import { LayoutDefault } from "../layout";
import { HomePage, NotFoundPage, ProductPage } from "../pages";

export const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
