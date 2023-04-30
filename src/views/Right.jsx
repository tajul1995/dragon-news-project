// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import Qzone from '../Qzone';
import bg from '../assets/bg.png'

const Right = () => {
    return (
        <div>
            <h2>login in with</h2>
            <button className="btn btn-outline btn-success my-3"><FaGoogle/>  login in with google</button>
            <br />
            <button className="btn btn-outline btn-success"><FaGithub/>  login in with github</button>
            <div>
            <button className="btn btn-outline btn-secondary">Button</button>
            <br />
            <button className="btn btn-outline btn-secondary">Button</button>
            <br />
            <button className="btn btn-outline btn-secondary">Button</button>
            <br />
            <button className="btn btn-outline btn-secondary">Button</button>
            </div>
            <Qzone></Qzone>
            <div className='w-100'>
                <img src={bg} alt="" className='w-100'/>
            </div>
        </div>
    );
};

export default Right;