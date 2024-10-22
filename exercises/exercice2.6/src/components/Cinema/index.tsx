import MovieItem from"../MovieItem";
import Movie from "../type";
interface CinemaProps{
    title:string,
    movies:Movie[],
}

const Cinema =(props:CinemaProps) =>{
   return(
    <div>
        <h2>{props.title}</h2>
        {props.movies.map((movie) => <MovieItem movie={movie} />)}
        
    </div>
   )
}
export default Cinema;