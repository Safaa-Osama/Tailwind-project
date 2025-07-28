import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portofolio from './Components/Portofolio/Portofolio'
import Error from "./Components/Error/Error";
import './App.css'
import Home from './Components/Home/Home'

function App() {
  const routers = createBrowserRouter([
    {
      path: '/',  element: <Layout />,
       children: [
        {index: true, element:<Home/> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        { path: 'portofolio', element: <Portofolio /> },
        {path:'*', element: <Error />}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routers}></RouterProvider> 
    </>
  )
}

export default App
