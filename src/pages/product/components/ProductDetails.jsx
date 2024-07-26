import { useDispatch } from "react-redux";
import { IoCart } from "react-icons/io5";
import { toast } from "react-toastify";
import StarRatings from "react-star-ratings";

import { addProduct } from "../../../store/cart";
import { CustomToast } from "../../../components";

export const ProductDetails = ({ id, image, title, price, description, rating }) => {
  const { count, rate } = rating;

  const dispatch = useDispatch();

  const product = {
    id,
    title,
    price,
    image,
  };

  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleAddToCart = () => {
    toast(<CustomToast {...product} />, toastConfig);
    dispatch(addProduct(product));
  };

  return (
    <div className="col-span-2 sm:col-span-1">
      <h1 className="font-semibold text-2xl whitespace-pre-wrap max-w-[340px] mb-2">
        {title}
      </h1>
      <StarRatings
        rating={rate}
        starRatedColor="gold"
        numberOfStars={5}
        name="rating"
        starDimension="14px"
        starSpacing="0px"
      />
      <small className="text-slate-400 ml-2">({count} reviews)</small>
      <span className="block text-xl text-primary-800 font-semibold my-4">${price}</span>
      <p className="mb-4">{description}</p>
      <button
        className="flex gap-2 justify-center items-center mt-auto rounded-md bg-primary-800 text-white px-3 py-2 transition-all duration-300 hover:bg-primary-700"
        onClick={handleAddToCart}
      >
        <IoCart className="h-5 w-5" />
        Add to cart
      </button>
    </div>
  );
};
