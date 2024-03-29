import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import Footer from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-primary'>
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>,
)
