// eslint-disable-next-line no-unused-vars
import React from 'react';
import qZone1 from './assets/qZone1.png'
import qZone2 from './assets/qZone2.png'
import qZone3 from './assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-orange-300 p-5'>
            <div className='mx-2'>
            <h3>qzone kid</h3>
            <img src={qZone1}alt="" />
            <img src={qZone2}alt="" />
            <img src={qZone3}alt="" />
            </div>
            
        </div>
    );
};

export default Qzone;