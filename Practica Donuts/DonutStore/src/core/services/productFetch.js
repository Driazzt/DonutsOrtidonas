//! getallproducts

export const getProducts = async () => {
  const res = await fetch("http://localhost:8000/products");
  const result = await res.json();

  return result.products;
};

//! getProductbyID

export const getProductById = async (productId) => {
  const res = await fetch(`http://localhost:8000/products/${productId}`, {
    method: "GET",
    headers: {
      "content-type": "Application/json",
    },
  });
  const result = await res.json();
  return result.products;
};

//! createproducts  llamarlo de vuelta en el body con ...(newproduct) -> spreadoperator
export const createProduct = async (newProduct) => {
  const res = await fetch("http://localhost:8000/products/createProduct", {
    method: "POST",
    headers: {
      "content-type": "Application/json",
    },
    body: JSON.stringify({
      ...newProduct,
    }),
  });
  const result = await res.json();
  return result.products;
};

//! updateproducts

export const modifyProduct = async (productId, newProductModify) => {
  const res = await fetch(`http://localhost:8000/products/${productId}`, {
    method: "PATCH",
    headers: {
      "content-type": "Application/json",
    },
    body: JSON.stringify({
      ...newProductModify,
    }),
  });
  const result = await res.json();
  return result.products;
};

//! Deleteproducts

export const deleteProduct = async (productId) => {
  const res = await fetch(`http://localhost:8000/products/${productId}`, {
    method: "DELETE",
    headers: {
      "content-type": "Application/json",
    },
  });
  const result = await res.json();
  return result.products;
};
