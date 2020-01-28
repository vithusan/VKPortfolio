import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Contact from './Contact'


class Homepage extends Component {

    render() {
        return (
            <div className='mainDiv animated fadeInUp'>
                <div className='topNav'>
                    <Link to='/skill' className='animated fadeInLeft delay-1s test'>Skills</Link>
                    <Link to='/portfolio' className='animated fadeInRight delay-1s test'>Portfolio</Link>
                </div>
                <div className='centerDiv'>
                    <div className='aboutDiv'>
                        <h1 className="animated fadeInDown delay-1s title">VK</h1>
                        <h2 className="animated fadeInDown ">Software Engineer</h2>
                        <p className="animated fadeInDown aboutTag">Detail-oriented software engineer with proficiency in JavaScript,
                        React and Node.Js.  Experienced building web apps in fast-paced
                        and collaborative working environments. </p>
                        <Contact />
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;