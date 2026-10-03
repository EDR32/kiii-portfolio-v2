"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { workSlides } from "@/modules/Work/utils/constants";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-70 sm:h-120"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imgIndex) => {
                return (
                  <div
                    key={imgIndex}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group w-full h-30 sm:h-55">
                      {/* Image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-[#4a22bd]/80 to-transparent opacity-0 group-hover:opacity-95 transition-all duration-500" />
                      {/* Title & Category & Icon */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-[10px] sm:text-xs text-accent font-mono tracking-wider uppercase mb-1">
                          {image.category || "Web Project"}
                        </span>
                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-white line-clamp-1 mb-2">
                          {image.title}
                        </h3>
                        <div className="flex items-center gap-x-2 text-[11px] sm:text-xs tracking-wider text-white/90">
                          <span className="font-semibold text-accent">VIEW</span>
                          <span className="font-medium">DETAILS</span>
                          <ArrowRight className="text-sm w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-accent" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
