import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import './Register.css'
import {createUserWithEmailAndPassword} from 'firebase/auth';

import { useNavigate } from 'react-router-dom';


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    console.log('email',email, 'pass',password);
    // const [,dispatch] = useStateValue();
    // console.log("email",email);
    // const addInfo = () => {
    //     dispatch({
    //         type: 'add_to_email',
    //         item: {
    //             emailName: email,
    //         },
    //     });
    // }
    // console.log("email", email, "password", password)
    const register = e => {
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
            // console.log('user info',userInfo);
            const user = userInfo.user;
            console.log('user',user);
            if (auth) {
                navigate('/');
            }
            
        })
        .catch(error => alert(error.message));
        

    }
    
  return (
    <div className='register'>
        <Link to= '/'>
            <img className='register_img'
                src='https://letsdovideo.com/wp-content/uploads/2016/11/Amazon_Logo.jpg'
                alt=''
            />
        </Link>
        <div className='register_signIn'>
            <header>
                Create Account
            </header>
            <div className='register_search'>
                <p>Email or mobile phone number</p>
                <input className='email' type= 'text' value={email} onChange=
                {e => setEmail(e.target.value)}></input>
                <p>Password</p>
                <input className='password' type= 'password' value={password} onChange=
                {e => setPassword(e.target.value)}></input>
            </div>
            <button className='register_button' type='submit' onClick={register}>Register</button>
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            
        </div>
        
    </div>
    
  )
}

export default Register