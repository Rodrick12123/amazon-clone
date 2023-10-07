import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import Savings from './Savings';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ cart, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <div className='checkout_promo'>
                {cart?.length > 0 &&
                    <Savings />
                }
                {/* <Savings /> */}
            </div>
            
            <div className='checkout_cart'>
                <h2 className='checkout_title'>Shopping Cart for: {user?.email}</h2>
                {/* chould put product with deselect opt here */}
                <div className='deselectRow'>
                    {cart?.length > 0 &&
                        <p className='checkout_deselect'>Deselect all items</p>
                    }
                    
                    {/* Find way to be less repetitive */}
                    {cart?.length == 0 &&
                        <p className='checkout_deselect'>No items selected</p>
                    } 
                    
                    <small className='priceCol'>Price</small>
                </div>
                <div className='checkout_products'>
                    {cart.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            image = {item.image}
                            title = {item.title}
                            price = {item.price}
                            rating = {item.rating}
                            checked = {true}
                            box = {true}
                            
                        />
                    ))}
                    
                    {/*  */}
                </div>
                
                {/* product here */}
                <div className='left_subtotal'>
                    <Subtotal 
                       onlyTotal= {1}
                    />
                    
                </div>
    
            </div>
        </div>

        <div className='checkout_right'>
            <div className='checkout_subtotal'>
                <Subtotal 
                    onlyTotal= {-1}
                />
            </div>

            <div className='checkout_add'>
                {/* consider putting products not in cart */}

                <img 
                    className='add_image'
                    src="https://i.pinimg.com/236x/42/07/d1/4207d1ed4f945f948f67ac5384848d40--banner-web-event-banner.jpg"
                    alt=""
                />
                

            </div>
        </div>
    </div>
  )
}

export default Checkout