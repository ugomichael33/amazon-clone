import React from 'react'
import './Product.css'

function Products() {
    return (
        <div className='product'>
          <div>
            <p>The lean startup</p>
            <p className='product_price'>
               <small>$</small>
               <strong>19.99</strong>
            </p>
            <div className='product_rating'>
              <p>🌟</p>
            </div>
          </div>  
          <img src= "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
          />
          <button>Add to basket</button>
        </div>
    )
}

export default Products
