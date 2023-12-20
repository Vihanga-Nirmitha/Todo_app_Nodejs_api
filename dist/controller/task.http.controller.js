"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskHttpController = void 0;
const express_1 = require("express");
const controller = (0, express_1.Router)();
exports.TaskHttpController = controller;
controller.get('/', getAlltasks);
controller.post('/', saveTask);
controller.patch('/:id', updateTask);
controller.delete('/:id', deleteTask);
function getAlltasks(req, res) {
    if (!req.query.email)
        res.sendStatus(400);
    res.send('<h1>Customer controller: GET</h1>');
}
function saveTask(req, res) {
    res.send('<h1>Customer controller: POST</h1>');
}
function updateTask(req, res) {
    res.send('<h1>Customer controller: PATCH</h1>');
}
function deleteTask(req, res) {
    res.send('<h1>Customer controller: DELETE</h1>');
}
//# sourceMappingURL=task.http.controller.js.map