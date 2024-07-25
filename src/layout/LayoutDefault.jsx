import { useState } from "react";
import { Outlet } from "react-router-dom";

import { CartModal, Footer, Header } from "../components/layout";

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
      <Footer />
    </>
  );
};
