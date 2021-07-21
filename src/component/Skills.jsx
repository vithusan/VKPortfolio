import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Skills extends Component {


    render() {
        return (
            <div className='mainDiv'>
                <div className='skillsNav'>
                    <h1 className='animated fadeInDown skillsTitle'>Skills</h1>
                    <Link to='/' className='animated fadeInRight delay-1s nav'>Back</Link>
                </div>
                <div className='skillCenterDiv animated fadeInUp'>
                    <div className='listOfSkills'>
                        <i className="devicon-react-original languageIcon"><p className="iconDes" >React</p></i>
                        <i className="devicon-redux-original languageIcon"><p className="iconDes" >Redux</p></i>
                        <i className="devicon-docker-plain languageIcon"><p className="iconDes" >Docker</p></i>
                        <i className="devicon-mongodb-plain languageIcon"><p className="iconDes" >MongoDB</p></i>
                        <i className="devicon-express-original languageIcon"><p className="iconDes" >Express.js</p></i>
                        <i className="devicon-nodejs-plain languageIcon"><p className="iconDes" >Node.js</p></i>
                        <i className="devicon-javascript-plain languageIcon"><p className="iconDes" >JavaScript</p></i>
                        <i className="devicon-python-plain languageIcon"><p className="iconDes" >Python</p></i>
                        <i className="devicon-django-plain languageIcon"><p className="iconDes" >Django</p></i>
                        <i className="devicon-postgresql-plain languageIcon"><p className="iconDes" >PostgreSQL</p></i>
                        <i className="devicon-html5-plain languageIcon"><p className="iconDes" >HTML5</p></i>
                        <i className="devicon-css3-plain languageIcon"><p className="iconDes" >CSS3</p></i>
                        <i className="devicon-heroku-original languageIcon"><p className="iconDes" >Heroku</p></i>
                        <i className="devicon-github-plain languageIcon"><p className="iconDes" >GitHub</p></i>
                        <i className="devicon-git-plain languageIcon"><p className="iconDes" >Git</p></i>
                        <i className="devicon-amazonwebservices-plain languageIcon"><p className="iconDes" >AWS</p></i>
                        <i className="devicon-linux-plain languageIcon"><p className="iconDes" >Linux</p></i>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;