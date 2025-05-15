import React from "react";
import Image from "next/image";
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
    return (
        <div>
            <Image
                src="/images/banners/BannerImage.png"
                alt="Banner Store"
                width={1000}
                className="w-full h-full"
                height={1000}
            />
        </div>
    );
}
