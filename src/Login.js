import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useStateValue } from './StateProvider';



function Login() {
    const [email, setEmail] = useState('');

    const [,dispatch] = useStateValue();
    // console.log("email",email);
    const addEmail = () => {
        dispatch({
            type: 'add_to_email',
            item: {
                emailName: email,
            },
        });
    }

    
  return (
    <div className='login'>
        <Link to= '/'>
            <img className='login_img'
                src='https://letsdovideo.com/wp-content/uploads/2016/11/Amazon_Logo.jpg'
                alt=''
            />
        </Link>
        <div className='login_signIn'>
            <header>
                Sign In
            </header>
            <div className='login_search'>
                <p>Email or mobile phone number</p>
                <input className='email' type= 'text' value={email} onChange=
                {e => setEmail(e.target.value)}></input>
            </div>
            
            <Link to= '/LoginPassword'>
                <button className='login_button' type='submit' onClick={addEmail}>Continue</button>
            </Link>
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            
        </div>
        <p className='newText'>New to Amazon?</p>
        <div className='createAccount'>
            <Link to='/Register'>
                <button className='create_button' type='submit'>Create your Amazon account</button>
            </Link>
            
        </div>
    </div>
    
  )
}

export default Login