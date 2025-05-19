import React from "react";
import Image from "next/image";
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Button from "../Button";

export default function Banner() {
    return (
        <div className="flex w-full ">
            <div className="flex w-full">
                <div className="w-full">
                    <Image
                        src="/images/banners/BannerImage.png"
                        alt="Banner Store"
                        width={1000}
                        className="w-full h-full"
                        height={1000}
                    />
                </div>
                <div className="absolute ">
                    <div className="  w-full pt-20 z-10">
                        <div className="text-white font-bold w-[490px] h-[200px] ">
                            <div className="h-full ">
                                <h1 className="font-family font drop-shadow-2xl text-7xl ">
                                    Sneakers- Flash sale
                                </h1>
                                <p>
                                    Be different with the Nike shoes collection
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button
                            text={"Explore"}
                            iconSrc={"./images/icons/ArrowRight.svg"}
                            iconAlt={""}
                            className={" text-white font-bold"}
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
