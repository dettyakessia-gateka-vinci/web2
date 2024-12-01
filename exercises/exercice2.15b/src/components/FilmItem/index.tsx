import { useOutletContext } from 'react-router-dom';
import { Film, FilmContext } from '../../types';



interface FilmProps {
    films: Film[];
}

const FilmItem = ({ films }: FilmProps) => {
    const{
        deleteMovie
    }:FilmContext=useOutletContext();
  
    return (
        <>
            {films.map((film) => (
                <div key={film.title}>
                    <h4>{film.title}</h4>
                    <p>Director:{film.director}</p>
                    <p>Duration:{film.duration}</p>
                    {film.link ? <a href={film.link}>LinkImage</a> : null}
                    {film.description ? <p>Description:{film.description}</p> : null}
                    {film.budget ? <p>Budget:{film.budget}</p> : null}
                    <button onClick={() => deleteMovie(film.id)}>Delete</button>
                </div>
            ))}
        
        </>
    );


}
export default FilmItem;