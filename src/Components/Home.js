import React from 'react'
import { Outlet } from 'react-router-dom';
import Cards from './Cards';
import Header from './Header';

const Home = () => {
  return (
    <div>
       <Cards />
    </div>
  )
}

export default Home;
