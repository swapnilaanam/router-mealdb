import React from 'react';
import Spinner from '/3-dots-move.svg';

const Loading = () => {
    return (
        <div className='w-28 h-28 mx-auto mt-72'>
            <img src={Spinner} alt="loading" className='text-8xl h-16'/>
        </div>
    );
};

export default Loading;