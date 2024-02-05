import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(id ? `/api/products/${id}` : null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    productData.price = Number(productData.price);
    console.log(productData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    console.log(response);
    if (response.ok) mutate();
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });

    if (response.ok) {
      router.push("/");
    } else {
      console.log(response.status);
    }
  }

  return (
    <ProductCard>
      <button type="button" onClick={() => setIsEditMode(!isEditMode)}>
        Update
      </button>
      <button type="button" onClick={handleDeleteProduct}>
        Delete
      </button>
      {isEditMode && (
        <ProductForm
          value={data}
          onSubmit={handleEditProduct}
          isEditMode={isEditMode}
        />
      )}
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.map((review) => (
        <section key={review._id}>
          <h3>{review.title}</h3>
        </section>
      ))}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
