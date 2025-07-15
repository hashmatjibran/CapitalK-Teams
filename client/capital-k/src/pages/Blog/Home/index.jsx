import React, { useContext, useEffect, useState } from "react";
// import HomeBanner from "../../Components/HomeBanner";
// import banner1 from "../../Assets/Images/banner1.jpg";
// import banner2 from "../../Assets/Images/banner2.jpg";
// import banner3 from "../../Assets/Images/banner3.jpg";
// import banner4 from "../../Assets/Images/banner4.jpg";
// import newsletter from "../../Assets/Images/newsletter.png";
import { Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IoMailOutline } from "react-icons/io5";

// import required modules
import { Navigation } from "swiper/modules";
// import ProductItem from "../../Components/ProductItem";
// import HomeCat from "../../Components/HomeCategory";
// import { fetchDataFromApi } from "../../Utils/api";

// caterory in tabs
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import { MyContext } from "../../App";
import { Link } from "react-router-dom";
// import FooterBanner from "../../Components/FooterBanner";
// import BrandCat from "../../Components/BrandsCategory";
// import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import { FaArrowRight } from "react-icons/fa6";
// import MegaSale from "../../Components/MegaSaleComponent/MegaSale";
import Homepage from "../../../components/HomePage/Homepage";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [categories , setCategories] = useState([]);

  const [selectedCat, setSelectedCat] = useState("");
  const [allProducts, setProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sideBanners, setSideBanners] = useState([]);
  const [footerBanners, setFooterBanners] = useState([]);

  // const context = useContext(MyContext);

  // useEffect(() => {
  //   try {
  //     window.scroll(0, 0);
  //     context.setShowHeaderFooter(true);

  //     setSelectedCat(context.categories[0]?._id);

  //     fetchDataFromApi("/api/products/all").then((res) => {
  //       console.log(res.data);
  //       setProducts(res.data.ProductList);
  //     });

  //     fetchDataFromApi("/api/products/latest").then((res) => {
  //       console.log(res.data);
  //       setLatestProducts(res.data.ProductList);
  //     });

  //     fetchDataFromApi("/api/sidebanner/all").then((res) => {
  //       console.log("data from side api", res.data);
  //       setSideBanners(res.data);
  //     });

  //     fetchDataFromApi("/api/footerbanner/all").then((res) => {
  //       console.log("data from side api", res.data);
  //       setFooterBanners(res.data);
  //     });
  //   } catch (error) {
  //     console.log("error in home page");
  //     throw new Error("oops Something just broke");
  //   }
  // }, []);

  const selectCat = (catName) => {
    setSelectedCat(catName);
  };

  // useEffect(() => {
  //   console.log("selected Cat===", selectedCat);
  //   fetchDataFromApi(`/api/products/all/?catName=${selectedCat}`).then(
  //     (res) => {
  //       setFilteredData(res.data.ProductList);
        
  //     }
  //   );
  // }, [selectedCat]);

  return (
    <>
      <Homepage />
      {/* {context.categories?.length !== 0 && (
        <HomeCat categories={context.categories} title={"Categories"} />
      )} */}

      <section className="homeProducts">
        <div className="container">
          <div className="row mb-4">
            {/* side banner section */}
          {sideBanners?.length !== 0 && 
           <div className="col-md-2">
              <div className="sticky">
                
                {  sideBanners?.sort((a, b) => a.order - b.order)&&
                  sideBanners?.map((item, index) => {
                    return (
                      <Link to={item.link} key={index} className="banner">
                        <img
                          src={item.imageUrl}
                          className="cursor w-100 mb-3 rounded-lg"
                          alt="banner"
                        />
                      </Link>
                    );
                  })}
                
              </div>
            </div>
            }


            <div className={`${sideBanners?.length===0?'col-md-12':'col-md-10'} productRow`}>
              <>
                {/* heading and categories  */}
                <div className="d-flex align-items-center">
                  <div className="info ls-0" style={{ width: "35%" }}>
                    <h3 className="mb-0 hd">Popular Products</h3>
                    <p className="text-color text-sml mb-0">
                      Do not miss the current offers until the end of{" "}
                      {new Date().toLocaleString("default", { month: "long" })}.
                    </p>
                  </div>

                  <div
                    className="ml-auto d-flex align-items-center justify-content-end res-full"
                    style={{ width: "65%" }}
                  >
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable categories"
                      className="filterTabs"
                    >
                      {/* {context.categories?.length !== 0 &&
                        context.categories?.map((item, index) => {
                          return (
                            <Tab
                              className="item"
                              key={index}
                              label={item.categoryName}
                              onClick={() => selectCat(item?._id)}
                            />
                          );
                        })} */}
                    </Tabs>
                  </div>

                  {/* <Button className="viewAllBtn ml-auto">
                  View All <FaArrowRight />
                </Button> */}
                </div>

                {/* populating categories */}
                <div className="product_row w-100 mt-3 mb-5 ">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {filteredData?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <ProductItem product={item} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </>

              <>
                <div className="d-flex align-items-center">
                  <div className="info ls-0" style={{ width: "35%" }}>
                    <h3 className="mb-0 hd">Latest Products</h3>
                    <p className="text-color text-sml mb-0">
                      Do not miss the Exclusive range of new Products.
                    </p>
                  </div>

                  {/* <div className="ml-auto d-flex align-items-center justify-content-end res-full" style={{width:'65%'}}>
         <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable categories"
            className="filterTabs"
          >
             {
      context.categories?.length !== 0 &&  context.categories?.map((item, index)=>{
        return(
          <Tab className="item" key={index} label={item.categoryName} onClick={()=>selectCat(item.categoryName)} />
        )
      })
      
    }
            
          </Tabs>
         </div> */}

                  {/* <Button className="viewAllBtn ml-auto">
                  View All <FaArrowRight />
                </Button> */}
                </div>

                {/* mapping latest products */}
                <div className="product_row w-100 mt-3 mb-5">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {latestProducts?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <ProductItem product={item} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </>
            </div>
          </div>

          
            <div className="row">
            {/* <FooterBanner /> */}
            </div>
            
          </div>
        
      </section>

        {/* mega sale */}
        {/* <MegaSale/>
        <BestSelling/> */}

      {/* brands  */}

      {/* {context.brands?.length !== 0 && (
        <BrandCat brands={context.brands}  title={'Brands'}/>
      )} */}




    

       


     {/* <NewsLetter/> */}
    </>
  );
};

export default Home;
