import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import SkeletonArticle from '../../skeleton/SkeletonArticle';
import { fetchItems } from '../../actions';
import Message from '../Message';

const Product = ({ category }) => {
  const dispatch = useDispatch()
  const allItems = useSelector(state => state.allItems)
  const { loading, error, data } = allItems
  const [show, setShow] = useState(error)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (category) {
      dispatch(fetchItems(category))
    }
  }, [category])

  return (
    <div className='all-products'>
      {data.length === 0 || loading ? (
        <>
          {[1, 2, 3].map(n => <div className='product-card' key={n}><SkeletonArticle key={n} /></div>)}
        </>
      ) : <ProductCard product={data} />}
      <Message showModal={show}
        msg={"Oops! Something went wrong"}
        type="error"
        closeModal={setShow}
      />
    </div>
  )
}

export default Product
