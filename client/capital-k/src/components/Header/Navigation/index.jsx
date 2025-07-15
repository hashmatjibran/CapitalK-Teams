import React, { useState } from 'react'
import { Button } from '@mui/material';
import { IoIosRestaurant, IoMdMenu, IoMdRestaurant } from "react-icons/io";
import { GrBlog } from "react-icons/gr";
import { SiPetsathome } from "react-icons/si";
import { FcDonate, FcServices } from "react-icons/fc";
import { SiWorldhealthorganization } from "react-icons/si";
import { MdPets } from "react-icons/md";
import { LiaStoreAltSolid } from "react-icons/lia";
import { TiInfoLarge } from "react-icons/ti";
import { MdConnectWithoutContact } from "react-icons/md";

import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import './Navigation.css'
import { RiRestaurant2Fill } from 'react-icons/ri';
const Navigation = () => {

  const[isOpenSidebarVal ,setisOpenSidebarVal] = useState(false);

  return (
    <nav className=' navigationPane'>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3 nav-part1'>
          <div className='catWrapper'>
          <Button onClick={()=>setisOpenSidebarVal(!isOpenSidebarVal)} className='allCartTab align-items-center'>
            <span className='icon1 mr-2'><IoMdMenu/></span>
            <span className='text'>All Categories</span>
            <span className='icon2 ml-2'><FaAngleDown/></span>
          </Button>

            {/* <div className={`sidebarNav ${isOpenSidebarVal ===true ? 'open' : ''}`}>
              <ul>
                {context.categories?.length !==0 && context.categories?.map((category , index)=>{
                     return(
                      <li key={index} className='list-inline-item'><Link to={`/cat/:${category._id}`}><Button>{category.categoryName}</Button></Link>
                     {
                      context.subCategories?.length!==0 &&
                     
                     
                     <div className='submenu'>
                      {context.subCategories?.map((subCat , index)=>{
                        if(subCat?.category?._id === category?._id){
                          return(
                            <Link key={index} to={`/subcat/${subCat._id}`}><Button>{subCat.subCategory}</Button></Link>
                          )}
                      })}
                         
                     </div>
                     }
                 </li>
                     )
                })}
              </ul>
            </div> */}
            </div>



        </div>

        <div className='col-sm-9 nav-part2 d-flex align-items-center'>
            <ul className='list list-inline '>
                <li className='list-inline-item'><Link to={'/'}><Button className='navBtnList'> < SiPetsathome style={{color:'#2bbef9'}}/>&nbsp; Home               </Button></Link>
                <div className='submenu shadow'>
                  <Link to={'/'}><Button>Pizza's</Button></Link>
                  <Link to={'/'}><Button>Burger's</Button></Link>
                  <Link to={'/'}><Button>Sandwitch's</Button></Link>
                </div>
                </li>
                <li className='list-inline-item'><Link to={'/services'}><Button className='navBtnList'><FcServices/>&nbsp; Our Menu</Button></Link></li>
                <li className='list-inline-item'><Link to={'/book-an-appointment'}><Button className='navBtnList'> <RiRestaurant2Fill style={{color:'lightskyblue'}} /> &nbsp;Dine In</Button></Link></li>
                <li className='list-inline-item'><Link to={'/store'}><Button className='navBtnList'><LiaStoreAltSolid style={{color:'darkcyan'}} />&nbsp; Takeaway</Button></Link></li>
                <li className='list-inline-item'><Link to={'/donations'}><Button className='navBtnList'><GrBlog style={{color:'darkcyan'}} />&nbsp; Blog</Button></Link></li>
                <li className='list-inline-item'><Link to={'/about'}><Button className='navBtnList'><TiInfoLarge style={{color:'indianred'}}/>&nbsp; About</Button></Link></li>
                <li className='list-inline-item'><Link to={'/contact'}><Button className='navBtnList'><MdConnectWithoutContact style={{color:'darkorange'}} />&nbsp; Contact us</Button></Link></li>
            </ul>
        </div>




      </div>
    </div>
  </nav>
  )
}

export default Navigation
