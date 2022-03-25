import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCartTotal, getTempTotal } from './reducer';

function Subtotal({onlyTotal}) {
    const [{cart}, dispatch] = useStateValue();
    const [{tempCart},] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        
                        {cart?.length > 0 &&
                            <p className='subtotal_info'>
                                Subtotal ({cart?.length} items): <strong>{value}</strong>
                            </p>
                        }
                        {onlyTotal < 0 && cart?.length > 0 &&
                            <small className='subtotal_gift'>
                            <input type="checkbox" />This order contains a gift
                            </small>
                        }
                        
                        {/* <p>
                            Subtotal ({cart?.length} items): <strong>{0}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" />This order contains a gift
                        </small> */}
                    </>
                )}
                decimalScale={2}
                //change
                value={(getCartTotal(cart) - getTempTotal(tempCart)) }
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {onlyTotal < 0 &&
                <button>Proceed to checkout</button>
            }
            {/* <button>Proceed to checkout</button> */}
        </div>
    )
}

export default Subtotal