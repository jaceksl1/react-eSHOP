import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, price, rating, description, title}) => {
// eslint-disable-next-line 
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        item: {
          id: id,
        }
      })
  }
  return (
    <React.Fragment>
      <div className='checkoutProduct__wrapper'>
        <div className="checkoutProduct" id={id}>
          <img className="checkoutProduct__image" src={image} alt="product" />
            <div className="checkoutProduct__info">
              <p className='title'>{title}</p>
              <p className='description'>{description}</p>
              <p className='checkoutProduct__price'>{price}zł</p>
              <div className="checkoutProduct__rating">
                  {Array(rating)
                    .fill()
                    .map((_,i) => (
                      <p key={i}><StarIcon /></p>
                  ))}
              </div>
            </div>
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>  
    </React.Fragment>
  )
}

export default CheckoutProduct