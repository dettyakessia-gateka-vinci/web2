
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 
import { Outlet } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Film, FilmContext, NewFilm } from './types';


const NavBar = () => {

  const navigate = useNavigate();
  return (
  <nav>
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/cinema")}>Cinema</button>
    <button onClick={() => navigate("/movie")}> Movie</button>
    <button onClick={() => navigate("/addMovie")}>Add Movie</button>
  </nav>

  );

};




function App() {


  const [movies, setMovies] = useState<Film[]>([]);
  const navigate = useNavigate();

  async function getAllMovies(){
    try{
      const response=await fetch("/api/films");
      if(!response.ok)
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      const movies=await response.json();
      return movies;
    }catch(err){
      console.error("getAllMovies::error: ",err);
      throw err;
    }
  }
  
  const fetchMovies=async()=>{
    try{
      const movies=await getAllMovies();
      setMovies(movies);
    }catch(err){
      console.error("fetchMovies::error: ",err);
    }
  }

  useEffect(()=>{
    fetchMovies();
  },[]);
  
  
  const addingMovie= async(newFilm:NewFilm)=>{
    try{
      const options={
        method:"POST",
        body:JSON.stringify(newFilm),
        headers:{
          "Content-Type":"application/json",
        },
      };

      const response=await fetch("/api/films",options);
      if(!response.ok)
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

      const createdMovie=await response.json();
      console.log("createdMovie",createdMovie);
      await fetchMovies();
      navigate("/movie");
    }catch(err){
      console.error("addingMovie::error :",err);
  }
};

  const fullFilmContext: FilmContext = {
    movies,
    addingMovie
  }
  return (
    <>
      <Header />
      <NavBar />
      <Outlet context={fullFilmContext}/>
      <Footer/>
    </>
  )
}


export default App
