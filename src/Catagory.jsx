// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Catagory = () => {
    const {id}=useParams()
    const catagoryNews = useLoaderData()
    return (
        <div>
            <h5>{id}</h5>
            <h4>catagory is here{catagoryNews.length}</h4>
            {
                // eslint-disable-next-line react/jsx-key
                catagoryNews.map(news=><Card key={news._id} news={news}></Card>)
            }
        </div>
    );
};

export default Catagory;