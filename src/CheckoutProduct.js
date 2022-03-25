import React from 'react'
// import { useState } from 'react/cjs/react.production.min';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
// import Subtotal from './Subtotal';

function CheckoutProduct({id, image, title, price, rating, checked,}) {
    const [{ tempCart }, dispatch] = useStateValue();
    // console.log("temp:", tempCart)
    const [{ cart }] = useStateValue();
    console.log("cart:", cart)
    // const [value, setValue] = useState('');
    
    const changeValue = (value) => {
        // setValue(value)
        // console.log("value:", value)
        
        dispatch({
            type: 'choose_quantity',
            id: id,
            value: value,
        });
        if (value == 0) {
            dispatch({
                type: "remove_from_cart",
                id: id,

            })
        }
        // if (value == 2) {
        //     dispatch({
        //         type: "change_price_2",
        //         id: id,
        //     })
        // }
        
            
    }

    const selectInCart = (e) => {
        
        const checked = e.target.checked
        // dispatch({
        //     type: "uncheck_product",
        //     id: id,
        //     checked: checked,
        // })
        if (checked) {
            dispatch({
                type: 'remove_from_tempCart',
                id: id,
            });
            
        }else{
            
            dispatch({
                type: 'add_to_tempCart',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                    checked: checked,
                },
            });
            
            
        }
        // if (checked) {
        //     // add to cart
        //     dispatch({
        //         type: 'add_to_cart',
        //         item: {
        //             id: id,
        //             title: title,
        //             image: image,
        //             price: price,
        //             rating: rating,
        //         },
        //     });
        // } else {
            
        //     dispatch({
        //         type: "remove_from_cart",
        //         id: id,

        //     })
            
        // }
    }
  return (
    <div className='checkoutProduct'>
        <div className='checkout_boxImg'>
            <input className='checkout_checkbox' type="checkbox" defaultChecked= {true} 
                onClick= {(e) => {
                    selectInCart(e);
                }} 
            />
            <img className='checkoutP_image' src= {image } alt=''/>
        </div>
        
        
        <div className='checkoutP_info'>
            <p className='checkoutP_title'>
                {title}
            </p>

            <div className='checkoutP_rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (<p>☆</p>))}
            </div>
            <div className='checkoutP_quantity' onChange={e => changeValue(e.target.value)}>
                Quantity
                {/* can  fully implement later */}
                <select >
                    <option value={0}>0(Remove)</option>
                    <option value={1} selected>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>
        </div>
        
        <p className='checkoutP_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        
    </div>
  )
}

export default CheckoutProduct