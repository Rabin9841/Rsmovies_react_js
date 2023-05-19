import React, { useState } from "react";
import  { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { moviesRef } from "./firebase/Firebase";
import swal from "sweetalert";


const AddMovie = () => {
    const [form,setForm]= useState({
        title:"",
        year:"",
        description:"",
        image:""


    });
    const [loading ,setLoading]= useState(false);
    const addMovie = async()=>{
      setLoading(true);
      await addDoc(moviesRef, form);
      swal({
        title: "Sucessfully Added",
        icon: "success",
        buttons: false,
        timer: 3000
      })
     setLoading(false);

    }

  return (
  
    <div className="">
      <section class="text-white body-font relative">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Add New Movie
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-300">
                   Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={(e)=> setForm({...form, title:e.target.value})}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="Text" class="leading-7 text-sm text-gray-300">
                    Year
                  </label>
                  <input
                    type="Text"
                    id="Year"
                    name="Year"
                    value={form.year}
                    onChange={(e)=> setForm({...form, year:e.target.value})}
                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="Text" class="leading-7 text-sm text-gray-300">
                    Image Link
                  </label>
                  <input
                    type="Text"
                    id="Imagelink"
                    name="Imagelink"
                    value={form.image}
                    onChange={(e)=> setForm({...form, image:e.target.value})}
                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.description}
                    onChange={(e)=> setForm({...form, description:e.target.value})}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              
              <div class="p-2 w-full">
                <button onClick={addMovie} class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg">
                  {loading ?<TailSpin height={25} color="white"/>: 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;
