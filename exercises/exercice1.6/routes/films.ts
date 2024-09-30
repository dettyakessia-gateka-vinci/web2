import { Router } from "express";

import { Film } from "../types";
import { NewFilm } from "../types";


const router = Router();
const films: Film[] = [
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

router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    return res.json(films);
  }
  const minDuration = Number(req.query["minimum-duration"]);


  if (isNaN(minDuration)) {
    console.log("minduration is not a number");
    return res.sendStatus(400);
  }
  console.log("minduration is a number");
  const filteredFilms = films.filter((film) => {
    return film.duration >= minDuration;
  });

  if (filteredFilms.length === 0) {
    return res.sendStatus(404);

  }
  return res.json(filteredFilms);
});




router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    console.log("id is not a  number");
    res.sendStatus(400);
  }
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(400);
  }
  return res.json(film);
});


router.post("/", (req, res) => {

  const body: unknown = req.body;
  if (!body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    body.duration < 0 || body.duration < 0
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration } = body as NewFilm;

  const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration
  };

  if (films.find((film) => film.title === title) && films.find((film) => film.director === director)) {
    return res.sendStatus(409);

  }
  films.push(newFilm);
  return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    console.log("film not found");
    return res.sendStatus(404);
  }
  const deletedFilms = films.splice(index, 1);
  return res.json(deletedFilms[0]);


});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  const body: unknown = req.body;
  if (!body ||
    typeof body !== "object" ||
    ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0))) {
    return res.sendStatus(400);
  }
  const { title, director, duration }: Partial<NewFilm> = body;
  if (title) {
    film.title = title;
  }
  if (director) {
    film.director = director;
  }
  if (duration) {
    film.duration = duration;
  }
  return res.json(film);

});

router.put("/:id", (req, res) => {
  const idReq = Number(req.params.id);
  const body: unknown = req.body;

  if (!body ||
    typeof body != "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" || !body.title.trim() ||
    typeof body.director !== "string" || !body.director.trim() ||
    typeof body.duration != 'number' || body.duration <= 0
  ) {
    return res.sendStatus(400);
  }
  const film = films.find((film) => film.id === idReq);

  const { title, director, duration } = body as NewFilm;

  if (film) {
    film.title = title;
    film.director = director;
    film.duration = duration;
    return res.json(film);
  } else {

    const newfilm: Film = {
      id: idReq,
      title,
      director,
      duration
    }
    if(films.find((film) =>film.title === title)&&films.find((film)=>film.director===director)){
      return res.sendStatus(409);
    }
    films.push(newfilm);
    return res.json(newfilm);
  }




});
export default router;