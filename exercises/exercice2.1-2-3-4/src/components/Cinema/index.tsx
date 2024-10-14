import Movie from "../type";
interface CinemaProps{
    title:string,
    movies:Movie[],
}

const Cinema =(props:CinemaProps) =>{
   return(
    <div>
        <h2>{props.title}</h2>
        <ul>
            {props.movies.map((movie) =>(
              <li key={movie.title}>
                <strong>{movie.title}</strong>-Réalisateur:{" "}
                {movie.director}
              </li>
           ))}
        </ul>
    </div>
   )
}
export default Cinema;