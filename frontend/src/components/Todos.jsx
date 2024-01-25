export function Todos({todos}){

    const todoStyle = {
        border: "1px solid #ddd",
        padding: "8px",
        margin: "8px 0",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        width: "50%"
    };
    const buttonStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "15px 25px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "15px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "10px"
    };
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    };

    return <div style={containerStyle}>
        {todos.map(function (todo) {
            return <div style={todoStyle}>
                <h2>{todo.title}</h2>
                <h3> {todo.discription} </h3>
                <button style={buttonStyle}> {todo.completed == true ? "Done" : "Mark as done"} </button>
            </div>
        })}
    </div>
}