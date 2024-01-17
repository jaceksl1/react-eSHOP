import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const Subtotal = () => {

    const [{basket}] = useStateValue();

  return (
    <React.Fragment>
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input id="gift" type="checkbox" />
                            <label htmlFor="gift">This order contains a gift</label>
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
            />
        </div>
    </React.Fragment>
  )
}

export default Subtotal