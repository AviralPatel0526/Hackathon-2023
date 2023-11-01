import React, { useState, useEffect } from 'react';
import Carousal1 from "../assets/h1.jpg"
import Carousal2 from "../assets/h2.jpg"
import Carousal3 from "../assets/h4.jpg"
const images = [
  Carousal1,
  Carousal2,
  Carousal3,
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div>
    <div className='text-center py-20'>
    <p className='text-2xl font-semibold'>Recommendation</p>
    <h1 className='text-[40px] font-bold'>Best homes in the best places</h1>
   </div>
   <div className='flex justify-center'>
    <div className="relative overflow-hidden w-[95vw] sm:h-[90vh] h-[50vh] rounded-3xl">
      <div className="flex h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full flex-shrink-0 ${
              index === currentSlide ? 'block' : 'hidden'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full  object-fill"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Carousel;
