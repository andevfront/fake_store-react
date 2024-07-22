import { IoCart } from "react-icons/io5";

export const ProductDetails = ({ title, price, description }) => {
  return (
    <div className="col-span-2 sm:col-span-1">
      <h1 className="font-semibold text-2xl whitespace-pre-wrap max-w-[340px] mb-6">
        {title}
      </h1>
      <span className="block text-xl text-primary-800 font-semibold mb-4">${price}</span>
      <p className="mb-4">{description}</p>
      <button className="flex gap-2 justify-center items-center mt-auto rounded-md bg-primary-800 text-white px-3 py-2 transition-all duration-300 hover:bg-primary-700">
        <IoCart className="h-5 w-5" />
        Add to cart
      </button>
    </div>
  );
};
