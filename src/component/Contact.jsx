import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='contactDiv'>
                <h4 className='emailId'>VITHUSHAN1011@HOTMAIL.COM</h4>
                <div className='listOfContactIcons'>
                    <img src='/img/github.png' alt="socialMedia" className='contactIcons' />
                    <img src='/img/linkedin.png' alt="socialMedia" className='contactIcons' />
                    <img src='/img/instagram.png' alt="socialMedia" className='contactIcons' />
                </div>
            </div>
        );
    }
}

export default Contact;