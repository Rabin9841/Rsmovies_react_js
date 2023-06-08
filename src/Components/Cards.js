import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import ReactStars from 'react-stars'
import { moviesRef } from './firebase/Firebase';
import {Link} from 'react-router-dom';


const Cards = () => {
  const[data,setdata]= useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    async function getData(){
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc)=>{
        setdata((prev)=> [...prev,{...(doc.data()),id:doc.id}])
      })
      setLoading(false);


    }
    getData();
  },[])
  return (
    <div className='flex flex-wrap justify-between  px-3 mt-4'>
      {
        loading ? <div className='w-full  flex justify-center item items-center h-96 '><ThreeDots/> </div>:
        data.map((e,i)=>{
          return(
            <Link to={`/detail/${e.id}`}> <div key={i} className='card bg-gray-900 font-medium shadow-lg p-2 m-1 hover:translate-y-3 cursor-pointer mt-6 transition-all duration-500' >
        <img className='h-60 md:h-72' src={e.image}></img>
        <h1><span className='text-gray-500'>Title : </span>{e.title}</h1>
        <h1 className='flex items-center'><span className='text-gray-500 mr-1'>IMBD Ratings : </span><ReactStars
        size={20}
        half={true}
        value={e.rating}
        edit={false}
        /></h1>
        <h1><span className='text-gray-500'>Year : </span>{e.year}</h1>
        
        </div>
         </Link>
        

          );
        })
        
        
        

      }
      
        
       
      
    </div>
   
  )
}

export default Cards
