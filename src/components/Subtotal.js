import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
  return (
    <React.Fragment>
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>$0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input id="gift" type="checkbox" />
                            <label htmlFor="gift">This order contains a gift</label>
                        </small>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
            />
        </div>
    </React.Fragment>
  )
}

export default Subtotal