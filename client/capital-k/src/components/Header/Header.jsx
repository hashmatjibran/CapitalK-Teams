
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { BsHandbag } from "react-icons/bs";
import SearchBox from './SearchBox';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import { HiClipboardDocumentList } from "react-icons/hi2"


import './header.css'
import { FaHeart, FaUser } from 'react-icons/fa6';
import { SiPrime } from 'react-icons/si';
import { useState } from 'react';

const Header = () => {


 
  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    // if (user) {
    //     navigate("/cart"); // If logged in, go to cart page
    // } else {
    //     navigate("/signIn"); // Otherwise, go to login page
    // }
};


  return (
<>
   

    <div className='headerWrapper'>
      <div className='top-strip bg-blue'>
        <div className='container'>
            <p className='mb-0 mt-0 text-center'>
                welcome to new site of <b>capital k</b>. Your suggestion is highly praised. 
            </p>
        </div>
      </div>

        <header className='header'>
            <div className='container'>
                <div className='row py-2'>
                    
                    <div className='col-md-12 col-sm-10 d-flex align-items-center justify-content-between part2'>
                        <div className='logoWrapper d-flex align-items-center'>
                        <Link className='d-flex align-items-center  w-100' to={"/"}>
                        {/* <img src={null} alt='Capital k' width={'242px'} height={'26px !important'} /> */}
                          <span className='flex-grow-1 companyName'>Capital-k</span>
                        </Link>
                    </div>

                          {/* {
                            appcontext.cityList.length!==0 && <CountryDropDown/>
                          } */}
                          
                          <SearchBox/>

                          <div className='d-flex align-items-center ml-auto part3'>
                            {/* {
                             isLoggedIn !== true ? <Link to={'/signIn'}> <Button className='btn-blue btn-round mr-3'>Sign In</Button> </Link> :
                              <>
                              <li className='list-inline-item'><Link to={'/primemembership'}><Button className='navBtnList'><SiPrime style={{color:'darkcyan'}} />&nbsp;</Button></Link></li>
                              <Button className='circle mr-3' onClick={handleClick}><LuUserRound/></Button>

                              <Menu
                                      anchorEl={anchorEl}
                                      id="accDrop"
                                      open={open}
                                      onClose={handleClose}
                                      onClick={handleClose}
                                      slotProps={{
                                        paper: {
                                          elevation: 0,
                                          sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                              width: 32,
                                              height: 32,
                                              ml: -0.5,
                                              mr: 1,
                                            },
                                            '&::before': {
                                              content: '""',
                                              display: 'block',
                                              position: 'absolute',
                                              top: 0,
                                              right: 14,
                                              width: 10,
                                              height: 10,
                                              bgcolor: 'background.paper',
                                              transform: 'translateY(-50%) rotate(45deg)',
                                              zIndex: 0,
                                            },
                                          },
                                        },
                                      }}
                                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                     <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                        <FaUser/> 
                                        </ListItemIcon>
                                        My Profile
                                      </MenuItem>
                                      <Link to={'/orders'}>
                                      <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                          <HiClipboardDocumentList  />
                                        </ListItemIcon>
                                       My Orders
                                      </MenuItem>
                                      </Link>
                                      <Link to={'/wishlist'}>
                                      <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                          <FaHeart  />
                                        </ListItemIcon>
                                        WhishList
                                      </MenuItem>
                                      </Link>
                                      <MenuItem onClick={logout}>
                                        <ListItemIcon>
                                          <Logout  />
                                        </ListItemIcon>
                                        Logout
                                      </MenuItem>
                                    </Menu>
                              </>
                              
                              
                              
                            } */}
                            <div className='cart-tab ml-auto d-flex align-items-center'>
                              <span className='price'>&#8377;{"00.00"}.00</span>
                              <div className='position-relative ml-2'>
                                
                                <Button onClick={handleCartClick} className='circle '><BsHandbag/></Button>
                                
                              
                              <span className='count d-flex align-items-center justify-content-center'>{5}</span>

                              </div>
                              

                            </div>


                          </div>



                    </div>

                </div>
            </div>

        </header>

       
       


    </div>
    {/* {
      appcontext.subCategories? <Navigation subCategories
      ={appcontext.subCategories}/>: <Navigation/>
    } */}
    
    </>
  )
}

export default Header
