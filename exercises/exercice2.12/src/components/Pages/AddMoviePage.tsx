import { useOutletContext } from "react-router-dom";
import { FilmContext } from "../../types";
import AddMovieForm from "../AddMovieForm";

const AddMoviePage = () => {
    const{
        addingMovie
    }:FilmContext=useOutletContext();
    
    return(
        <>
           <AddMovieForm  addMovie={addingMovie}/>

        </>
    );
}
export default AddMoviePage;