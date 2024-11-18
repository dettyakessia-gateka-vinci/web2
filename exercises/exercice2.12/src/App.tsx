
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 
import { Outlet } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
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

const defaultFilm :Film[]= [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    link: "https://www.imdb.com/title/tt1375666/",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    budget: 160000000
  },
  {
    id: 2,  
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,

  },
  {
    id: 3,
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    duration: 201,
    link: "https://www.imdb.com/title/tt0167260/",

  },
  {
    id: 4,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    link: "https://www.imdb.com/title/tt0133093/",
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",

  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    duration: 142,
    link: "https://www.imdb.com/title/tt0111161/",
    description: "Two imprisoned"
  }
]


function App() {


  const [movies, setMovies]=useState(defaultFilm);
  
  const addingMovie=(newFilm:NewFilm)=>{
    const filmAdded={...newFilm,id:nextFilmId(movies)};
    

    setMovies([...movies,filmAdded]); 
  }

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
const nextFilmId=(movies:Film[])=>{
  const ids=movies.map((film)=>film.id);
  return Math.max(...ids)+1;
}

export default App
