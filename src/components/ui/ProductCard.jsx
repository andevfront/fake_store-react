import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

import { Spinner } from "./Spinner";

export const ProductCard = ({ category, id, image, price, title }) => {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <div className="col-span-6 group flex flex-col border p-3 sm:col-span-2 lg:col-span-1">
      <Link className="relative" to={`product/${id}`}>
        {loadingImage && (
          <div className="absolute flex justify-center items-center w-full h-full ">
            <Spinner />
          </div>
        )}
        <figure className="h-40 p-2 mb-2">
          <img
            className={`h-full mx-auto transition-all duration-300 group-hover:scale-105 ${
              loadingImage ? "hidden" : "block"
            }`}
            src={image}
            alt={title}
            onLoad={() => setLoadingImage(false)}
          />
        </figure>
      </Link>
      <span className="block text-sm text-slate-500">{category}</span>
      <Link
        to={`product/${id}`}
        className="font-semibold line-clamp-2 mb-2 transition-all duration-300 group-hover:text-primary-800"
      >
        {title}
      </Link>
      <span className="mb-2">${price}</span>
      <button className="flex gap-2 justify-center items-center mt-auto rounded-md bg-primary-800 text-white px-3 py-2 transition-all duration-300 hover:bg-primary-700">
        <IoCart className="h-5 w-5" />
        Add to cart
      </button>
    </div>
  );
};
