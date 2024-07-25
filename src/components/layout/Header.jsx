import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import { logo } from "../../images";

export const Header = ({ onToggleCart }) => {
  const products = useSelector((state) => state.cart);

  return (
    <header className="bg-primary-100">
      <div className="container mx-auto px-4 flex justify-between py-5">
        <Link to="/">
          <figure className="h-8">
            <img className="h-full" src={logo} alt="logo" />
          </figure>
        </Link>
        <button className="relative" onClick={onToggleCart}>
          <IoCartOutline className="h-7 w-7" />
          {products.length > 0 && (
            <span className="absolute flex justify-center items-center h-4 w-4 text-[9px] text-white top-0 -right-[5px] bg-primary-800 rounded-full">
              {products.length > 9 ? "+9" : products.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
