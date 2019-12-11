import React, { Component } from 'react';

class Portfolio extends Component {
    state = {
        projects: [
            {
                img: '/img/screenShot.png',
                github: 'https://github.com/vithusan/Project4_Django',
                language: ['HTML', 'CSS', 'JavaScript']
            },
            {
                img: '/img/screenShot.png',
                github: 'https://github.com/vithusan/project3_MERN',
                language: ['HandleBars', 'CSS', 'JavaScript']
            },
            {
                img: '/img/screenShot.png',
                github: 'https://github.com/vithusan/project2',
                language: ['React', 'CSS', 'JavaScript']
            },
            {
                img: '/img/screenShot.png',
                github: 'https://github.com/vithusan/connect4',
                language: ['Python', 'CSS', 'JavaScript']
            }
        ],
        isHovering: false
    }

    toggleHover = () => {
        this.setState({ isHovering: !this.state.isHovering })
    }

    render() {
        return (
            <div className='mainDiv'>
                <h1 className='animated fadeInDown delay-1s'>PORTFOLIO</h1>
                <div className='listOfProjects' >
                    {this.state.projects.map((project) => {
                        return (
                            <div className='animated fadeInRight delay-1s projectContainer'>
                                <img src={project.img} alt="project" className="singleProject" />
                                <div className='overlay animated bounceIn'>
                                    {project.language.map((singleLan) => {
                                        return (
                                            <div className='languageList'>
                                                {singleLan}
                                            </div>
                                        )
                                    })}
                                    <div className='hoverBtnDiv'>
                                        <a href={project.github} target="_blank" className='hoverBtn'> GitHub</a>
                                        <a href={project.github} target="_blank" className='hoverBtn'> Deployed</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;