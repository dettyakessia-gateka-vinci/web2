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
  const filteredFilms = films.filter((film) => {
    return film.duration >= minDuration;
  });
  return res.json(filteredFilms);
});




router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
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
  films.push(newFilm);
  return res.json(newFilm);
});
export default router;