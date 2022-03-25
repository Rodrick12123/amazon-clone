import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating, checked}) {
    //dispatch is action from Reducer
    const [{ cart }, dispatch] = useStateValue();

    // console.log("cart:", cart)
    const addToBasket = () => {
        dispatch({
            type: 'add_to_cart',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                checked: checked,
                value: 1,
            },
        });
    };
    return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong> {price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>☆</p>
                ))} 
            </div>
        </div>
        <img
            src={image}
            alt=""
        />
        <button onClick={addToBasket}> Add to Cart</button>
    </div>
    );
}

export default Product