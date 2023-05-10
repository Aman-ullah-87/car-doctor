import {Swiper,  SwiperSlide } from 'swiper/react';
import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
const Testimonials = () => {
    // const swiper = new Swiper('.swiper', {
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });
    return (
        <div>
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
   
    
      navigation
    
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' alt="" /></SwiperSlide>
   
    </Swiper>
        </div>
    );
};

export default Testimonials;