import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Product } from '../../lib/types'
import classes from './CustomCard.module.css'
import { useDispatch } from 'react-redux'
import { deleteProduct, editProduct } from '../../store/productsStrore/productsReducer'
const CustomCard = (props: {item: Product}) => {
  const dispatch = useDispatch()
  const [editable, setEditable] = useState(false) 
  const fav = () => {
    const item:Product = {...props.item, favourite: true}
    dispatch(editProduct(item))
    console.log('item', item)
  }

  const edit = () => {
    setEditable(!editable)
  }

  const del = () => {
    dispatch(deleteProduct(props.item))
  }

  return (
    <Card className={classes.card}>
      <div className={classes.card__img}>
        <Card.Img src={props.item.image} />
      </div>
      <Card.Body className={classes.card__body} >
        <Card.Title className={classes.card__body_title} contentEditable={editable}>{props.item.title}</Card.Title> 
        <div className={classes.data}>
          <div className={classes.category}>Category: {props.item.category}</div>
          <div className={classes.category}><b>{props.item.price}$</b></div>
        </div>
        <Card.Text className={classes.card__body_text} contentEditable={editable}>{props.item.description}</Card.Text>
        <div className={classes.btn}>
          <div>
            <Button 
              className={classes.btn__edit}
              onClick={(e) => {
                e.preventDefault()
                del()
              }}
            >
              Del
            </Button>
            <Button 
              className={classes.btn__edit}
              onClick={(e) => {
                e.preventDefault()
                edit()
              }}
            >
              Edit
            </Button>
          </div>
          
          <Button 
            className={classes.btn__edit}
            onClick={(e) => {
              e.preventDefault()
              fav()
            }}
          >
            Fav
          </Button>
        </div>
       
      </Card.Body>
    </Card>
  )
}

export default CustomCard
