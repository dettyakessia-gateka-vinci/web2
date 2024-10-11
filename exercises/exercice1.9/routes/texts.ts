import { Router } from "express";
import { Level, NewText } from "../types";

import {
        readAllTexts,
        readOneText,
        createOneText,
        deleteOneText,
        updateOneText,
        
      }from "../services/texts";


const router = Router();

router.get("/", (req, res) => {

    const level=String(req.query["level"]);

    if(level !=="undefined" && !Object.values(Level).includes(level as Level)){
        return res.sendStatus(400);
    }
     const texts=readAllTexts(level as Level);
    return res.json(texts);

});    


router.get("/:id", (req, res) => {
    const id=String(req.params.id);
  const text=readOneText(id);
   
  if(!text)return res.sendStatus(404);
  return res.json(text);

});   

router.post("/", (req, res) => {
   const body:unknown=req.body;

   if(!body ||
       typeof  body !== "object" ||
       !("content" in body) ||
       !("level" in body) ||
       typeof body.content !=="string" || ! body.content.trim() ||
        !Object.values(Level).includes(body.level as Level)

   ){
     return res.sendStatus(400);
   }
    const {content,level}=body as NewText;
    const newText=createOneText({content,level});   
    return res.json(newText);
    
    

});

router.delete("/:id", (req, res) => {
    const textDeleted=deleteOneText(req.params.id);
    if(!textDeleted)return res.sendStatus(404);
    return res.json(textDeleted);
});

router.put("/:id", (req, res) => {
    const body:unknown=req.body;
    if(!body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !=="string" || ! body.content.trim() ||
         !Object.values(Level).includes(body.level as Level)
 
    ){
      return res.sendStatus(400);
    }
     const newText=updateOneText(req.params.id,body as NewText);
     if(!newText)return res.sendStatus(404);
     return res.json(newText);
 
 });















export default router;