import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Contact from './Contact'


class Homepage extends Component {

    render() {
        return (
            <div className='mainDiv'>
                <div className='centerDiv'>
                    <Link to='/skill' className='animated fadeInLeft delay-1s test'><i className="material-icons md-70 ">keyboard_arrow_left</i>Skills</Link>
                    <div className='aboutDiv'>
                        <h1 className="animated fadeInDown delay-1s">VK</h1>
                        <h2 className="animated fadeInDown delay-1s">Software Engineer</h2>
                        <p className="animated fadeInDown delay-1s aboutTag">Detail-oriented software engineer with proficiency in JavaScript,
                            React and Node.Js.  Experienced building web apps in fast-paced
                        and collaborative working environments. </p>
                    </div>
                    <Link to='/portfolio' className='animated fadeInRight delay-1s test'>Portfolio<i className="material-icons md-70 ">keyboard_arrow_right</i></Link>
                </div>
                <div className='animated fadeInUp delay-1s bottomSection'>
                    <Contact />
                </div>
            </div>
        );
    }
}

export default Homepage;