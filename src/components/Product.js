import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css';

const Product = () => {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                  <p>Title</p>
                  <p className='product__price'>Price</p>
                  <div className="product__rating">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                  </div>
                </div>
              <img className="product__image" src="./content/laptop3.png" alt="product" />
              <button>Add to basket</button>
        </div>
    </div>
  )
}

export default Product