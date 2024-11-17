import { useState } from "react";
import {Film} from "../../types";
import AddMovieForm from "../AddMovieForm";
import FilmItem from "../FilmItem";
import PageTitle from "../PageTitle";

const MovieListPage = () => {
    const defaultFilm :Film[]= [
        {
          title: "Inception",
          director: "Christopher Nolan",
          duration: 148,
          link: "https://www.imdb.com/title/tt1375666/",
          description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
          budget: 160000000
        },
        {
          title: "The Godfather",
          director: "Francis Ford Coppola",
          duration: 175,
      
        },
        {
          title: "The Lord of the Rings: The Return of the King",
          director: "Peter Jackson",
          duration: 201,
          link: "https://www.imdb.com/title/tt0167260/",
      
        },
        {
          title: "The Matrix",
          director: "Lana Wachowski, Lilly Wachowski",
          duration: 136,
          link: "https://www.imdb.com/title/tt0133093/",
          description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      
        },
        {
          title: "The Shawshank Redemption",
          director: "Frank Darabont",
          duration: 142,
          link: "https://www.imdb.com/title/tt0111161/",
          description: "Two imprisoned"
        }
      ]

      const [movies, setMovies]=useState(defaultFilm);
      
      const addingMovie=(newFilm:Film)=>{
        console.log("Movie to add:", newFilm);
        setMovies([...movies, newFilm]);
      }
      return(
        <>
        <PageTitle title="My favorite movies"/>
        <FilmItem films={defaultFilm}/>
        <AddMovieForm  addMovie={addingMovie}/>
        </>
      )
};

export default MovieListPage;