import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import {BsArrowRightCircleFill , BsArrowLeftCircleFill} from 'react-icons/bs'
const Slider = ({ slides }) => {
  const [current , setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1 )
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <section className="p-5 max-w-[1000px] mx-auto" id="gallery">
      <h1 className="text-center text-2xl font-bold p-5">Gallery</h1>
      <div className="relative">
        <BsArrowLeftCircleFill onClick={prevSlide} size={50} className="absolute cursor-pointer top-[50%] translate-y-[-50%] left-5 z-10 text-white"/>
        <BsArrowRightCircleFill onClick={nextSlide} size={50} className="absolute cursor-pointer top-[50%] translate-y-[-50%] right-5 z-10 text-white"/>
        {SliderData.map((slide, index) => (
          <div key={index} className={`${index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}`}>
              { index === current && <Image
                src={slide.image}
                alt="x"
                width="1440"
                height="600"
                objectFit="cover"
              /> } 
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
