import express from 'express';
import { createTodos, deleteTodo, readTodos, updateTodo } from '../controller/todos.js';

const router = express.Router();

router.get('/getTodos', readTodos);

router.post('/createTodo', createTodos);

router.patch('/updateTodo/:id', updateTodo);

router.delete('/deleteTodo/:id', deleteTodo);

export default router;