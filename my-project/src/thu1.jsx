import React, { useState, useEffect } from "react";

const SliderImage = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slider ${index}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      ssdsd
    </div>
  );
};

export default SliderImage;
