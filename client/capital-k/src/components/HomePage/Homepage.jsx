
// import {fetchDataFromApi} from '../../Utils/api'
import "../../assets/slicksliderCss/slick.min.css";
import "../../assets/slicksliderCss/slick-theme.min.css";
import Slider from "react-slick";
import HomeCategory from "./HomeCategory";
const Homepage = () => {

  const bannerImages = [
    {imageUrl: "https://cmsimages.shoppersstop.com/Connoisseur_s_Colognes_web_92e335e56c/Connoisseur_s_Colognes_web_92e335e56c.jpg"},
    {imageUrl: "https://cmsimages.shoppersstop.com/SS_25_kids_main_kv_web_d891e0ff9a/SS_25_kids_main_kv_web_d891e0ff9a.png"},
    {imageUrl: "https://cmsimages.shoppersstop.com/Only_web_6d5176b761/Only_web_6d5176b761.png"},
    {imageUrl: "https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png"},
    {imageUrl: "https://cmsimages.shoppersstop.com/SS_25_pvt_brands_main_kv_web_e55ed30937/SS_25_pvt_brands_main_kv_web_e55ed30937.png"}
  ];


    var settings = {
        infinite: true,
  centerMode: true,
  centerPadding: "7.5%", // 👈 peek amount on both sides
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "5%",
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: "0", // full width on small screens
      },
    },
  ],
      };

  return (
    <><div className='homeBannerSection container-fluid mt-2 '>
      <Slider {...settings}>
        {bannerImages?.length !== 0 && bannerImages?.map((item, index)=>{
            return( <div key={index} className='item'>
              <img src={item.imageUrl} height={"400px"} alt='banner_images' className='w-100 px-2'/>
              </div>)
        })}
       {/* <div className='item'>
            <img src={"https://cmsimages.shoppersstop.com/Connoisseur_s_Colognes_web_92e335e56c/Connoisseur_s_Colognes_web_92e335e56c.jpg"} alt='banner_images' className='w-100'/>
        </div>
         <div className='item'>
            <img src={"https://cmsimages.shoppersstop.com/SS_25_kids_main_kv_web_d891e0ff9a/SS_25_kids_main_kv_web_d891e0ff9a.png"} alt='banner_images' className='w-100'/>
        </div>
        <div className='item'>
            <img src={"https://cmsimages.shoppersstop.com/Only_web_6d5176b761/Only_web_6d5176b761.png"} alt='banner_images' className='w-100'/>
        </div>
        <div className='item'>
            <img src={"https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png"} alt='banner_images' className='w-100'/>
        </div>
        <div className='item'>
            <img src={"https://cmsimages.shoppersstop.com/SS_25_pvt_brands_main_kv_web_e55ed30937/SS_25_pvt_brands_main_kv_web_e55ed30937.png"} alt='banner_images' className='w-100'/>
        </div> */}
      </Slider>
    </div>
    <HomeCategory />
    </>
    
  )
}

export default Homepage
