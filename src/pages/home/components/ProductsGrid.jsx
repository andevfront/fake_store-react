import { useGetProductsQuery } from "../../../store";
import { ProductCard, SkeletonCard } from "../../../components/ui";

export const ProductsGrid = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();

  return isLoading ? (
    <div className="grid grid-cols-5 gap-6 py-20">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
  ) : (
    <div className="grid grid-cols-5 gap-6 py-20">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
