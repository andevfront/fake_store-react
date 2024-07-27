import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetProductQuery } from "../../store/api/productsApi";
import { Spinner } from "../../components";
import { ProductDetails, SkeletonProductDetails } from "./components";

export const ProductPage = () => {
  const [loadingImage, setLoadingImage] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isError, isLoading } = useGetProductQuery(id);

  const isProductNotFound = !isLoading && !product && !isError;

  useEffect(() => {
    if (isProductNotFound) {
      navigate("/404", { replace: true });
    }
  }, [isProductNotFound, navigate]);

  if (isLoading) {
    return (
      <section className="container mx-auto grid grid-cols-2 items-center gap-20 py-20 px-4">
        <div className="relative col-span-2 sm:col-span-1">
          <div className="absolute flex justify-center items-center w-full h-full">
            <Spinner />
          </div>
        </div>
        <SkeletonProductDetails />
      </section>
    );
  }

  if (product) {
    const { title, image } = product;

    return (
      <section className="container mx-auto grid grid-cols-2 items-center gap-20 py-20 px-4">
        <div className="relative col-span-2 sm:col-span-1">
          {loadingImage && (
            <div className="absolute flex justify-center items-center w-full h-full">
              <Spinner />
            </div>
          )}
          <figure className="h-[400px]">
            <img
              className={`h-full mx-auto object-contain ${
                loadingImage ? "hidden" : "block"
              }`}
              src={image}
              alt={title}
              onLoad={() => setLoadingImage(false)}
            />
          </figure>
        </div>
        <ProductDetails {...product} />
      </section>
    );
  }

  return null;
};
