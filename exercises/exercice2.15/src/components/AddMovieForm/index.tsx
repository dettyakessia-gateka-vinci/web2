import { SyntheticEvent, useState } from "react";
import {  NewFilm } from "../../types";
import { useNavigate } from "react-router-dom";

interface AddMovieFormProps {
    addMovie:(newFilm:NewFilm)=>void;
}

const AddMovieForm=({addMovie}:AddMovieFormProps)=>{
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState(0);
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");

    const navigate=useNavigate();
  
    const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      console.log(title, director, duration);
      addMovie({title,director,duration,link,description});
      navigate("/movie");
    }
  
    const handleTitleChange = (e: SyntheticEvent) => {
      const titleInput = e.target as HTMLInputElement;
      setTitle(titleInput.value);
    }
    const handleDirectorChange = (e: SyntheticEvent) => {
      const directorInput = e.target as HTMLInputElement;
      setDirector(directorInput.value);
    }
    const handleDurationChange = (e: SyntheticEvent) => {
      const durationInput = e.target as HTMLInputElement;
      setDuration(Number(durationInput.value));
  
    }
  
    
    const handleLinkChange = (e: SyntheticEvent) => {
      const linkInput = e.target as HTMLInputElement;
      setLink(linkInput.value);
    }
    const handleDescriptionChange = (e: SyntheticEvent) => {
      const descriptionInput = e.target as HTMLInputElement;
      setDescription(descriptionInput.value);
    }
      return (
          <>
              <div>
              <p>Ajouter un film via le formulaire</p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                  required
                  value={title}
                  type="text"
                  name="title"
                  onChange={handleTitleChange}
                />
                <br />
                <label htmlFor="director">Director:</label>
                <input
                  required
                  value={director}
                  type="text"
                  name="director"
                  onChange={handleDirectorChange}
                />
                <br />
                <label htmlFor="duration">Duration:</label>
                <input
                  required
                  value={duration}
                  type="number"
                  name="duration"
                  onChange={handleDurationChange}
                />
                <br />
                <label htmlFor="link">Link:</label>
                <input
                  value={link}
                  type="text"
                  name="link"
                  onChange={handleLinkChange}
                />
                <br />
                <label htmlFor="description">Description:</label>
                <input
                  value={description}
                  type="text"
                  name="description"
                  onChange={handleDescriptionChange}
                />
                <br />
                <button type="submit">Ajouter</button>
      
              </form>
            </div>    
          </>
      );
  
  

}
export default AddMovieForm;