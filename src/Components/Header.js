import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
   <div className='sticky z-10 bg-black-500 top-0 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500'>
   <Link to={"/"}>
      <span>Rs<span className='text-white'>Movies</span></span>
</Link> 
      <Link to={'/addmovie'}>
      <h1 className='text-lg cursor-pointer flex items-center'>
        <button><AddIcon className='mr-1' color='secondary'/><span className=' text-white'>Add New</span></button>
      </h1></Link>
      

    </div>
    
    
    
    </>
    
    
    
  )
}

export default Header
