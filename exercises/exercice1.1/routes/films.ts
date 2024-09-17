import { Router } from "express";

 import { Film } from "../types";

const router = Router();
const films : Film []=[
    {
        id:1,
        title:"Les anges",
        director:"John",
        duration:60,
        
      },
      {
        id:2,
        title:"les rois",
        director:"Caleb",
        duration:75,
        budget:3,
        description:"la reconciliation entre deux pays",
       
      }

];

router.get("/", (_req, res) => {
    return res.json(films);
});

export default router;