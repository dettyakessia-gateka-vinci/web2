import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import filmRouter from "./routes/films";
import textRouter from "./routes/texts";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let counter = 0;
app.use((req, _res, next) => {
   
    next();
    if (req.method === "GET") {
        counter++;
    }
    console.log("Get counter :" + counter);


});

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/films", filmRouter);
app.use("/texts", textRouter);





export default app;
