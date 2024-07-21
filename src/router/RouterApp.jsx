import { Route, Routes } from "react-router-dom";

import { LayoutDefault } from "../layout";
import { HomePage, NotFoundPage, ProductPage } from "../pages";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
