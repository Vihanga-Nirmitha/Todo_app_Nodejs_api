import express, {json} from 'express';
import cors from 'cors';
import {TaskHttpController} from "./controller/task.http.controller";
const app = express();
app.use(json());
app.use(cors())
app.use((req,res,next)=>{

})
app.use('/api/v1/tasks',TaskHttpController);
app.listen(8080,() => console.log("Server is listening to 8080"));
