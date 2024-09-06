import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {
  resetCurrent,
  setCurrent,
} from "../../store/currentStore/currentReducer";
import classes from "./Product.module.css";
import { Button } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();
  const { fetching } = useFetch("Product", parseInt(id!));
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.current);
  const navigate = useNavigate();

  const fetch = async () => {
    await fetching().then((data) => dispatch(setCurrent(data)));
  };

  const handleBack = () => {
    dispatch(resetCurrent());
    navigate("/products");
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Button onClick={() => handleBack()}>&#60; Back</Button>
      <div className={classes.product_info}>
        <img
          src={product.image}
          alt="product image"
          className={classes.product_info__image}
        />
        <div className={classes.product_info__text}>
          <h3>{product.title}</h3>
          <div className={classes.product_info__text__rating}>
            <p>{product.rating.rate} rating</p>
            <p>{product.rating.count} reviews</p>
          </div>
          <p>Category: {product.category}</p>
          <p>
            <b>{product.price}$</b>
          </p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

/**
 <img src={product.image} />
        <div>
          <div className={classes.card__body_title}>{product.title}</div>
          <div className={classes.category}>Category: {product.category}</div>
          <div className={classes.category}>
            <b>{product.price}$</b>
          </div>
          <div className={classes.card__body_text}>{product.description}</div>
        </div>
 */
