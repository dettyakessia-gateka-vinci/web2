import { Film } from '../../types';



interface FilmProps {
    films: Film[];
}

const FilmItem = ({ films }: FilmProps) => {
  
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
                </div>
            ))}
        
        </>
    );


}
export default FilmItem;