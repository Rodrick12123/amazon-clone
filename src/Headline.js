import React from 'react'
import './Headline.css';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Headline() {
  return (
    <div className='headline_nav'>
      {/* Could be a button */}
      <div className='headline_navShop'>
        <div className='headline_menu'>
            <MenuIcon className = 'headline_menuIcon'/>
            <span className='headline_filter'>All</span>
        </div>
        <div className='headline_option'>
          <span className='headline_phrase'>Amazon Basics</span>
        </div>
        <div className='headline_option'>
          <span className='headline_phrase'>New Releases</span>
        </div>
        <div className='headline_option'>
          <span className='headline_phrase'>Customer Service</span>
        </div>
        <div className='headline_option'>
          <span className='headline_phrase'>Today's Deals</span>
        </div>
        <div className='headline_prime'>
          Prime<ArrowDropDownIcon className='headline_drop' />
        </div>
        
        <div className='headline_option'>
        <span className='headline_phrase'>Amazon Home</span>
        </div>
        <div className='headline_option'>
        <span className='headline_phrase'>Books</span>
        </div>
        <div className='headline_option'>
        <span className='headline_phrase'>Music</span>
        </div>
        <div className='headline_option'>
        <span className='headline_phrase'>Registry</span>
        </div>
        <div className='headline_option'>
        <span className='headline_phrase'>Fashion</span>
        </div>
      </div>
      <div className='headline_detail'>
        {/* <span className='headline_detail'>3 months free: Amazon Music</span> */}
        <div>3 months free: Amazon Music</div>
      </div>
    </div>
    
    // <div className='Headline'>
    //     <div className='headline_nav'>
    //       {/* Could be a button */}
    //       <div className='headline_menu'>
    //           <MenuIcon className = 'headline_menuIcon'/>
    //           <span className='headline_filter'>All</span>
    //       </div>
    //       <div className='headline_option'>
    //         <span className='headline_phrase'>Amazon Basics</span>
    //       </div>
    //       <div className='headline_option'>
    //         <span className='headline_phrase'>New Releases</span>
    //       </div>
    //       <div className='headline_option'>
    //         <span className='headline_phrase'>Customer Service</span>
    //       </div>
    //       <div className='headline_option'>
    //         <span className='headline_phrase'>Today's Deals</span>
    //       </div>
    //       <div className='headline_prime'>
    //         Prime<ArrowDropDownIcon className='headline_drop' />
    //       </div>
          
    //       <div className='headline_option'>
    //       <span className='headline_phrase'>Amazon Home</span>
    //       </div>
    //       <div className='headline_option'>
    //       <span className='headline_phrase'>Books</span>
    //       </div>
    //       <div className='headline_option'>
    //       <span className='headline_phrase'>Music</span>
    //       </div>
    //       <div className='headline_option'>
    //       <span className='headline_phrase'>Registry</span>
    //       </div>
    //       <div className='headline_option'>
    //       <span className='headline_phrase'>Fashion</span>
    //       </div>
    //       <div className='headline_option'>
    //         <span className='headline_detail'>3 months free: Amazon Music</span>
    //       </div>

    //     </div>
    // </div>
  )
}

export default Headline