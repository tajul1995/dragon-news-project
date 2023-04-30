// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDeatils = () => {
    const singleNews = useLoaderData()
    const {title,details,image_url,category_id}=singleNews
    return (
        <div>
            <div>
            <div className="card w-9/12 bg-white shadow-xl mx-auto mb-4">
  <figure className="px-10 pt-10">
    <img src={image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <Link to={`/catagory/${category_id}`}><button className="btn btn-secondary">see same catagoey news</button></Link>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default NewsDeatils;