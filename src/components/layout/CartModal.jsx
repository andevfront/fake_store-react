import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { TbShoppingCartX } from "react-icons/tb";

import { CartItem } from "../ui";

export const CartModal = ({ isCartOpen, onCloseCart }) => {
  const products = useSelector((state) => state.cart);
  const total = products.reduce((sum, product) => sum + product.total, 0);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseCart();
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween" }}
          className=" fixed inset-0 z-50 flex h-full w-full bg-black/40"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: "0" }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.4 }}
            className="relative ml-auto flex h-full w-[480px] min-w-[250px] flex-col bg-white shadow"
          >
            <div className="p-7 h-full flex flex-col">
              <div className="border-b border-slate-300 flex justify-between items-center pb-4">
                <h2 className="font-semibold text-lg uppercase">
                  Shopping Cart ({products.length})
                </h2>
                <button onClick={onCloseCart}>
                  <FaArrowRight className="h-5 w-5" />
                </button>
              </div>
              {products.length <= 0 ? (
                <div className="flex items-center justify-center flex-col gap-2 my-20">
                  <TbShoppingCartX className="h-20 w-20" />
                  <p>Empty shopping cart</p>
                </div>
              ) : (
                <>
                  <div className="my-4 overflow-y-auto h-full">
                    {products.map((product) => (
                      <CartItem key={product.id} {...product} />
                    ))}
                  </div>
                  <div className="mt-auto border-t border-slate-300">
                    <span className="block font-semibold uppercase my-4">
                      Total: ${total.toFixed(2)}
                    </span>
                    <div className="bg-primary-800 cursor-pointer font-semibold text-center text-white rounded-md py-2 w-full transition-all duration-300 hover:bg-primary-700">
                      Checkout
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
