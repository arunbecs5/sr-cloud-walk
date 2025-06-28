import React, { useState } from 'react';

const projects = [
    {
        id: 1, category: 'Ground Mount', title: '5MW',
        description: 'Ground mounting project @ Aruppukottai.',
        imageUrl: 'img/projects/ground/5mw.jpg',
    },    
    {
        id: 2, category: 'Industrials', title: '1MW',
        description: 'Rooftop project at STRONG GLASS (P) Ltd, COIMBATORE.',
        imageUrl: 'img/projects/industrial/1mw-1.jpg',
    },
    {
        id: 3, category: 'Industrials', title: '200KW',
        description: 'Roofing work for 200kw @ Dharapuram',
        imageUrl: 'img/projects/industrial/200kw1.jpeg',
    },
    {
        id: 4, category: 'Industrials', title: '100KW',
        description: 'Roofing work @ Coimbatore',
        imageUrl: 'img/projects/industrial/100kw.jpg',
    },
    {
        id: 5, category: 'Industrials', title: '40kw',
        description: 'Roofing work @ Pongalur',
        imageUrl: 'img/projects/industrial/40kw-pongalur.jpg',
    },    
    {
        id: 6, category: 'Residential', title: '10KW',
        description: 'Residential project with On Grid system @ Coimbatore',
        imageUrl: 'img/projects/R_Work/10kw.jpeg',
    },
    {
        id: 7, category: 'Residential', title: '5KW',
        description: 'Residential project @ Palladam',
        imageUrl: 'img/projects/R_Work/5kw-1.jpeg',
    }, 
    {
        id: 8, category: 'Residential', title: '5KW',
        description: 'Residential project @ Vilankurichi, Coimbatore',
        imageUrl: 'img/projects/R_Work/5kw.jpeg',
    },   
    {
        id: 9, category: 'Residential', title: '2KW',
        description: 'Residential project @ Pollachi',
        imageUrl: 'img/projects/R_Work/2kw-1.jpg',
    }, 
    {
        id: 10, category: 'Pumping System', title: '10HP',
        description: 'Pumping system @ Pollachi Farm House.',
        videoUrl: 'img/projects/pumping/pumping.mp4',
    },
    {
        id: 55, category: 'Ground Mount', title: '  ',
        description: ' ',
        imageUrl: 'img/projects/ground/1.jpg',
    },
    {
        id: 56, category: 'Ground Mount', title: '  ',
        description: ' ',
        imageUrl: 'img/projects/ground/2.jpg',
    },
    {
        id: 57, category: 'Residential', title: '  ',
        description: ' ',
        imageUrl: 'img/projects/ground/28.jpg',
    },    
    {
        id: 58, category: 'Residential', title: ' ',
        description: ' ',
        imageUrl: 'img/projects/ground/29.jpg',
    },
    {
        id: 59, category: 'Industrials', title: '',
        description: ' ',
        imageUrl: 'img/projects/ground/6.jpg',
    },
    {
        id: 60, category: 'Ground Mount', title: ' ',
        description: ' ',
        imageUrl: 'img/projects/ground/7.jpg',
    },
    {
        id: 61, category: 'Residential', title: '  ',
        description: ' ',
        imageUrl: 'img/projects/ground/8.jpg',
    },
    {
        id: 62, category: 'Industrials', title: '  ',
        description: ' ',
        imageUrl: 'img/projects/ground/9.jpg',
    },
    {
        id: 63, category: 'Industrials', title: '  ',
        description: ' ',
        imageUrl: 'img/projects/ground/10.jpg',
    },
    {
        id: 64, category: 'Industrials', title: '  ',
        description: ' ',
        imageUrl: 'img/projects/ground/11.jpg',
    },
    {
        id: 65, category: 'Industrials', title: '  ',
        description: ' ',
        imageUrl: 'img/projects/ground/12.jpg',
    }
];

// Tab filter component
const TabFilter = ({ categories, selectedCategory, onTabClick }) => {
    return (
        <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            <div class="col-12 text-center">
                <ul class="list-inline mb-5" id="portfolio-flters">
                    {
                        categories.map((category, index) => (
                            <li className={`tab ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => onTabClick(category)}
                                key={index}>{category}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

const ProjectComponent = () => {
    // State to keep track of selected category for filtering
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories from the projects data
    const categories = ['All', ...new Set(projects.map(project => project.category))];

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const handleTabClick = (category) => {
        setSelectedCategory(category);
    };


    return (
        <>
            {/* <!-- Projects Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h6 class="text-primary">Our Projects</h6>
                        <h1 class="mb-4">Visit Our Solar And Renewable Energy Projects</h1>
                    </div>
                    <div className="gallery-container">
                        {/* Tab filter component */}
                        <TabFilter categories={categories} selectedCategory={selectedCategory} onTabClick={handleTabClick} />

                        {/* Display filtered projects */}
                        <div class="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
                            {filteredProjects.map(project => (
                                <div key={project.id} className="gallery-item col-lg-4 col-md-6 portfolio-item first">
                                    {project.videoUrl ? (
                                        selectedCategory == 'Pumping System' ? (
                                            <video width="100%" height="auto" controls autoPlay>
                                                <source src={project.videoUrl} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) :
                                            (
                                                <video width="100%" height="auto" controls>
                                                    <source src={project.videoUrl} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )

                                    ) : (
                                        <img class="img-fluid" src={project.imageUrl} alt={project.title} />
                                    )}

                                    <div className="overlay">
                                        <h3>{project.title}</h3>
                                    </div>
                                    <div class="pt-3">
                                        <p class="text-primary mb-0">{project.title}</p>
                                        <hr class="text-primary w-25 my-2" />
                                        <h5 class="lh-base">{project.description}</h5>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Projects End --> */}

        </>
    )
};

export default ProjectComponent;