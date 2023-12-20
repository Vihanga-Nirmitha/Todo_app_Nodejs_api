import {Router} from "express";
import {Request, Response} from "express";
import mysql, {ResultSetHeader} from 'mysql2/promise';
import {TaskTo} from "../to/task.to";

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

async function getAlltasks(req:Request, res: Response){
    if(!req.query.email) res.sendStatus(400);
    const connection = await pool.getConnection()
    const [taskList] = await connection.execute('SELECT * FROM task WHERE email = ?',[req.query.email]);
    res.json(taskList);
    pool.releaseConnection(connection);
}
async function saveTask(req:Request, res: Response){
    const task = <TaskTo>req.body;
    const connection = await pool.getConnection();
    const [{insertId}] = await connection.execute<ResultSetHeader>('INSERT INTO task (description, status, email) TABLE (?,false,?)',[task.description,task.email]);
    task.id = insertId;
    task.status = false;
    res.status(201).json(task);

}

function updateTask(req:Request, res: Response){
    res.send('<h1>Customer controller: PATCH</h1>')
}
function deleteTask(req:Request, res: Response){
    res.send('<h1>Customer controller: DELETE</h1>')
}



export {controller as TaskHttpController};