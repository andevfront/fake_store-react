import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartModal, Footer, Header } from "../components/layout";
import { GoTopButton } from "../components/ui";

export const LayoutDefault = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onToggleCart = () => {
    document.body.classList.add("overflow-hidden");
    setIsCartOpen(!isCartOpen);
  };

  const onCloseCart = () => {
    document.body.classList.remove("overflow-hidden");
    setIsCartOpen(false);
  };

  return (
    <>
      <Header onToggleCart={onToggleCart} />
      <Outlet />
      <CartModal isCartOpen={isCartOpen} onCloseCart={onCloseCart} />
      <GoTopButton />
      <ToastContainer />
      <ScrollRestoration />
      <Footer />
    </>
  );
};
