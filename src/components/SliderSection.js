import React, { useState, useEffect } from 'react';
import './styles/SliderSection.css';

const slides = [
  {
    id: 1,
    image: 'https://arazmotors.com/assets/landing/img/slide-1.jpg?v=0178842cdd83ec06976dbd3b112b8b704b',
    text: 'Harada olursan ol dünyanın bir hissəsi burada',
    alt: 'Slide 1',
  },
  {
    id: 2,
    image: 'https://arazmotors.com/assets/landing/img/slide-4.jpg?v=0178842cdd83ec06976dbd3b112b8b704b',
    text: 'Another slide text example',
    alt: 'Slide 2',
  },
  // Add more slides if needed
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="slider-section">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="blue-overlay"></div> {/* Add blue overlay */}
          <div className="slide-content">
            <h2>{slide.text}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderSection;
