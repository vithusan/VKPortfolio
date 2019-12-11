import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='contactDiv'>
                <div className='emailId'>
                    <a href="mailto:vithushan1011@hotmail.com" target="_top" >VITHUSHAN1011@HOTMAIL.COM</a>
                </div>
                <div className='listOfContactIcons'>
                    <a href="https://github.com/vithusan">
                        <img src='/img/github.png' alt="socialMedia" className='contactIcons1' />
                    </a>
                    <a href="https://www.linkedin.com/in/vithusan-kanageswaran/">
                        <img src='/img/linkedin.png' alt="socialMedia" className='contactIcons' />
                    </a>
                    <a href="https://www.instagram.com/vk_kanageswaran/">
                        <img src='/img/instagram.png' alt="socialMedia" className='contactIcons' />
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;