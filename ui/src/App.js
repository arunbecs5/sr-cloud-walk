import Menubar from './components/Menubar';
import HomeComponent from './components/Home';
import React, { useState } from 'react';
import ServiceComponent from './components/Service';
import AboutComponent from './components/About';
import QuotesComponent from './components/Quotes';
import ContactUsComponent from './components/Contacts';
import ProjectComponent from './components/Projects';
import './App.css';
/* Slick Carousel Styles */
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';



const App = () => {
    // Set up state to track which section is visible
    const [activeSection, setActiveSection] = useState("home");
    // Function to handle menu item click
    const handleMenuClick = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <Menubar handleMenuClick={handleMenuClick}/>            
            {activeSection === 'home' && <HomeComponent />}
            {activeSection === 'quote' && <QuotesComponent />}
            {activeSection === 'service' && <ServiceComponent />}
            {activeSection === 'about' && <AboutComponent />}    
            {activeSection === 'contact' && <ContactUsComponent />}    
            {activeSection === 'project' && <ProjectComponent />}    

            {/* <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="#">SR Cloud Walk</a>, All Right Reserved.
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            Designed By <a href="#">SR_CloudWalk_Team</a><br />
                            Distributed By: <a href="#" target="_blank">SR_CloudWalk</a>
                        </div>
                    </div>
                </div>
            </div>         */}
        </>

    );
};

export default App;
