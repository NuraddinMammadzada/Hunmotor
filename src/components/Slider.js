import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles/SliderComponent.css'; // Import your custom styles

const SliderComponent = () => {
    const settings = {
        dots: false, // Disable dots (pagination)
        arrows: false, // Disable arrows (previous/next buttons)
        infinite: true,
        speed: 1000, // Slow down transition speed for smooth animation
        slidesToShow: 5, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true, // Enable auto slide
        autoplaySpeed: 3000, // Time between auto slides (3 seconds)
        pauseOnHover: true, // Pause auto slide on hover
        cssEase: "ease-in-out", // Smooth animation transition
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false, // Disable dots for this breakpoint as well
                    arrows: false // Disable arrows for this breakpoint
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false, 
                    arrows: false 
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false, 
                    arrows: false 
                }
            }
        ]
    };

    const brands = [
        { name: 'OSRAM', logo: 'https://cdn.cisct.net/uploads/arazmotors-b2c/product/brands/gallery/small/dc6ee58e1db7c4dd46d888f8b97ac70e.jpg' },
        { name: 'YENMAK', logo: 'https://cdn.cisct.net/uploads/arazmotors-b2c/product/brands/gallery/small/dbdaf11e30b29b18970d1d4728f15d13.jpg' },
        { name: 'Doğru Otomotiv', logo: 'https://cdn.cisct.net/uploads/arazmotors-b2c/product/brands/gallery/small/ebf008ef62a9d86bda742fe1ceceac45.jpg' },
        { name: 'Bilstein', logo: 'https://cdn.cisct.net/uploads/arazmotors-b2c/product/brands/gallery/small/51f9dd432aff86934944e37d14fecc32.jpg' },
        { name: 'SKT', logo: 'https://cdn.cisct.net/uploads/arazmotors-b2c/product/brands/gallery/small/857cdce46de374d26f1f4c6da0a3ea08.jpg' },
        { name: 'ASI', logo: 'https://cdn.cisct.net/uploads/arazmotors-b2c/product/brands/gallery/small/857cdce46de374d26f1f4c6da0a3ea08.jpg' },
    ];

    return (
        <div className="slider-container">
            <h2 className="slider-title">Dünyanın bütün aparıcı markaları, hamısı bir ünvanda</h2>
            <Slider {...settings}>

                {brands.map((brand, index) => (
                    <div key={index} className="slider-item">
                        
                        <img src={brand.logo} alt={brand.name} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
