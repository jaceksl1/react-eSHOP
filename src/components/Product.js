import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css';

const Product = ({id, price, rating, image, description}) => {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                  <p className='title'>Laptop</p>
                  <p className='description'>{description}</p>
                  <p className='product__price'>{price}</p>
                  <div className="product__rating">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                  </div>
                </div>
              <img className="product__image" src={image} alt="product" />
              <button>Add to basket</button>
        </div>
    </div>
  )
}

export default Product