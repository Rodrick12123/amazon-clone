import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import Order from './Order';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ cart}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

  return (
    <div className='payment'>
        <header>
            {/* <Link to="/">
                <img 
                    className="header_logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link> */}
            Review Your Order

        </header>
        <div className='content'>
            <div className='left'>
                <div className='user_info'>
                    {/* address */}
                    <div>
                        <p>Shipping info will go here</p>
                    </div>
                    {/* Payment method */}
                    <div>
                        {/* could put CardElement here and edit css */}
                        <p>Payment method
                            
                            <Link to='/method'>
                                <span>Change</span>
                            </Link>
                        </p>
                        <span>type ending in 4digits</span>
                        
                        <p>Billing address 
                            <Link to='/billing'>
                                <span>Change</span>
                            </Link>
                        </p>
                        {/* temp address */}
                        <span>Same as shipping address</span>
                    </div>
                    <div className='promo'>
                        <header>
                            Add a gift card, promotion code, or voucher
                        </header>
                        <div>
                            <input className='promo_input' type='text'></input>
                            <button className='promo_button'>Apply</button>
                            {/* implement promo  */}
                        </div>
                    </div>
                </div>
                {/* Order */}
                <div className='review_products'>
                    {cart.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            image = {item.image}
                            title = {item.title}
                            price = {item.price}
                            rating = {item.rating}
                            checked = {true}
                            box = {false}
                        />
                    ))}
                </div>
            </div>

            {/*place order */}
            <div className='right'>
                {/*place order <Order>*/}
                <Order
                    // hard code for now
                    tax= {7.22}
                    shipping ={7.52}
                />
            </div>
        </div>
        
        <Link to="/checkout">
            <p>Back to checkout</p>
        </Link>
    </div>
  )
}

export default Payment