import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCartTotal, getTempTotal } from './reducer';
import './Order.css';

function Order({tax, shipping}) {
    const [{cart, tempCart}, dispatch] = useStateValue();
    const value = (getCartTotal(cart) - getTempTotal(tempCart));
    
    const total = Number(shipping + value).toFixed(2);
    const order = Number(shipping + value + tax).toFixed(2);
  return (
    <div className='order'>
        <button className='place_order'>Place Your Order</button>
        <p>By placing your order, you agree to the privacy notice and conditions of use.</p>
        <CurrencyFormat
            renderText={(value) => (
                <div className='subtotal_info'>
                    <header>Order Summary</header>
                    <div>
                        <span>
                            items:
                        </span>
                        <span className='order_price'>
                            <strong>{value}</strong>
                        </span>
                    </div>

                    <div>
                        <span>
                            Shipping & handleing:
                        </span>
                        <span className='order_price_b'>
                            <strong>{"$"+shipping}</strong>
                        </span>
                    </div>

                    <div>
                        <span>
                            Total before tax:
                        </span>
                        <span className='order_price'>
                            <strong>{"$"+total}</strong>
                        </span>                       
                    </div>

                    <div className='border_here'>
                        <span>
                            Estimated tax:
                        </span>
                        <span className='order_price'>
                            <strong>{"$"+tax}</strong>
                        </span>                       
                    </div>

                    <div className='order_info'>
                        <span className='order_total'>
                            Order total:
                        </span>
                        <span className='order_price_t'>
                            <strong>{"$"+order}</strong>
                        </span>   
                    </div>
                </div>
            )}

            decimalScale={2}
            value={(getCartTotal(cart) - getTempTotal(tempCart)) }
            
            
            //change tax to shipping later
            // total = {value + shipping}
            // order = {total + tax}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        
    </div>
  )
}

export default Order