import MovieItem from"../MovieItem";
import Movie from "../type";
interface CinemaProps{
    title:string,
    movies:Movie[],
}

const Cinema =({title,movies}:CinemaProps) =>{
   return(
    <div>
        <h2>{title}</h2>
        {movies.map((movie) => <MovieItem movie={movie} />)}
        
    </div>
   )
}
export default Cinema;