import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{cart, user}, dispatch] = useStateValue();
    // const [{ user }] = useStateValue();
    const handelLogin = () => {
        if(user){
            auth.signOut();
        }
    }
  return (
    <div className= 'header'>
        <Link to="/">
            <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
        </Link>
        <div className= "header_search">
            <input
            className="header_searchInput"
            type="text" />
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className="header_nav">
            <Link to={!user && '/Login'}>
                <div onClick={handelLogin} className='header_option'>
                    <span className='head_optionLOne'>Hello {user ? user?.email: 'Guest'} </span>
                    <span className='head_optionLTwo'>{user ? 'Sign out': 'Sign in'}</span>
                </div>
            </Link>
            
            <div className='header_option'>
                <span className='head_optionLOne'>Returns</span>
                <span className='head_optionLTwo'>& Orders</span>
            </div>
            <div className='header_option'>
                <span className='head_optionLOne'>Your</span>
                <span className='head_optionLTwo'>Prime</span>
            </div>
            <Link to="/checkout">
                <div className='header_optionCart'>
                    <ShoppingCartIcon />
                    <span className='header_optionLTwo header_cartCount'>{cart?.length}</span>
                </div>
            </Link>
        </div>
    </div>
  );
}

export default Header