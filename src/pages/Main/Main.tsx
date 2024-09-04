import { useEffect, useState } from 'react'
import classes from './Main.module.css'
import useFetch from '../../hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../store/productsStrore/productsReducer'
import { RootState } from '../../store/store'
import { Card } from 'react-bootstrap'
import CustomCard from '../../components/CustomCard/CustomCard'
import { Product } from '../../lib/types'

const Main = () => {
  const {fetching} = useFetch()
  const dispatch = useDispatch()
  const [filt, setFilt] = useState(false)
  //const [filter, setFilter] = useState(false)
  const [prod, setProd] = useState([{}])
  const products = useSelector((state: RootState) => state.products)
  const user = useSelector((state: RootState) => state.user)
  const [filtered, setFiltered] = useState<Product[]>()

  const fetch = async () => {
    await fetching().then(data => dispatch(setProducts(data)))
  }

  const filterr = () => {
    console.log('user.favourite', user.favourite)
    setFilt(true)
    setFiltered(products.filter((p) => user.favourite.includes(p.id)))
    //setFilter(!filter)
    console.log('products', filtered)
  }

  useEffect(() => {
    fetch()
    if(filt) {
      filterr()
    }
  }, [])

  //console.log('products', products)
  return (
    <div className={classes.main}>
      <div>
        <button onClick={() =>filterr()}>fav</button>
      </div>
      <div className={classes.main__content}>
        {products &&
          <>
            {filtered
              ? filtered.map((item: any) => {
                return(
                  <CustomCard key={item.id} item={item} />
                )
              })
              : products.map((item: any) => {
                return(
                  <CustomCard key={item.id} item={item} />
                )
              })
            }
          </>
        }
      </div>
    </div>
  )
}

export default Main
/*products.map((item: any) => {
            return(
              <CustomCard key={item.id} item={item} />
            )
          }) */