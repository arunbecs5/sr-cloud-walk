import React from 'react';

const Menubar = ({ handleMenuClick }) => {

    return (
        <>
            <div class="container-fluid bg-dark p-0">
                <div class="row gx-0 d-none d-lg-flex">
                    <div class="col-lg-7 px-5 text-start">
                        <div class="h-100 d-inline-flex align-items-center me-4">
                            <small class="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>No. 2/4, Palakkad Road, Pollachi, Coimbatore - 642002</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center">
                            <small class="far fa-clock text-primary me-2"></small>
                            <small>Mon - Sat: 09.00 AM - 09.00 PM</small>
                        </div>
                    </div>
                    <div class="col-lg-5 px-5 text-end">
                        <div class="h-100 d-inline-flex align-items-center me-4">
                            <small class="fa fa-phone-alt text-primary me-2"></small>
                            <small>+91 850 8093766</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center mx-n2">
                            <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-square btn-link rounded-0" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a href="#" class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                    <h2 class="m-0 text-primary">SunSolarTechnologies</h2>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <li class="btn nav-item nav-link" onClick={()=> handleMenuClick("home")}>Home</li>
                        <li class="btn nav-item nav-link" onClick={()=> handleMenuClick("about")}>About</li>
                        <li class="btn nav-item nav-link" onClick={()=> handleMenuClick("service")}>Service</li>
                        <li class="btn nav-item nav-link" onClick={()=> handleMenuClick("project")}>Project</li>
                        <li class="btn nav-item nav-link" onClick={()=> handleMenuClick("contact")}>Contact</li>
                        {/* <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu bg-light m-0">
                                <a href="#" class="dropdown-item">Feature</a>
                                <a href="#" class="dropdown-item">Free Quote</a>
                                <a href="#" class="dropdown-item">Our Team</a>
                                <a href="#" class="dropdown-item">Testimonial</a>
                                <a href="#" class="dropdown-item">404 Page</a>
                            </div>
                        </div> */}
                    </div>
                    <button class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" 
                        onClick={()=> handleMenuClick("quote")}>Get A Quote<i class="fa fa-arrow-right ms-3"></i>
                    </button>
                </div>
            </nav>
        </>
    )
};

export default Menubar;
