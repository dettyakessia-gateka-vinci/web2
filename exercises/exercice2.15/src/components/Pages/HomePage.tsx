import { useOutletContext } from "react-router-dom";
import PageTitle from "../PageTitle";
import { FilmContext } from "../../types";

const HomePage = () => {
  const{
    movies
  }:FilmContext=useOutletContext();
    return (
      <div>
       
        <p>Welcome to myMovies, a site where you can find info about cinemas, movies..</p>
        <PageTitle titles= {movies}/>
      </div>
    );
  };
  export default HomePage;