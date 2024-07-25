import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoIosClose } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { decrementQuantity, incrementQuantity, removeProduct } from "../../store/cart";

export const CartItem = ({ title, id, image, price, quantity, total }) => {
  const dispatch = useDispatch();

  return (
    <div className="mb-3 flex gap-3 relative p-4">
      <button
        className="absolute top-0 right-0 p-2"
        onClick={() => dispatch(removeProduct(id))}
      >
        <IoIosClose className="h-7 w-7" />
      </button>
      <Link to={`product/${id}`}>
        <figure className="h-24 w-24">
          <img className="h-full w-full object-contain" src={image} alt={title} />
        </figure>
      </Link>
      <div className="w-full">
        <Link
          to={`product/${id}`}
          className="font-semibold text-sm max-w-[200px] line-clamp-2 whitespace-pre-wrap mb-2"
        >
          {title}
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="border border-slate-300 flex items-center w-24">
            <button className="p-3" onClick={() => dispatch(decrementQuantity(id))}>
              <FaMinus className="h-3 w-3" />
            </button>
            <div className="text-center w-full">{quantity}</div>
            <button className="p-3" onClick={() => dispatch(incrementQuantity(id))}>
              <FaPlus className="h-3 w-3" />
            </button>
          </div>
          <div className="text-sm flex justify-between w-full">
            <span className="text-slate-500">${price}</span>
            <span className="font-semibold">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
