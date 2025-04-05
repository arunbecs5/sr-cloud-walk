import React from "react";
import Slider from "react-slick";  // Importing react-slick

// React Slick carousel component
const CarouselComponent = () => {
    const settings = {
        dots: true,           // Display dots for navigation
        infinite: true,       // Loop the carousel indefinitely
        speed: 500,           // Transition speed in ms
        slidesToShow: 1,      // Display one slide at a time
        slidesToScroll: 1,    // Scroll one slide at a time
        autoplay: true,       // Enable auto sliding
        autoplaySpeed: 3000,  // Set the delay between auto slides in ms (3 seconds)
        pauseOnHover: true,   // Pause autoplay when hovering over the carousel
    };
    const images = [
        // { 'img_src': "img/carousel-10.jpeg", "image_title": "Subsidary Process", "image_desc": "" },
        { 'img_src': "img/carousel-6.jpeg", "image_title": "Industrial Plan", "image_desc": "" },
        { 'img_src': "img/carousel-1.jpg", "image_title": "Plant Construction", "image_desc": "" }, // Add your image paths here
        { 'img_src': "img/carousel-2.jpg", "image_title": "Rooftop Installation", "image_desc": "" }
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div>
                        <img src={image["img_src"]} alt={image["image_desc"]} />
                    </div>                    
                ))}
            </Slider>
        </div>
    );
};

export default CarouselComponent;
