import { HiOutlineShoppingBag } from "react-icons/hi2";
import { logo } from "../../images";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-4 flex justify-between py-5">
        <Link to="/">
          <figure className="h-8">
            <img className="h-full" src={logo} alt="logo" />
          </figure>
        </Link>
        <button>
          <HiOutlineShoppingBag className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
};
