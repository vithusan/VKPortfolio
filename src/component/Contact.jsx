import React, { Component } from 'react';
import { ReactComponent as GitHub } from '../assets/github.svg';
import { ReactComponent as Arroba } from '../assets/arroba.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';


class Contact extends Component {
    render() {
        return (
            <div className='contactDiv animated fadeInUp'>
                <a href="https://github.com/vithusan" target="_blank">
                    <div className='contactIcons' title='gihub'>
                        < GitHub />
                    </div>
                </a>
                <a href="mailto:vithushan1011@hotmail.com" target="_top">
                    <div className='contactIcons' title='email'>
                        <Arroba />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/vithusan-kanageswaran/" target="_blank">
                    <div className='contactIcons' title='linkedin'>
                        <Linkedin />
                    </div>
                </a>
            </div >
        );
    }
}

export default Contact;