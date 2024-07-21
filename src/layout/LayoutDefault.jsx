import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/layout";

export const LayoutDefault = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
