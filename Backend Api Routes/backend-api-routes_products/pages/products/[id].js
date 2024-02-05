import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductsDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span>
        {product.price} {product.currency}
      </span>
      <span>{product.category}</span>
    </>
  );
};

export default ProductsDetailsPage;
