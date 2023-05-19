import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Cards from './Components/Cards';
import AddMovie from './Components/AddMovie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
    children:[
      {
        path: "/cards",
        element: <div><Cards /></div>,
      },
      {
        path: "/",
        element: <div><Home /></div>,
      },
      {
        path: "/addmovie",
        element: <div><AddMovie /></div>,
      }
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

