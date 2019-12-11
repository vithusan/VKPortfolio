import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Skills extends Component {


    render() {
        return (
            <div className='mainDiv'>
                <h1 className='animated fadeInDown'>Skills</h1>
                <div className='skillCenterDiv'>
                    <div className='animated fadeInLeft listOfSkills'>
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
                    <Link to='/' className='animated fadeInRight delay-1s test'>Back<i className="material-icons md-70 ">keyboard_arrow_right</i></Link>
                </div>
            </div>
        );
    }
}

export default Skills;