import { useMatch, useOutletContext } from "react-router-dom";
import { FilmContext } from "../../types";

const MoviePage =()=>{
    const {
        movies
    }: FilmContext = useOutletContext();
    const match=useMatch("/movie/:movieId");
    const movieId=match?.params.movieId;
    if(!movies)return <p>Film not found</p>
    const film=movies.find((film)=>film.id.toString() === movieId);
    if(!film)return <p>Film not found</p>
    return(
        <>
        <h2>{film.title}</h2>
        <p>Id:{film.id}</p>
        <p>Title:{film.title}</p>
        <p>Duration:{film.duration}</p>
        <p>Director:{film.director}</p>
        {film.budget ? <p>Budget:{film.budget}</p> : null}
        {film.description ? <p>Description:{film.description}</p>:null}


        </>
    )
}
export default MoviePage;