import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Massage from './components/MassagePage/Massage.jsx'
import Error from './components/Error.jsx'


const router =createBrowserRouter([
  {
  path:'/',element:<App/>,
  
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
