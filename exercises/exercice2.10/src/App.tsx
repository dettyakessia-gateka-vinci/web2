
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 
import { Outlet } from 'react-router-dom';

import { useNavigate } from "react-router-dom";


const NavBar = () => {

  const navigate = useNavigate();
  return (
  <nav>
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/cinema")}>Cinema</button>
    <button onClick={() => navigate("/movie")}> Movie</button>
  </nav>

  );

};



function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
