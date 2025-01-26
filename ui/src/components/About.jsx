import React from 'react';

const AboutComponent = () => {
    return (
        <>

            {/* <!-- About Start --> */}
            <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div class="container about px-lg-0">
                    <div class="row g-0 mx-lg-0">
                        <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute img-fluid w-100 h-100" src="img/about2.jpg" style={{ objectFit: "cover" }} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div class="p-lg-5 pe-lg-0">
                                <h4 class="text-primary">About Us</h4>
                                <h1 class="mb-4">15+ Years Experience In Solar & Renewable Energy Industry</h1>
                                <h6>Empowering a Sustainable Future with Solar Energy</h6>
                                <p>
                                    At Sun Solar, we are committed to harnessing the power of the sun to create a cleaner,
                                    more sustainable world. As pioneers in the solar renewable energy industry,
                                    we provide innovative solar energy solutions designed to meet the growing energy demands of today
                                    while protecting the environment for tomorrow. Our mission is simple: to make solar energy
                                    accessible, affordable, and efficient for homes, businesses, and communities around the globe.
                                </p>
                                {/* <p><i class="fa fa-check-circle text-primary me-3"></i></p> */}
                                <h6><i class="fa fa-check-circle text-primary me-3"></i>Who We Are</h6>
                                <p>
                                    Founded in 2010, Sun Solar was created with the vision of revolutionizing
                                    was created with the vision of revolutionizing how we power our lives. With years of experience
                                    and a team of passionate engineers, energy experts,
                                    and environmental advocates, we are dedicated to driving the transition to renewable energy.
                                </p>
                                <h6><i class="fa fa-check-circle text-primary me-3"></i>Our Mission</h6>
                                <p>
                                    To provide high-quality, reliable, and affordable solar energy solutions that reduce our carbon footprint
                                    and pave the way for a sustainable future. Through innovation and education,
                                    we aim to empower individuals and businesses to make the switch to solar energy and enjoy long-term energy savings.
                                </p>
                                <h6><i class="fa fa-check-circle text-primary me-3"></i>Our Vision</h6>
                                <p>
                                    A world where renewable energy sources, especially solar power, are the foundation of global energy production.
                                    We envision a future where every home and business can thrive by reducing their environmental
                                    impact while saving on energy costs.
                                </p>
                                <h6><i class="fa fa-check-circle text-primary me-3"></i>Our Approach</h6>
                                <p>
                                    At Sun Solar, we understand that no two energy needs are the same.
                                    That's why we offer customized solar solutions tailored to the unique needs of each client.
                                    Whether it's residential, commercial, or industrial, we provide end-to-end services from design
                                    and installation to monitoring and maintenance.
                                </p>
                                <h6>Why Choose Us?</h6>
                                <p><i class="fa fa-check-circle text-primary me-3"></i>
                                    <b>Expertise: </b> With years of experience in the solar industry, we have a deep understanding of
                                    what it takes to provide effective energy solutions.
                                </p>
                                <p><i class="fa fa-check-circle text-primary me-3"></i>
                                    <b>Quality Products: </b> We work with top-tier solar manufacturers to ensure you receive
                                    the best technology available.
                                </p>
                                <p><i class="fa fa-check-circle text-primary me-3"></i>
                                    <b>Customer-Centric Service: </b> From the initial consultation to post-installation support,
                                    we prioritize customer satisfaction every step of the way.
                                </p>
                                <p><i class="fa fa-check-circle text-primary me-3"></i>
                                    <b>Affordable & Efficient: </b>We help you save money through solar energy, offering competitive pricing and financing options.
                                </p>



                                {/* <p><i class="fa fa-check-circle text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                                <p><i class="fa fa-check-circle text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                                <a href="" class="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    )
};

export default AboutComponent;