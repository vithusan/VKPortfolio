import React, { Component } from 'react';

class Portfolio extends Component {
    state = {
        projects: [
            {
                img: '/img/screenShot.png',
                github: 'https://github.com/vithusan/Project4_Django',
            },
            {
                img: '/img/screenShot.png',
                github: 'https://github.com/vithusan/project3_MERN'
            },
            {
                img: '/img/screenShot.png',
                github: 'https://github.com/vithusan/project2'
            },
            {
                img: '/img/screenShot.png',
                github: 'https://github.com/vithusan/connect4'
            }
        ]
    }
    render() {
        return (
            <div className='mainDiv'>
                <h1 className='animated fadeInDown delay-1s'>PORTFOLIO</h1>
                <div className='listOfProjects' >
                    {this.state.projects.map((project) => {
                        return (
                            <div className='animated fadeInRight delay-1s'>
                                <a href={project.github} target="_blank">
                                    <img src={project.img} alt="project" className="singleProject" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;