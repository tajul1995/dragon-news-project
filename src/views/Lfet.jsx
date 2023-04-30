// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Lfet = () => {
    const [catagories,setCatagories]=useState([])
    
    useEffect(()=>{
      fetch('http://localhost:5000/catagories')
      .then(res=>res.json())
      .then(data=>setCatagories(data))
    
        
    },[])
    return (
        <div>
            <h3>ALL CATAGORIES HERE</h3>
            <div>
                {
                    catagories.map(catagorie=><p key={catagorie.id}>
                        <Link to={`/catagory/${catagorie.id}`}>{catagorie.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default Lfet;