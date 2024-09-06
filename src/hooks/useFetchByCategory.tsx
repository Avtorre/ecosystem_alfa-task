const useFetchByCategory = () => {
  const fetching = async (category: string) => {
    const data = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    ).then((res: any) => res.json());
    return data;
  };

  return { fetching };
};

export default useFetchByCategory;
