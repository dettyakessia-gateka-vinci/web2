import { SyntheticEvent, useState } from 'react'

import './App.css';
import FilmItem from './components/FilmItem';

const defaultFilm = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    link: "https://www.imdb.com/title/tt1375666/",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    budget: 160000000
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,

  },
  {
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    duration: 201,
    link: "https://www.imdb.com/title/tt0167260/",

  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    link: "https://www.imdb.com/title/tt0133093/",
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",

  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    duration: 142,
    link: "https://www.imdb.com/title/tt0111161/",
    description: "Two imprisoned"
  }
]

function App() {
  const [films, setFilm] = useState(defaultFilm);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(title, director, duration);
    const newFilm={
      title:title,
      director:director,
      duration:duration,
      link: link ?? undefined,
      description: description ?? undefined
      
    }
    setFilm([...films,newFilm]);
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
      <FilmItem films={films} />
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
  )
}

export default App
