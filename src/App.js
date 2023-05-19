import './index.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import { Route,Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App relative">
      <Header />
      <Outlet/>
      


    </div>
  );
}

export default App;
