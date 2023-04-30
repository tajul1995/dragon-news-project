// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './views/Header';
import Footer from './views/Footer';

import Right from './views/Right';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
             <div className='mx-7'>
            <Header></Header>
            <div className='grid grid-cols-3 gap-4'>
            
                <div className='col-span-2 bg-slate-300'><Outlet></Outlet></div>
                <div><Right></Right></div>
                

            </div>
            <Footer></Footer>
        </div>
 
        </div>
    );
};

export default NewsLayout;