import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Catagory from "../Catagory";
import NewsLayout from "../NewsLayout";
import NewsDeatils from "../NewsDeatils";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Catagory></Catagory>,
                loader:()=>fetch('http://localhost:5000/news')
            },
            {
                path:'/catagory/:id',
                element:<Catagory></Catagory>,
                loader:({params})=>fetch(`http://localhost:5000/catagories/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<NewsDeatils></NewsDeatils>,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])
export default router