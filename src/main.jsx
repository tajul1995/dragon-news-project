// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Router.jsx'
import AuthPrtovider from './assets/AuthPrtovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthPrtovider>
    <RouterProvider router={router}></RouterProvider>
  </AuthPrtovider>,
)
