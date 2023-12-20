"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskHttpController = void 0;
const express_1 = require("express");
const promise_1 = __importDefault(require("mysql2/promise"));
const controller = (0, express_1.Router)();
exports.TaskHttpController = controller;
controller.get('/', getAlltasks);
controller.post('/', saveTask);
controller.patch('/:id', updateTask);
controller.delete('/:id', deleteTask);
const pool = promise_1.default.createPool({
    database: process.env.DB_NAME,
    port: +(process.env.DB_PORT ?? 3306),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: +process.env.DB_CONNECTION_LIMIT
});
async function getAlltasks(req, res) {
    if (!req.query.email)
        res.sendStatus(400);
    const connection = await pool.getConnection();
    const [taskList] = await connection.execute('SELECT * FROM task WHERE email = ?', [req.query.email]);
    res.json(taskList);
    pool.releaseConnection(connection);
}
async function saveTask(req, res) {
    const task = req.body;
    const connection = await pool.getConnection();
    const [{ insertId }] = await connection.execute('INSERT INTO task (description, status, email) TABLE (?,false,?)', [task.description, task.email]);
    task.id = insertId;
    task.status = false;
    res.status(201).json(task);
}
function updateTask(req, res) {
    res.send('<h1>Customer controller: PATCH</h1>');
}
function deleteTask(req, res) {
    res.send('<h1>Customer controller: DELETE</h1>');
}
//# sourceMappingURL=task.http.controller.js.map