import { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetProductQuery } from "../../store/api/productsApi";
import { ProductDetails, SkeletonProductDetails } from "./components";
import { Spinner } from "../../components/ui";

export const ProductPage = () => {
  const [loadingImage, setLoadingImage] = useState(true);
  const { id } = useParams();
  const { data: product = {}, isLoading } = useGetProductQuery(id);
  const { title, image } = product;

  return (
    <section className="container mx-auto grid grid-cols-2 items-center gap-20 py-20 px-4">
      <div className="relative col-span-2 sm:col-span-1">
        {loadingImage && (
          <div className="absolute flex justify-center items-center w-full h-full ">
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
      {isLoading ? <SkeletonProductDetails /> : <ProductDetails {...product} />}
    </section>
  );
};
