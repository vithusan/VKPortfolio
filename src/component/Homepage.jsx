import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {

    render() {
        return (
            <div className='mainDiv'>
                <div className='centerDiv'>
                    <Link to='/skill' ><i className="material-icons md-70 animated fadeInLeft delay-2s">keyboard_arrow_left</i></Link>
                    <div className='aboutDiv'>
                        <h1 className="animated fadeInDown delay-1s">VK</h1>
                        <h2 className="animated fadeInDown delay-2s">Software Engineer</h2>
                        <p className="animated fadeInDown delay-2s aboutTag">Detail-oriented software engineer with proficient in JavaScript,
                            React and Node.Js.  Experienced building web apps in fast-paced
                        and collaborative working environments. </p>
                    </div>
                    <Link to='/portfolio'><i className="material-icons md-70 animated fadeInRight delay-2s">keyboard_arrow_right</i></Link>
                </div>
                <div className='arrow_down'>
                    <Link to='/contact'><i className="material-icons md-70 animated fadeInUp delay-2s">keyboard_arrow_down</i></Link>
                </div>
            </div>
        );
    }
}

export default Homepage;