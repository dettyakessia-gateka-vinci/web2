import FilmItem from "../FilmItem";
import { FilmContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
   const {
    movies
   }:FilmContext=useOutletContext();

      return(
        <>
        <FilmItem films={movies}/>
        </>
      )
};

export default MovieListPage;