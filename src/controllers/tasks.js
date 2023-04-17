import { connect } from "../database.js";

export const getTasks = async (req, res) => {
    const connection = await connect();
    const [ rows ] = await connection.query("SELECT * FROM tasks");
    res.json(rows);
};

export const getTask = async (req, res) => {
    const { id } = req.params;
    const connection = await connect();
    const [ rows ] = await connection.query("SELECT * FROM tasks WHERE id = ?", [ id ]);
    res.json(rows);
};

export const getTasksCount = async (req, res) => {
    const connection = await connect();
    const [ rows ] = await connection.query("SELECT COUNT(*) FROM tasks");
    res.json(rows[0]["COUNT(*)"]);
};

export const createTask = async (req, res) => {
    const { title, description } = req.body;
    const connection = await connect();
    const [ rows ] = await connection.query("INSERT INTO tasks (title, description) VALUES (?, ?)", [ title, description ]);
    res.json(rows);
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    const connection = await connect();
    const [ rows ] = await connection.query("DELETE FROM tasks WHERE id = ?", [ id ]);
    res.json(rows);
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const connection = await connect();
    const [ rows ] = await connection.query("UPDATE tasks SET title = ?, description = ? WHERE id = ?", [ title, description, id ]);
    res.json(rows);
};