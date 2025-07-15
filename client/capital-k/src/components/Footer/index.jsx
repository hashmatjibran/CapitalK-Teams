import React from 'react';
import { GiDogBowl } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";
const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='container'>
        <div className='row topInfo'>
          <div className='col d-flex align-items-center'>
            <span><GiDogBowl/> </span>
            <span className='ml-2'>Everyday fresh products</span>
          </div>
          <div className='col d-flex align-items-center'>
            <span><TbTruckDelivery/> </span>
            <span className='ml-2 text-nowrap'>Free delivery for Prime Customers</span>
          </div>
          <div className='col d-flex align-items-center'>
            <span><RiDiscountPercentLine/> </span>
            <span className='ml-2'>Daily Mega Discounts</span>
          </div>
          <div className='col d-flex align-items-center'>
            <span><CiBadgeDollar/> </span>
            <span className='ml-2'>Best price in the market</span>
          </div>
        </div>

          <div className='row mt-5 linksWrap'>
            <div className='col-md-3 col-sm-6'>
              <h5  className='btn ' style={{background:'#2bbef9', color:'whitesmoke'}}>SERVICES</h5>
              <ul>
                <li><Link to={'/store'}>Online Shopping</Link> </li>
                <li><Link to={'/adopt'}>Pet Enquiry</Link> </li>
                <li><Link to={'/book-an-appointment'}>Appointment Bookings</Link> </li>
                <li><Link to={'#'}>Store Guide</Link> </li>
                <li><Link to={'/contact'}>24x7 support</Link> </li>
              </ul>
            </div>

            <div className='col-md-3 col-sm-6'>
              <h5  className='btn ' style={{background:'#2bbef9', color:'whitesmoke'}}>QUICK LINKS</h5>
              <ul>
                <li><Link to={'/contact'}>contact us</Link> </li>
                <li><Link to={'#'}>FAQs & Exchange Policy</Link> </li>
                <li><Link to={'#'}>Terms of use</Link> </li>
                <li><Link to={'#'}>Privacy Policy</Link> </li>
                <li><Link to={'#'}>Parenting Tips</Link> </li>
              </ul>
            </div>

            <div className='col-md-3 col-sm-6'>
              <h5  className='btn ' style={{background:'#2bbef9', color:'whitesmoke'}}>EXPLORE</h5>
              <ul>
                <li><Link to={'#'}>About Us</Link> </li>
                <li><Link to={'#'}>Career's</Link> </li>
                <li><Link to={'#'}>Award's</Link> </li>
                <li><Link to={'#'}>Store Locator</Link> </li>
                <li><Link to={'#'}>Pet Spa</Link> </li>
              </ul>
            </div>

            <div className='col-md-3 col-sm-6'>
              <h5  className='btn ' style={{background:'#2bbef9', color:'whitesmoke'}}>OUR FOUNDATION</h5>
              <ul>
                <li><Link to={'#'}>Community</Link> </li>
                <li><Link to={'#'}>Franchise</Link> </li>
                <li><Link to={'#'}>Customer Love</Link> </li>
                <li><Link to={'#'}>Birtday Club</Link> </li>
                <li><Link to={'#'}>Pure Breeds</Link> </li>
              </ul>
            </div>

          </div>

          <div className='copyright mt-3 pt-3 pb-3 d-flex align-items-center'>
            <p className='mb-0'>Copyright 2025 <PiCopyrightLight/> Capital-K &nbsp; All rights reserved.<br/>Powered by ORLe</p>
            <ul className='list list-inline ml-auto mb-0 socials'>
              <li className='list-inline-item'>
                <Link to={'#'}><FaFacebookF/></Link>
              </li>
              <li className='list-inline-item'>
                <Link to={'#'}><FaTwitter/></Link>
              </li>
              <li className='list-inline-item'>
                <Link to={'#'}><FaInstagram/></Link>
              </li>

            </ul>
          </div>


      </div>
    </footer>
  )
}

export default Footer
