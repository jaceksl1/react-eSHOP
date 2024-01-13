import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <React.Fragment>
        <div className="checkout">
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            <div className="checkout-wrapper">
                <div className="checkout__left">
                    <CheckoutProduct/>
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