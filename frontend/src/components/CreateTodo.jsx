import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const buttonStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "15px 25px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "10px"
    };
    const inputStyle = {
        margin: "5px 0",
        padding: "12px 20px",
        boxSizing: "border-box",
        border: "2px solid #ccc",
        borderRadius: "4px",
        width: "50%"
    };
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    };
    return <div style={containerStyle}>
        <input style={inputStyle} type="text" placeholder="Title" onChange={function(e) {
            const value = e.target.value;
            setTitle(value);
        }}></input> <br />
        <input style={inputStyle} type="text" placeholder="Description" onChange={function(e) {
            const value = e.target.value;
            setDescription(value);
        }}></input> <br />
        <button style={buttonStyle}onClick={() => {
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