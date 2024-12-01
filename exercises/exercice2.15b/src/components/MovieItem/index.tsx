import  {Film} from "../../types"
import {useState} from "react"
interface MovieProps{
    movie:Film;
}

function MovieItem({ movie }: MovieProps) {
   const[clickTilte,setclickTitle]=useState(false);
    return (
        <li key={movie.title}>
            <strong onClick={()=>setclickTitle(!clickTilte)} >{movie.title}</strong>-Réalisateur:{" "}
            {movie.director}
            {clickTilte? <p>{movie.description}</p>:null}
        </li>
    );

}
export default MovieItem;
