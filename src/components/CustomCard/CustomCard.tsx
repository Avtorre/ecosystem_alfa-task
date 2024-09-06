import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Product } from "../../lib/types";
import classes from "./CustomCard.module.css";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  editProduct,
} from "../../store/productsStrore/productsReducer";
import {
  addFavourite,
  removeFavourite,
} from "../../store/userStore/userReducer";
import { useNavigate } from "react-router-dom";

const CustomCard = (props: { item: Product }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [fav, setFav] = useState(false);
  const navigate = useNavigate();

  const favHandler = () => {
    {
      fav
        ? dispatch(removeFavourite(props.item.id))
        : dispatch(addFavourite(props.item.id));
    }
    setFav(!fav);
  };

  /* const fav = () => {
    const item:Product = {...props.item, favourite: true}
    dispatch(editProduct(item))
    console.log('item', item)
  } */
  const edit = () => {
    setEditable(!editable);
  };

  const del = () => {
    dispatch(deleteProduct(props.item));
  };

  return (
    <Card
      className={classes.card}
      onClick={() => {
        !editable && navigate(`/products/${props.item.id}`);
      }}
    >
      <div className={classes.card__img}>
        <Card.Img src={props.item.image} />
      </div>

      <Card.Body className={classes.card__body}>
        <Card.Title
          className={classes.card__body_title}
          contentEditable={editable}
        >
          {props.item.title}
        </Card.Title>
        <div className={classes.data}>
          <div className={classes.category} contentEditable={editable}>
            Category: {props.item.category}
          </div>
          <div className={classes.category} contentEditable={editable}>
            <b>{props.item.price}$</b>
          </div>
        </div>
        <Card.Text
          className={classes.card__body_text}
          contentEditable={editable}
        >
          {props.item.description}
        </Card.Text>

        <div className={classes.btn} onClick={(e) => e.stopPropagation()}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/bin.svg`}
              width={30}
              className={classes.btn__svg}
              onClick={(e) => {
                e.preventDefault();
                del();
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/pen.svg`}
              width={30}
              className={classes.btn__svg}
              onClick={(e) => {
                e.preventDefault();
                edit();
              }}
            />
          </div>

          <img
            src={
              fav
                ? `${process.env.PUBLIC_URL}/assets/heart-active.svg`
                : `${process.env.PUBLIC_URL}/assets/heart.svg`
            }
            width={30}
            className={classes.btn__svg}
            onClick={(e) => {
              e.preventDefault();
              favHandler();
            }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
