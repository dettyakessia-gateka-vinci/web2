interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Film{
  id:number;
  title:string;
  director:string;
  duration:number;
  budget?:number;
  description?:string;
  imageUrl?:string;
}
type NewFilm=Omit<Film, "id">;

  enum Level{
  easy="easy",
  medium="medium",
  hard="hard"
}


interface Text{
  id:string;
  content:string;
  level:Level
}
 
type NewText=Omit<Text,"id">;

export  { Pizza, NewPizza, PizzaToUpdate,Film,NewFilm,Text,NewText,Level };
