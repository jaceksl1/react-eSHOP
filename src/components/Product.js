import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css';

const Product = ({id, price, rating, image, description, title}) => {
  return (
    <React.Fragment>
      <div className="product">
          <div className="product__info">
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
                <p className='product__price'>{price}zł</p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                      <p><StarIcon /></p>
                    ))}
                </div>
              </div>
            <img className="product__image" src={image} alt="product" />
            <button>Add to basket</button>
      </div>
    </React.Fragment>
  )
}

export default Product