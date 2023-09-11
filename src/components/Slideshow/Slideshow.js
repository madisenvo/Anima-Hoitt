import React, { useState, useEffect } from "react";
import "./slideshow.css";

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images]);
  return (
    <div className="slideshow-container">
      <button className="prev-button" onClick={prevSlide}></button>
      <img
        src={`../../images/${images[currentImageIndex % images.length]}`}
        alt={`Image ${currentImageIndex + 1}`}
        className="slideshow-image"
      />
      <button className="next-button" onClick={nextSlide}></button>
    </div>
  );
};

export default Slideshow;
