import { Router } from "express";
import {watchTask, createTask, updateTask, deleteTask, watchTaskForId} from '../controller/index.controller.js';

const router = Router();

router.get('/watch', watchTask);
router.get('/watch/:id', watchTaskForId);
router.post('/create', createTask);
router.patch('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

export default router