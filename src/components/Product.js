import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({id, price, rating, image, description, title}) => {

  const [{state},dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        description: description,
        title: title
      }
    })
  };

  return (
    <React.Fragment>
      <div className="product">
          <div className="product__info">
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <p className='product__price' key={id}>{price}zł</p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_,i) => (
                  <p key={i}><StarIcon/></p>
                ))}
            </div>
          </div>
          <img className="product__image" src={image} alt="product" />
          <button onClick={addToBasket}>Add to basket</button>
      </div>
    </React.Fragment>
  )
}

export default Product