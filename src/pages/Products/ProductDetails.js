import React from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
    const params = useParams();
    
  return (<>
    <div>Product Details!</div>
    <p>{params.id}</p>
    </>
  )
}

export default ProductDetails