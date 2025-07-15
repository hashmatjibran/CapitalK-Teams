import React, {   useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { Button } from "@mui/material";
import banner1 from '../../assets/capital k banner 1.jpg';
import { IoMdHeartEmpty } from "react-icons/io";
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
// import { MyContext } from '../../App';
// import { wishListContext } from '../../Contexts/WishListContext';
// import { AuthContext } from '../../Contexts/authContext';


const ProductItem = (props) => {
 
  // const {user,loading} = useContext(AuthContext);
  // const context = useContext(MyContext);
      // const {addToWishList} = useContext(wishListContext);
  // const [wishListFields , setWishListFields] = useState({});
  const viewProductDetails=(id)=>{
console.log("view product details",id);
    // context.setIsOpenProductModal({
    //   id:id,
    //   open:true
    // });
  } 


  const [isHovered , setIsHovered] =useState(false)
  const sliderRef = useRef();
  var settings={
    dots:true,
    infinite:true,
    loop:true,
    slidesToshow:1,
    slidesToScroll:1,
    speed:300,
    autoplay:true
  }

  const handleMouseEnter = ()=>{
    setIsHovered(true);
    setTimeout(()=>{
      if (sliderRef.current) {
          sliderRef.current.slickPlay()
      }
    },20)
  }
  const handleMouseLeave = ()=>{
    setIsHovered(false);
    setTimeout(()=>{
      if (sliderRef.current) {
          sliderRef.current.slickPause()
      }
    },20)
  }

  const addToWishList2 =(data)=>{
  console.log("add to wish list",data);
  
    // if(user){
      
    //   wishListFields.productTitle =  data?.name
    //   wishListFields.image = data?.images?.[0]
    //   wishListFields.productId = data?._id
    //   wishListFields.userId = user?.userId

    //  addToWishList(wishListFields);
    // }
    // else{
    //   context.setAlertBox({
    //     open:true,
    //     color:'error',
    //     msg:"please Login to continue"
    //   })
    //   return;
    // }
   
  }

  return (
    <>
    <div className={`productItem ${props?.itemView}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  
    >
                      <div className="img_rapper">
                      <Link to={`/product/${props?.product?.id}`}>
                        {
                          isHovered===true?
                          <Slider {...settings} ref={sliderRef}>
                              {props.product?.images?.map((image , index)=>{
                               return(
                                <div key={index} className="slick-slide">
                                <img src={props.product?.imageUrl} alt="displayImage" className='w-100'/>
                              </div>
                               )
                              })}
                          </Slider>
                          :
                          <img className="w-100" src={props.product? props.product.imageUrl:banner1} alt="" />
                        }
                      </Link>
                      {/* {props?.sale? <div className=" badge badge-danger">SALE {Math.ceil((Number(props.product?.sizes[0].price - props.product?.sizes[0].offer_price) / Number(props.product?.sizes[0].price) )*100)}%</div>:
                      <span className="badge badge-primary">{Math.ceil((Number(props.product?.sizes[0].price - props.product?.sizes[0].offer_price) / Number(props.product?.sizes[0].price) )*100)}%</span>
                    } */}
                      
                        <div className="actions">
                          <Button onClick={()=>viewProductDetails(`${props?.product?._id}`)}><TfiFullscreen/></Button>
                          <Button onClick={()=>addToWishList2(props?.product)}><IoMdHeartEmpty style={{fontSize:'20px'}}/></Button>
                        </div>
                      </div>
                      <Link to={`/product/${props?.product?.id}`}>
                      <div className="info">
                      
                        <h4>{props?.product?.name?.length > 30 ? `${props?.product?.name.slice(0, 12)}...` : props?.product?.name}</h4>
                        <span className="text-success d-block">{props.product? Number(props?.product?.quantityInStock )> 0 ? "In Stock":"Out Of Stock":""}</span>
                          <Rating className="mt-2 mb-2" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />

                          {/* <div className="d-flex">
                            <span className="oldPrice">  &#8377;{props.product? Number(props.product.sizes[0].price ):"0"}</span>
                            <span className="netPrice text-danger ml-2"><b> &#8377;{props.product? Number(props.product.sizes[0].offer_price ):"0"} </b></span>
                          </div> */}
                      </div>
                      </Link>
                    </div>
                  
  
    
    
    
    
    
    </>
  )
}

export default ProductItem
