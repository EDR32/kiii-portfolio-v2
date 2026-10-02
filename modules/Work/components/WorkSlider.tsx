"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
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
                      <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                      {/* Title & Icon */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* Title part 1 */}
                          <div className="delay-100 font-semibold">LIVE</div>
                          {/* Title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 text-accent font-semibold">
                            PROJECT
                          </div>
                          {/* Icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
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
