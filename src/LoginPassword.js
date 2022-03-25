import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPassword.css'
import { useStateValue } from './StateProvider';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase';

function LoginPassword() {
    const [password, setPassword] = useState('');
    const [{email},dispatch] = useStateValue();
    console.log('email',email.emailName, 'pass',password);
    const navigate = useNavigate();
    const signIn = e => {
        //dont refresh page
        e.preventDefault();
        signInWithEmailAndPassword(auth, email.emailName, password)
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
    <div className='loginpassword'>
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
            <div className='login_email'>
                {/* get email here */}
                {email.emailName}
                <Link to='/login'>
                    <a>Change</a>
                </Link>

                
            </div>
            <div className='login_search'>
                <span>Password</span>
                <input className='password' type= 'password' value={password} onChange=
                {e => setPassword(e.target.value)}></input>
            </div>
            
            <button className='login_button' type='submit' onClick={signIn}>Sign-In</button>
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

export default LoginPassword