import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductsPage = () => {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <span>
              {product.price} {product.currency}
            </span>
            <span>{product.category}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
