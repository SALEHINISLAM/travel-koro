import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";

const CarouselHome = ({ places, onRealIndexChange }) => {
    const [activeIndex, setActiveIndex]=useState(0);
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      breakpoints={{
        640:{
          slidesPerView:1,
        },
        768:{
          slidesPerView:2,
        },
        1024:{
          slidesPerView:3,
        }
      }}
      loop={true}
      autoplay={{
        delay: 9000,
        disableOnInteraction: false,
      }}

      onSlideChange={(swiper) => {
        setActiveIndex(swiper.realIndex)
        onRealIndexChange(swiper.realIndex)
        console.log("slide change",activeIndex);
      }}
      onSwiper={(swiper) => {
        console.log(swiper);
      }}
      navigation={{
        nextEl: `.swiper-btn-next`,
        prevEl: `.swiper-btn-prev`,
      }}
    >
      {places.map((place, index) => (
        <SwiperSlide key={index} className="h-80 w-full cursor-pointer">
          <Link to={`/place/${index}`}>
            <div className={`w-full h-80 rounded-2xl ${index==activeIndex?'border-4 border-[#FBBC04]':''}`} style={{backgroundImage: `url(${place.photo})`,backgroundSize:`cover`, height:'100%', width:'100%'}}>
                <h2 className="text-4xl font-bold pt-48 pb-20 mix-blend-plus-lighter text-center">
                    {
                        place.name
                    }
                </h2>
            </div>
            </Link>
        </SwiperSlide>
      ))}
      
      <div className=" flex gap-4 pt-12">
      <button 
      className="btn swiper-btn-prev btn-circle bg-white text-black font-bold">
        <CiCircleChevLeft className="size-10"/>
      </button>
      <button 
      onClick={{}}
      className="btn swiper-btn-next btn-circle bg-white text-black font-bold">
        <CiCircleChevRight className="size-10"/>
      </button>
      </div>
    </Swiper>
  );
};
CarouselHome.propTypes = {
  places: PropTypes.array,

};
export default CarouselHome;
