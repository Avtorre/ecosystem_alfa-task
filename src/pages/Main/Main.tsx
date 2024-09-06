import { useEffect, useState } from "react";
import classes from "./Main.module.css";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/productsStrore/productsReducer";
import { RootState } from "../../store/store";
import { Button, Dropdown } from "react-bootstrap";
import CustomCard from "../../components/CustomCard/CustomCard";
import { Product } from "../../lib/types";
import { setCategories } from "../../store/categoriesStore/categoriesReducer";
import CustomPagination from "../../components/UI/CustomPagination";
import useFetchByCategory from "../../hooks/useFetchByCategory";

const Main = () => {
  const { fetching } = useFetch("All");
  const fetchingCategories = useFetch("Categories").fetching;
  const fetchByCategory = useFetchByCategory().fetching;
  const dispatch = useDispatch();
  const [favFilter, setFavFilter] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState(false);
  const products = useSelector((state: RootState) => state.products);
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.categories);
  const [filtered, setFiltered] = useState<Product[]>();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(products.length);
  const itemsPerPage = 12;

  const fetch = async () => {
    await fetching().then((data) => {
      dispatch(setProducts(data));
      setTotal(data.length);
    });
    await fetchingCategories().then((data) => dispatch(setCategories(data)));
  };

  const favHandler = () => {
    setFavFilter(!favFilter);
    searchResults?.length
      ? setFiltered(searchResults?.filter((p) => user.favourite.includes(p.id)))
      : setFiltered(products.filter((p) => user.favourite.includes(p.id)));
    filtered?.length && setTotal(filtered.length);
  };

  const categoryHandler = async (category: string) => {
    setCategoryFilter(true);
    searchQuery
      ? setFiltered(searchResults?.filter((p) => p.category === category))
      : await fetchByCategory(category).then((data) => {
          setFiltered(data);
          setTotal(data.length);
        });
    filtered?.length && setTotal(filtered.length);
  };

  const Search = (q: string) => {
    console.log("searchQuery", searchQuery);
    categoryFilter || favFilter
      ? setSearchResults(filtered?.filter((p) => p.title.includes(q)))
      : setSearchResults(products.filter((p) => p.title.includes(q)));
    searchResults?.length && setTotal(searchResults.length);
  };

  const pageCheck = (i: number) => {
    return i >= (page - 1) * itemsPerPage && i < page * itemsPerPage;
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.controls}>
        <input
          className={classes.controls__search}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            Search(e.target.value);
          }}
        />
        <div className={classes.filters}>
          <Dropdown>
            <Dropdown.Toggle variant="">Category filter</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setCategoryFilter(false)}>
                All
              </Dropdown.Item>
              {categories.map((c, i) => {
                return (
                  <Dropdown.Item key={i} onClick={() => categoryHandler(c)}>
                    {c}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Button onClick={() => favHandler()} variant="danger">
            Favourite
          </Button>
        </div>
      </div>
      <div className={classes.main__content}>
        <div className={classes.main__content_products}>
          {products && searchResults?.length
            ? favFilter || categoryFilter
              ? filtered
                  ?.filter((p, i) => pageCheck(i))
                  .map((item: any) => {
                    return <CustomCard key={item.id} item={item} />;
                  })
              : searchResults
                  .filter((p, i) => pageCheck(i))
                  .map((item: any) => {
                    return <CustomCard key={item.id} item={item} />;
                  })
            : favFilter || categoryFilter
            ? filtered
                ?.filter((p, i) => pageCheck(i))
                .map((item: any) => {
                  return <CustomCard key={item.id} item={item} />;
                })
            : products
                .filter((p, i) => pageCheck(i))
                .map((item: any) => {
                  return <CustomCard key={item.id} item={item} />;
                })}
        </div>
        <div className={classes.pagination}>
          <CustomPagination
            total={total}
            perPage={itemsPerPage}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
