const useFetch = (
  reqType: "All" | "Product" | "Categories" | "ByCategory",
  id?: number
) => {
  let query: string;
  switch (reqType) {
    case "All":
      query = "products";
      break;
    case "Product":
      query = `products/${id}`;
      break;
    case "Categories":
      query = "products/categories";
      break;
  }
  const fetching = async () => {
    const data = await fetch(`https://fakestoreapi.com/${query}`).then(
      (res: any) => res.json()
    );
    return data;
  };

  return { fetching };
};

export default useFetch;
