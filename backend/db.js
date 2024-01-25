import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://admin:mypassword@cluster0.mcnh5ju.mongodb.net/todo-app');

const todoSchema = new mongoose.Schema({
    title: String,
    discription: String,
    completed: Boolean
})
const Todo = mongoose.model('Todo', todoSchema);

export { Todo };