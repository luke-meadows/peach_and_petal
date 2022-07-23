// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../public/images/1.jpg';
import image12 from '../../public/images/1.2.jpg';
import image2 from '../../public/images/2.jpg';
import image22 from '../../public/images/2.2.jpg';
import image3 from '../../public/images/3.jpg';
import image32 from '../../public/images/3.2.jpg';
import image4 from '../../public/images/4.jpg';
import image42 from '../../public/images/4.2.jpg';
import image5 from '../../public/images/5.jpg';
import image52 from '../../public/images/5.2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import ShowcaseCard from './ShowcaseCard';
import { useState } from 'react';

export default function Showcase() {
  const [my_swiper, set_my_swiper] = useState({});
  return (
    <div className="pb-24">
      <div className="flex justify-between mx-24">
        <h3 className="text-2xl  mb-8 font-semibold">New in</h3>
        <div className="flex gap-x-2 text-2xl">
          <div
            onClick={() => my_swiper.slidePrev()}
            className="rounded-full border border-black h-8 w-8 flex justify-center items-center pr-[2px] pointer"
          >
            <i className="icon-angle-left" />
          </div>

          <div
            onClick={() => my_swiper.slideNext()}
            className="rounded-full border border-black h-8 w-8 flex justify-center items-center pl-[2px] pointer"
          >
            <i className="icon-angle-right" />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={50}
        modules={[Pagination]}
        className="mySwiper"
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
      >
        <SwiperSlide>
          <ShowcaseCard image={image1} image2={image12} />
        </SwiperSlide>
        <SwiperSlide>
          <ShowcaseCard image={image2} image2={image22} />
        </SwiperSlide>
        <SwiperSlide>
          <ShowcaseCard image={image3} image2={image32} />
        </SwiperSlide>
        <SwiperSlide>
          <ShowcaseCard image={image4} image2={image42} />
        </SwiperSlide>
        <SwiperSlide>
          <ShowcaseCard image={image5} image2={image52} />
        </SwiperSlide>
        <SwiperSlide>
          <ShowcaseCard image={image5} image2={image52} />
        </SwiperSlide>
        <SwiperSlide>
          <ShowcaseCard image={image5} image2={image52} />
        </SwiperSlide>
        <SwiperSlide>
          <ShowcaseCard image={image5} image2={image52} />
        </SwiperSlide>
        <SwiperSlide>
          <ShowcaseCard image={image5} image2={image52} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
