"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonialData } from "@/modules/Testimonials/utils/constants";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* Avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* Avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt={person.name}
                      className="rounded-full"
                    />
                  </div>
                  {/* Name */}
                  <div className="text-lg font-semibold">{person.name}</div>
                  {/* Position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest text-white/60">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* Quote & Message */}
              <div className="flex-1 flex flex-col justify-center before:w-px xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-50 relative xl:pl-20">
                {/* Quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* Message */}
                <div className="xl:text-lg text-center md:text-left text-white/80 font-light">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
