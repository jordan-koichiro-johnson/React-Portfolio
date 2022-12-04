import React from 'react';

function Project(props) {
    return (
        <div className={'indProj'}>
            <img className={'projPic'} src={props.img} alt={props.alt} />
            <a href={props.url}>{props.title}</a>
            <div>{props.summary}</div>
        </div>
    )
}

export default Project