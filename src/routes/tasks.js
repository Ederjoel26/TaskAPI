import { Router } from "express";
import { getTasks, getTasksCount, getTask, createTask, updateTask, deleteTask } from "../controllers/tasks.js";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/count", getTasksCount);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;