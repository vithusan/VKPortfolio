import React, { Component } from 'react';
import { Link } from 'react-router-dom'


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
        ]
    }


    render() {
        return (
            <div className='mainDiv'>
                <h1 className='animated fadeInDown'>PORTFOLIO</h1>
                <div className='portfolioCenterDiv'>
                    <Link to='/'><i className="material-icons md-70 animated fadeInLeft delay-1s">keyboard_arrow_left</i></Link>
                    <div className='listOfProjects' >
                        {this.state.projects.map((project) => {
                            return (
                                <div className='animated fadeInRight projectContainer'>
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
            </div>
        );
    }
}

export default Portfolio;