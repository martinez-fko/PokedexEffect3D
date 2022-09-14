import React from 'react';
import '../assets/css/ProgressBar.css'

const ProgressBar = ({title, percentage , color , max}) => {
    return (
        <div className="skillBox" >
            <div  className="skillHead">
                <p>{title}</p>
                <p>{percentage} / {max}</p>
            </div>
            <div className="skill">
                <div className={`skill_level box ${color}` } style={{width: percentage}}></div>
            </div>
        </div>
    );
};

export default ProgressBar;