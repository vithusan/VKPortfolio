import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Portfolio extends Component {
    state = {
        projects: [
            {
                img: '/img/project4.png',
                github: 'https://github.com/vithusan/Project4_Django',
                deployed: 'http://18.188.218.226:3000/',
                language: ['React', 'Django', 'Python', 'JavaScript']
            },
            {
                img: '/img/project1.png',
                github: 'https://github.com/vithusan/connect4',
                deployed: 'https://pages.git.generalassemb.ly/vithusan/P1-connect4/',
                language: ['JavaScript', 'HTML5', 'CSS3']
            },
            {
                img: '/img/project2.png',
                github: 'https://github.com/vithusan/project2',
                deployed: 'https://tranquil-inlet-04681.herokuapp.com/type',
                language: ['JavaScript', 'Handlebars', 'MongoDb', 'Express']
            },
            {
                img: '/img/project3.png',
                github: 'https://github.com/vithusan/project3_MERN',
                deployed: 'https://stormy-bastion-82943.herokuapp.com/',
                language: ['React', 'JavaScript', 'MongoDb', 'Express']
            }
        ]
    }


    render() {
        return (
            <div className='mainDiv'>
                <h1 className='animated fadeInDown'>PORTFOLIO</h1>
                <div className='portfolioCenterDiv'>
                    <Link to='/' className='test animated fadeInLeft delay-1s'><i className="material-icons md-70">keyboard_arrow_left</i>Back</Link>
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
                                            <a href={project.deployed} target="_blank" className='hoverBtn'> Deployed</a>
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