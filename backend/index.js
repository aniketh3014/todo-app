import express from 'express';
import { createTodo, updateTodo } from './types.js';
import { Todo } from './db.js';

const app = express();
const PORT = 3000;
app.use(express.json());



app.post("/todo", async (req, res) => {
    const bodyPayload = req.body;
    const validBody = createTodo.safeParse(bodyPayload);
    if(!validBody.success) {
        res.status(400).json({
            messege: "You sent the wrong inputs"
        });
        return;
    }
    try{
        await Todo.create({
            title: bodyPayload.title,
            description: bodyPayload.description,
            completed: false
        })
        res.json({
            messege: "todo created"
        })
    } catch{
        res.status(500).json({
            messege: "Some thing went wrong while creating the todo"
        })
    }
    
})
app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json({
        todos
    })
})
app.put("/completed", async (req, res) => {
    const bodyPayload = req.body;
    const validBody = updateTodo.safeParse(bodyPayload);
    if(!validBody.success) {
        res.status(400).json({
            messege: "You sent the wrong inputs"
        });
        return;
    }
    await Todo.update({_id: bodyPayload.id}, {completed: true});
    res.json({
        messege: "Todo updated"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})