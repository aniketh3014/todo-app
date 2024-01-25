import express from 'express';
import zod from 'zod';


const app = express();
const PORT = 3000;
app.use(express.json());



app.post("/todo", (req, res) => {
    const title = req.body.title;
    const discription = req.body.discription;
    const realTitle = validTitle.safeParse(title);
    const realDiscription = validDiscription.safeParse(discription);
})
app.get("/todos", (req, res) => {

})
app.put("/completed", (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})