import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@mui/icons-material/Star';

const CheckoutProduct = () => {
  return (
    <React.Fragment>
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src='./content/laptop1.png' alt="product" />
          <div className="checkoutProduct__info">
            <p className='title'>Chromebook</p>
            <p className='description'>"Unleash creativity with our high-performance laptops. From graphic design to gaming, power meets precision for a seamless experience. Elevate your work and play today!</p>
            <p className='checkoutProduct__price'>2000zł</p>
            <div className="checkoutProduct__rating">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
            <button>Remove from basket</button>
          </div>
      </div>
    </React.Fragment>
  )
}

export default CheckoutProduct