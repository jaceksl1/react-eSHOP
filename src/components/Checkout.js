import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';

const Checkout = () => {

    const [{basket}] = useStateValue();

    return (
    <React.Fragment>
        <div className="checkout">
            <h2 className="checkout__title">
                Your Cart
            </h2>
            <div className="checkout-wrapper">
                <div className="checkout__left">
                    {basket.map(item=> (
                       <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            description = {item.description}
                            rating = {item.rating}
                            key={item.id}
                       /> 
                    ))}
                </div>
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            </div>
            <div className='image-wrapper'>
                <img src="./content/payments.jpg" alt="" className="checkout__ad" />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Checkout