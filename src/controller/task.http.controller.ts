import {Router} from "express";
import {Request, Response} from "express";

const controller = Router();
controller.get('/',getAlltasks)
controller.post('/',saveTask)
controller.patch('/:id',updateTask)
controller.delete('/:id',deleteTask)

function getAlltasks(req:Request, res: Response){
    res.send('<h1>Customer controller: GET</h1>')
}
function saveTask(req:Request, res: Response){
    res.send('<h1>Customer controller: POST</h1>')
}

function updateTask(req:Request, res: Response){
    res.send('<h1>Customer controller: PATCH</h1>')
}
function deleteTask(req:Request, res: Response){
    res.send('<h1>Customer controller: DELETE</h1>')
}



export {controller as TaskHttpController};