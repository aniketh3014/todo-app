import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input type="text" placeholder="Title" onChange={function(e) {
            const value = e.target.value;
            setTitle(value);
        }}></input> <br />
        <input type="text" placeholder="Description" onChange={function(e) {
            const value = e.target.value;
            setDescription(value);
        }}></input> <br />
        <button onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    discription: description
                })
            })
            .then(async function(response){
                const json = await response.json();
                alert("todo adedd")
            })
        }}>Add todo</button>
    </div>
}