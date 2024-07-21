import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { Spinner } from "./Spinner";

export const ProductCard = ({ category, id, image, price, title }) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <div className="col-span-1 flex flex-col border p-3">
      <Link className="relative" to={`product/${id}`}>
        {loadingImage && (
          <div className="absolute flex justify-center items-center w-full h-full ">
            <Spinner />
          </div>
        )}
        <figure className="h-40 p-2 mb-2">
          <img
            className={`h-full mx-auto ${loadingImage ? "hidden" : "block"}`}
            src={image}
            alt="title"
            onLoad={() => setLoadingImage(false)}
          />
        </figure>
      </Link>
      <span className="block text-sm text-slate-500">{category}</span>
      <Link to={`product/${id}`} className="font-semibold line-clamp-2 mb-2">
        {title}
      </Link>
      <span className="mb-2">${price}</span>
      <button className="flex gap-2 justify-center items-center mt-auto rounded-md bg-primary-800 text-white px-3 py-2 transition-all duration-300 hover:bg-primary-700">
        <HiOutlineShoppingBag className="h-5 w-5" />
        Add to bag
      </button>
    </div>
  );
};
