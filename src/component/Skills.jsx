import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Skills extends Component {


    render() {
        return (
            <div className='mainDiv animated fadeInUp'>
                <div className='skillsNav'>
                    <h1 className='animated fadeInDown delay-1s skillsTitle'>Skills</h1>
                    <Link to='/' className='animated fadeInRight delay-1s test'>Back</Link>
                </div>
                <div className='skillCenterDiv'>
                    <div className='listOfSkills'>
                        <i className="devicon-react-original-wordmark languageIcon"></i>
                        <i className="devicon-python-plain-wordmark languageIcon"></i>
                        <i className="devicon-postgresql-plain-wordmark languageIcon"></i>
                        <i className="devicon-nodejs-plain-wordmark languageIcon"></i>
                        <i className="devicon-jquery-plain-wordmark languageIcon"></i>
                        <i className="devicon-javascript-plain languageIcon"></i>
                        <i className="devicon-html5-plain-wordmark languageIcon"></i>
                        <i className="devicon-heroku-original-wordmark languageIcon"></i>
                        <i className="devicon-github-plain-wordmark languageIcon"></i>
                        <i className="devicon-git-plain-wordmark languageIcon"></i>
                        <i className="devicon-express-original languageIcon"></i>
                        <i className="devicon-django-plain languageIcon"></i>
                        <i className="devicon-css3-plain-wordmark languageIcon"></i>
                        <i className="devicon-babel-plain languageIcon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;