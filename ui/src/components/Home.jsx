import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ServiceComponent from './Service';
import AboutComponent from './About';
import QuotesComponent from './Quotes';
import ProjectComponent from './Projects';
import FooterComponent from './Footer';
import TestimoonialComponent from './Testimonial';
import TeamsComponent from './Teams';
import FeatureComponent from './Feature';
import HomeFeatureComponent from './HomeFeature';

const HomeComponent = () => {
    const images = [
        { 'img_src' : "img/carousel-1.jpg" , "image_title" : "Plant Construction", "image_desc" : "Plant Work" }, // Add your image paths here
        { 'img_src' : "img/carousel-2.jpg" , "image_title" : "Rooftop Installation", "image_desc" : "Rooftop Work" },
        { 'img_src' : "img/carousel-6.jpg" , "image_title" : "Industrial Plan", "image_desc" : "Industrial Work" },
        { 'img_src' : "img/carousel-7.jpg" , "image_title" : "Subsidary Process", "image_desc" : "Subsidary Work" },
    ];
    
    return (
        <>
            <div className="carousel-container">
                <Carousel>
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={image["img_src"]}
                                alt={`carousel-item-${index}`}
                            />
                            <Carousel.Caption>
                                <h3>{image["image_title"]}</h3>
                                <p>{image["image_desc"]}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            
            {/* <div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="owl-carousel header-carousel position-relative">
                    <div class="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                        <img class="img-fluid" src="img/carousel-1.jpg" alt=""/>
                        <div class="owl-carousel-inner">
                            <div class="container">
                                <div class="row justify-content-start">
                                    <div class="col-10 col-lg-8">
                                        <h1 class="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                                        <p class="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                        <a href="" class="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="owl-carousel-item position-relative" data-dot="<img src='img/carousel-2.jpg'>">
                        <img class="img-fluid" src="img/carousel-2.jpg" alt=""/>
                            <div class="owl-carousel-inner">
                                <div class="container">
                                    <div class="row justify-content-start">
                                        <div class="col-10 col-lg-8">
                                            <h1 class="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                                            <p class="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                            <a href="" class="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Carousel End --> */}


            {/* <!-- Feature Start --> */}
            <HomeFeatureComponent/>
            {/* <!-- Feature Start --> */}


            {/* <!-- About Start --> */}
            <AboutComponent />
            {/* <!-- About End --> */}

           

            {/* <!-- Feature Start --> */}
            <FeatureComponent/>
            {/* <!-- Feature End --> */}


            {/* <!-- Projects Start --> */}
            <ProjectComponent/>
            {/* <!-- Projects End --> */}


            {/* <!-- Quote Start --> */}
            <QuotesComponent/>
            {/* <!-- Quote End --> */}

            {/* <!-- Service Start --> */}
            <ServiceComponent/>
            {/* <!-- Service End --> */}



            {/* <!-- Team Start --> */}
            <TeamsComponent/>
            {/* <!-- Team End --> */}


            {/* <!-- Testimonial Start --> */}
            <TestimoonialComponent/>
            {/* <!-- Testimonial End --> */}


            {/* <!-- Footer Start --> */}
            <FooterComponent/>
            {/* <!-- Footer End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

        </>
    )
};

export default HomeComponent;



