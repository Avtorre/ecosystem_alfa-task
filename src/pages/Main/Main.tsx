import { useEffect } from 'react'
import classes from './Main.module.css'
import useFetch from '../../hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../store/productsStrore/productsReducer'
import { RootState } from '../../store/store'
import { Card } from 'react-bootstrap'

const Main = () => {

  const {fetching} = useFetch()
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products)

  const fetch = async () => {
    await fetching().then(data => dispatch(setProducts(data)))
  }

  useEffect(() => {
    fetch()
  }, [])

  console.log('products', products)
  return (
    <div className={classes.main}>
      <div className={classes.main__content}>
        {products && 
          products.map((item: any) => {
            return(
              <Card className={classes.card}>
                <Card.Img src={item.image}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Main
