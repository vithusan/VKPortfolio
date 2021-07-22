import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';



class Portfolio extends Component {
    state = {
        projects: [
            {
                img: `${project4}`,
                github: 'https://github.com/vithusan/Project4_Django',
                //deployed: 'http://18.188.218.226:3000/',
                language: ['React', 'Django', 'Python', 'JavaScript']
            },
            {
                img: `${project1}`,
                github: 'https://github.com/vithusan/connect4',
                deployed: 'https://pages.git.generalassemb.ly/vithusan/P1-connect4/',
                language: ['JavaScript', 'HTML5', 'CSS3']
            },
            {
                img: `${project2}`,
                github: 'https://github.com/vithusan/project2',
                deployed: 'https://tranquil-inlet-04681.herokuapp.com/type',
                language: ['JavaScript', 'Handlebars', 'MongoDb', 'Express']
            },
            {
                img: `${project3}`,
                github: 'https://github.com/vithusan/project3_MERN',
                deployed: 'https://stormy-bastion-82943.herokuapp.com/',
                language: ['React', 'JavaScript', 'MongoDb', 'Express']
            }
        ]
    }


    render() {
        return (
            <div className='mainDiv'>
                <div className='portfolioNav'>
                    <Link to='/' className='animated fadeInLeft delay-1s nav'>Back</Link>
                    <h1 className='animated fadeInDown portfolioTitle'>PORTFOLIO</h1>
                </div>
                <div className='portfolioCenterDiv animated fadeInUp'>
                    <div className='listOfProjects' >
                        {this.state.projects.map((project) => {
                            return (
                                <div className='projectDiv'>
                                    <div className='projectContainer'>
                                        <a href={project.deployed} target="_blank">
                                            <img src={project.img} alt="project" className="singleProject" />
                                            <div className='overlay animated bounceIn'>
                                                <div className='hoverBtnDiv'>
                                                    View
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='listOfLanguages'>
                                        {project.language.map((singleLan) => {
                                            return (
                                                <div className='languageList'>
                                                    {singleLan}
                                                </div>
                                            )
                                        })}
                                        <a href={project.github} target="_blank" className='githubLink'> GitHub</a>
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