import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;


app.get('/', (req: Request, res: Response) => {
    res.send("Hello")
})

app.listen(port, () =>{
    console.log("The server is listening on port: " + port)
})