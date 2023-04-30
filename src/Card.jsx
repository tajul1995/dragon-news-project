// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({news}) => {
    const {_id,title,details,image_url}=news
    return (
        <div>
            <div className="card w-9/12 bg-white shadow-xl mx-auto mb-4">
  <figure className="px-10 pt-10">
    <img src={image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className='text-black'>{details.length<250?<>{details}</>:<>{details.slice(0,250)}...</>}<Link className='text-blue-500 underline' to={`/news/${_id}`}>read more</Link></p>
    
  </div>
</div>
        </div>
    );
};

export default Card;