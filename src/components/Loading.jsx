import React from 'react';
import '../assets/css/loading.css'

const Loading = () => {
    return (
        <div className='loading'>
                <div className="box">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <h2>Loading...</h2>
        </div>
    );
};

export default Loading;