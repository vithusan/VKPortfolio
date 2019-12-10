import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <div className='mainDiv'>
                <div className='centerDiv'>
                    <i className="material-icons md-70 animated fadeInLeft delay-2s">keyboard_arrow_left</i>
                    <div className='aboutDiv'>
                        <h1 className="animated fadeInDown delay-1s">VITHUSAN</h1>
                        <h2 className="animated fadeInDown delay-2s">Software Engineer</h2>
                        <p className="animated fadeInDown delay-2s aboutTag">Detail-oriented software engineer with proficient in JavaScript,
                            React and Node.Js.  Experienced building web apps in fast-paced
                        and collaborative working environments. </p>
                    </div>
                    <i className="material-icons md-70 animated fadeInRight delay-2s">keyboard_arrow_right</i>
                </div>
                <div className='arrow_down'>
                    <i className="material-icons md-70 animated fadeInUp delay-2s">keyboard_arrow_down</i>
                </div>
            </div>
        );
    }
}

export default Homepage;