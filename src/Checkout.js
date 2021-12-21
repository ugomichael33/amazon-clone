import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
          <div className= 'checkout_left'>
            <img className='checkout_ad'
                src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/EpicDailyDeals/LandingPage/HOL21_EDD_Phase5_hero-banner_short_desktop_1500x150.jpg'
                alt=''
            />
            <div>
               <h2 className='checkout_title'>
                 Your Shopping basket 
               </h2>
            </div>
          </div>  
          <div className='checkout_right'>
            <Subtotal />
          </div>
        </div>
    )
}

export default Checkout
