import FilmItem from "../FilmItem";
import PageTitle from "../PageTitle";
import { FilmContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
   const {
    movies
   }:FilmContext=useOutletContext();

      return(
        <>
        <PageTitle title="My favorite movies"/>
        <FilmItem films={movies}/>
        </>
      )
};

export default MovieListPage;