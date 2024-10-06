import path from "node:path";
import{Film,NewFilm} from "../types";
import { parse,serialize} from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/drinks.json");

const defaultfilms: Film[] = [
    {
      id: 1,
      title: "Les anges",
      director: "John",
      duration: 60,
  
    },
    {
      id: 2,
      title: "les rois",
      director: "Caleb",
      duration: 75,
      budget: 3,
      description: "la reconciliation entre deux pays",
  
    }
  
  ];

  function readAllFilms(minimumduration:number): Film[]{
    const films = parse(jsonDbPath, defaultfilms);
    if(!minimumduration){
        return films;
    }
    const minDuration = Number(minimumduration);
    const filteredFilms = films.filter((film) => {
        return film.duration >= minDuration;
    });
    return filteredFilms;

  }

  function readOneFilm(id:number): Film | undefined{
    const films = parse(jsonDbPath, defaultfilms);
    const film = films.find((film) => film.id === id);
    if (!film) {
      return undefined;
    }
    return film;
  }

  function createOneFilm(newFilm:NewFilm): Film |undefined{
    const films = parse(jsonDbPath, defaultfilms);
    
    const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;
    
    const createdFilm ={
        id:nextId,
        ...newFilm,
    }
    
    if (films.find((film) => film.title === newFilm.title && film.director === newFilm.director)) {
        return undefined;
    
      }

    films.push(createdFilm);
    serialize(jsonDbPath,films);

    return createdFilm;

  }

  function deleteOneFilm(filmId:number):Film |undefined{
    const films = parse(jsonDbPath, defaultfilms);
    
    const index = films.findIndex((film) => film.id === filmId);
    if(index ===-1){
        return undefined;
    }

    const deletedFilms = films.splice(index, 1);
    serialize(jsonDbPath,films);
    return deletedFilms[0];

  }

  function updateOneFilm(filmId:number,newFilm:Partial<NewFilm>):Film | undefined{
    const films = parse(jsonDbPath, defaultfilms);
    
    const film = films.find((film) => film.id === filmId);
    if(!film){
        return undefined;
    }
    if(newFilm.title !=  undefined){
        film.title=newFilm.title;
    }
    if(newFilm.director != undefined){
        film.director=newFilm.director;
    }
    if(newFilm.duration != undefined){
       film.duration=newFilm.duration;
    }

    serialize(jsonDbPath,films);
    return film;

  
  }
   function updateOrCreateOneFilm(id:number,newFilm:NewFilm){
    const films = parse(jsonDbPath, defaultfilms);
     
    const film = films.find((film) => film.id === id);
    if(film){
        updateOneFilm(id,newFilm);
    }else{
        createOneFilm(newFilm);
    }
     
    

   }

   export{
    readAllFilms,
    readOneFilm,
    createOneFilm,
    deleteOneFilm,
    updateOneFilm,
    updateOrCreateOneFilm,

   };


