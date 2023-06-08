import './index.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import { createContext,useEffect, useState } from 'react';



const Appstate = createContext();
function App() {

  const [login, setLogin]= useState(false);
  const [userName,setUserName]=useState("");
  return (
    <Appstate.Provider value ={{login,userName,setLogin,setUserName, }}>

    <div className="App relative">
      <Header />
      <Outlet/>
      


    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
