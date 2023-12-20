import {Router} from "express";
import {Request, Response} from "express";
import mysql from 'mysql2/promise';

const controller = Router();
controller.get('/',getAlltasks)
controller.post('/',saveTask)
controller.patch('/:id',updateTask)
controller.delete('/:id',deleteTask)

const pool = mysql.createPool({
    database: process.env.DB_NAME,
    port: +(process.env.DB_PORT ?? 3306),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: +process.env.DB_CONNECTION_LIMIT!
});

function getAlltasks(req:Request, res: Response){
    if(!req.query.email) res.sendStatus(400);
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