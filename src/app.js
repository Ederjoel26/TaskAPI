import express from "express";
import tasksRoutes from "./routes/tasks.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(tasksRoutes);

export default app;