import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div className="mx-auto max-w-[600px] px-4 py-20 sm:px-8 xl:px-4">
      <div className="text-center">
        <span className="text-8xl font-bold text-slate-400">404</span>
        <h2 className="mt-8 text-2xl font-bold uppercase text-primary-800">
          Page not found
        </h2>
        <p className="mt-5">
          The page your are looking for does not exist. It might have been moved or
          delete.
        </p>
        <button
          className="mx-auto mt-6 flex items-center gap-2 whitespace-nowrap rounded-md bg-primary-800 px-6 py-3 text-white transition-all duration-300 hover:bg-primary-700"
          type="submit"
          onClick={handleGoBack}
        >
          <HiOutlineArrowLeft className="h-4 w-4" />
          Go back home
        </button>
      </div>
    </div>
  );
};
