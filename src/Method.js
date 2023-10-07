import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import axios from './axios';
import { useStateValue } from './StateProvider';
// import { Link, Navigate, useNavigate, useHistory } from 'react-router-dom';
import "./Method.css"
import { getCartTotal } from './reducer';


function Method({method}) {
    const [{cart, tempCart}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    // const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [process, setProcess] = useState("");
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])
    const doSubmit = async e => {
        e.preventDefault();
        setProcess(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSuccess(true);
            setError(null);
            setProcess(false);
            // history.replace('/Order')
        })
    }
    const doChange = e => {
        setDisable(e.empty);
        setError(e.error ? e.error.message : "");
    }

  return (
    <div className='method'>
        <header>Payment Method</header>
        <div className='method_section'>
            {/* implement later; include if any case */}
            <p>Your cards:</p>
            <div className='method_saved'>{method ? method: 'No Saved Cards'}</div>
            {/* card info here */}
        
        </div>
        <div className='method_section'>
            <p>New Card Information:</p>
            <form onSubmit={doSubmit}>
                <CardElement onChange={doChange}/>
                <div>
                    <button disabled = {process || disable || success}>
                        <span>{process ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                    
                </div>
                
                {/* hello */}
                {error && <div>{error}</div>}
            </form>
        </div>
        <Link to='/payment'>
            <span>Back</span>
        </Link>
        {/* <a href='/payment'>Back</a> */}
        {/* include redirect to payment page */}
    </div>
  )
}

export default Method