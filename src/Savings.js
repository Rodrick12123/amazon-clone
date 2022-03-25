import React from 'react'
import './Savings.css';
import { useStateValue } from './StateProvider';

export default function Savings() {
    const [{ cart }, dispatch] = useStateValue();
    
  return (
    <div className='savings'>
        <div className='img_block'>
            {/* Product img */}
            <img className='promo_img'
                // cart image goes here
                // src='https://m.media-amazon.com/images/I/61+WYAjltpL._AC_AA180_.jpg'
                src={cart[0].image}
                alt=''
            />
            <p className='savings_gift'>
            $60 instant gift card
            </p>
        </div>
        <div className='savings_promo'>
            <span className='promo'>
                {/* include login name here */} get $60 off instantly upon approval
                of the Amazon Awards visa card.
            </span>
        </div>
        <div className='savings_promoInfo'>
            <small>promo info here</small>
            {/* <Savings /> */}
        </div>
        <button className='learnmore'>Learn more</button>

    </div>
  )
}
