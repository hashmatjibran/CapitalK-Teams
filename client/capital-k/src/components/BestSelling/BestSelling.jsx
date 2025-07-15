import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductItem from '../ProductItem';
// import { fetchDataFromApi, fetchDataFromApiWithQuery } from '../../Utils/api';
const BestSelling = () => {

     const [Products, setProducts] = useState([]);

      useEffect(() => {
        setProducts([
          {
            id: 1,
            name: "Product 1",
            price: 100,
            imageUrl: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
          },
          {
            id: 2,
            name: "Product 2",
            price: 200,
            imageUrl: "https://via.placeholder.com/150"
          },
          {
            id: 3,
            name: "Product 3",
            price: 300,
            imageUrl: "https://via.placeholder.com/150"
          }
        ]);
      //    try {
      //       fetchDataFromApiWithQuery("/api/products/best-selling").then((res) => {
      //        console.log(res.data);
      //        setProducts(res.data.ProductList);
      //      });
      //    } catch (error) {
      //      console.log("error in home page");
      //      throw new Error("oops Something just broke");
      //    }
       }, []);

  return (
    <div className='container'>
      <div className="d-flex align-items-center">
                  <div className="info ls-0" style={{ width: "35%" }}>
                    <h3 className="mb-0 hd">Best Selling</h3>
                    <p className="text-color text-sml mb-0">
                      Do not miss these Best Selling products.
                    </p>
                  </div>

                  <div className="ml-auto d-flex align-items-center justify-content-end res-full" style={{width:'65%'}}>
         
         </div>

                  <Button className="viewAllBtn ml-auto text-nowrap">
                  View All <FaArrowRight />
                </Button>
                </div>
                {Products.length === 0 ? (
  <p>No Best-Selling products Yet.</p>
) : (
  

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
                    {Products?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <ProductItem product={item} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                )}
    </div>
  )
}

export default BestSelling
