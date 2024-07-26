import { useGetProductsQuery } from "../../../store";
import { ProductCard, SkeletonCard } from "../../../components/ui";

export const ProductsGrid = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();

  return isLoading ? (
    <div
      className="container mx-auto px-4 grid grid-cols-6 gap-6 py-20 lg:grid-cols-5"
      id="products"
    >
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
  ) : (
    <div
      className="container mx-auto px-4 grid grid-cols-6 gap-6 py-20 lg:grid-cols-5"
      id="products"
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
