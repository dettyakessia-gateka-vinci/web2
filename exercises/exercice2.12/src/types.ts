interface Film{
    id:number;
    title:string;
    director:string;
    duration:number;
    link?:string;
    description?:string;
    budget?:number;
}

interface FilmContext{
    movies:Film[],
    addingMovie:(newFilm:NewFilm)=>void
}

type NewFilm=Omit<Film,"id">;

export  type {Film,FilmContext,NewFilm};