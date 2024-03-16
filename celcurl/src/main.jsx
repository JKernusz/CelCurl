import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Info from './pages/Info.jsx';
import Services from './pages/Services.jsx';
import Products from './pages/Products.jsx';
import Portfolio from './pages/Portfolio.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/info',
        element: <Info />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
    ],

  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
