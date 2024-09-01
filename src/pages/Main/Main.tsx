import { useEffect, useState } from 'react'
import classes from './Main.module.css'
import useFetch from '../../hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../store/productsStrore/productsReducer'
import { RootState } from '../../store/store'
import { Card } from 'react-bootstrap'
import CustomCard from '../../components/CustomCard/CustomCard'

const Main = () => {
  const {fetching} = useFetch()
  const dispatch = useDispatch()
  const [filter, setFilter] = useState(false)
  const [prod, setProd] = useState([{}])
  let products = useSelector((state: RootState) => state.products)

  const fetch = async () => {
    await fetching().then(data => dispatch(setProducts(data)))
  }

  const filterr = () => {
    return products = products.filter((p) => p.favourite === true)
    setFilter(!filter)
    console.log('products', products)
  }

  useEffect(() => {
    fetch()
  }, [])

  //console.log('products', products)
  return (
    <div className={classes.main}>
      <div>
        <button onClick={() =>filterr()}>fav</button>
      </div>
      <div className={classes.main__content}>
        {products && products.map((item: any) => {
            return(
              <CustomCard key={item.id} item={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Main
