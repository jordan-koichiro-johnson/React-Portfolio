import React from 'react';
import '../styles/project.css';
import Project from './project';
import stayHomie from '../util/stayhomie.png'
import weatherDashPic from '../util/weatherdashboard.png'
import musicPic from '../util/musicpic.gif'

const stayHome = {
    title: 'Stay Homie',
    url: 'https://cornetj13.github.io/stay-homie/',
    summary: 'some stay homie summary',
    alt: 'image of stay homie',
    img: stayHomie,
}

const musicQuiz = {
    title: 'Music Quiz Game',
    url: 'https://github.com/itsDavidK/music-quiz-game',
    summary: 'music quiz summary',
    alt: 'image of music quiz',
    img: musicPic
}

const weather = {
    title: 'Weather Dashboard',
    url: 'https://jordan-koichiro-johnson.github.io/Weather-Dashboard/',
    summary: 'weather dashboard summary',
    alt: 'image of weather dashboard',
    img: weatherDashPic
}

function Projects() {
    return (
        <div className={'allProj'}>

            <Project url={stayHome.url} title={stayHome.title} summary={stayHome.summary} img={stayHome.img} alt={stayHome.alt} />
            <Project url={musicQuiz.url} title={musicQuiz.title} summary={musicQuiz.summary} img={musicQuiz.img} alt={musicQuiz.alt} />
            <Project url={weather.url} title={weather.title} summary={weather.summary} img={weather.img} alt={weather.alt} />

        </div>
    )
}

export default Projects;