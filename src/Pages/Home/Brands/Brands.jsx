import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';



const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://toy-wala-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className=" w-11/12 md:w-9/12 mx-auto">
            <h3 className="text-center text-4xl font-bold text-rose-500">Our Top Brands</h3>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                {
                    brands.map(brand => <SwiperSlide key={brand._id}>
                        <img className="w-52 h-52" src={brand.logo} />
                    </SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default Brands;