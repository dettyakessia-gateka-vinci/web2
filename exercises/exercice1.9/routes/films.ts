import { Router } from "express";
import { NewFilm } from "../types";

import {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updateOneFilm,
  updateOrCreateOneFilm,
} from "../services/films";



const router = Router();

router.get("/", (req, res) => {

  const minDuration = Number(req.query["minimum-duration"]);
  const films = readAllFilms(minDuration);

  return res.json(films);


});




router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const film = readOneFilm(id);
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

  const newFilm = createOneFilm({ title, director, duration });

  if (!newFilm) {
    return res.sendStatus(409);
  }

  return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deletedFilm=deleteOneFilm(id);
  if(!deletedFilm){
    return res.sendStatus(400);
  }
  return res.json(deletedFilm);


});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
 
  const body: unknown = req.body;
  if (!body ||
    typeof body !== "object" ||
    ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0))) {
    return res.sendStatus(400);
  }
  const { title, director, duration }: Partial<NewFilm> = body;
  
  const updatedFilm=updateOneFilm(id,{title,director,duration});
  if(!updatedFilm){
    return res.sendStatus(404);;
  }

  return res.json(updatedFilm);

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
  

  const { title, director, duration } = body as NewFilm;

  const newfilm=updateOrCreateOneFilm(idReq,{title,director,duration});
    return res.json(newfilm);
  




});
export default router;