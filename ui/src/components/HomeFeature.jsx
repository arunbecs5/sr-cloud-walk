import React from 'react';

const HomeFeatureComponent = () => {
    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div class="d-flex align-items-center mb-4">
                                <div class="btn-lg-square bg-primary rounded-circle me-3">
                                    <i class="fa fa-users text-white"></i>
                                </div>
                                <h1 class="mb-0" data-toggle="counter-up">500+</h1>
                            </div>
                            <h5 class="mb-3">Happy Customers</h5>
                            <span></span>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div class="d-flex align-items-center mb-4">
                                <div class="btn-lg-square bg-primary rounded-circle me-3">
                                    <i class="fa fa-check text-white"></i>
                                </div>
                                <h1 class="mb-0" data-toggle="counter-up">300+</h1>
                            </div>
                            <h5 class="mb-3">Project Done</h5>
                            <span></span>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div class="d-flex align-items-center mb-4">
                                <div class="btn-lg-square bg-primary rounded-circle me-3">
                                    <i class="fa fa-award text-white"></i>
                                </div>
                                <h1 class="mb-0" data-toggle="counter-up">10+</h1>
                            </div>
                            <h5 class="mb-3">Awards Win</h5>
                            <span></span>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div class="d-flex align-items-center mb-4">
                                <div class="btn-lg-square bg-primary rounded-circle me-3">
                                    <i class="fa fa-users-cog text-white"></i>
                                </div>
                                <h1 class="mb-0" data-toggle="counter-up">200+</h1>
                            </div>
                            <h5 class="mb-3">Subsidiary Processed</h5>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomeFeatureComponent;