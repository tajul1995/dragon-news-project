// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/AuthPrtovider';

const Header = () => {
  const {user}=useContext(AuthContext)
    return (
        <div >
            <div className='text-center'>
            <img src={logo} alt="" className='mx-auto' />
            <p className='text-orange-500 my-4'>jouhhghhhhjdgdjffhhhfjf</p>
            <p className='text-green-600'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='flex mb-3'>
            <button type="submit" className="btn bg-orange-300">latest</button>
            <Marquee className='text-red-400' speed={100}>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eius at dignissimos alias aliquid maxime deleniti assumenda exercitationem a soluta.
</Marquee>
            </div >
            <div className="navbar bg-red-300 my-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">{user.name}</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-xl font-bold">
      <Link to='/' className='text-black mr-9'>home</Link>
      <Link className='text-black mr-9 '>about</Link>
      <Link className='text-black'>carrer</Link>
     
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">login</a>
  </div>
</div>
        </div>
    );
};

export default Header;