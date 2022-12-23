import React, { useRef, useState ,useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import "./style.css";
import commentAction from "../../redux/actions/commentActions";
// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
 function CarouselComments() {
    let {getAllComments}= commentAction
    const dispatch = useDispatch()
    useEffect(  ()=>{
        dispatch(getAllComments())
         },[])
    let { comments} = useSelector(store => store.comments)
 
 console.log(comments);
  return (
    <>
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      >
        {
            comments.map((x)=>{
                return(

                    <SwiperSlide ><div  className="carousel-comments-card"><img src={x?.photo}></img><p className="comment-text"> {x.comment}</p></div></SwiperSlide>
                   
                  
                )
            })
        }    
      </Swiper>
    </>
  );
}
export default CarouselComments