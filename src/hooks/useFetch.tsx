

const useFetch = () => {
  
  const fetching = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
                        .then((res:any)=> res.json())
    return data
  }

  return {fetching}
}

export default useFetch
