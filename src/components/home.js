import React from 'react';
import '../styles/homepage.css';
import prof from '../util/profilepic.jpg'

function Homepage() {
    return (
        <div className={'homeDiv'}>
            <img className={'profile'} src={prof} alt="Jordan Johnson" />
            <div className={'summary'}>Jordan Johnson is a web developer experienced in Javascript, HTML/CSS, React, and the MERN stack.</div>
        </div>
    )
}

export default Homepage;