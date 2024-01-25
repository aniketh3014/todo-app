import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([
  // const data = await fetch("http://localhost:3000/todos");
  // const json = await data.json();
  // setTodos(json.todos);
  fetch("http://localhost:3000/todos")
    .then(async function(response){
      const json = await response.json();
      console.log(json);
      setTodos(json.todos);
    })])
  return (
    <div>
      <CreateTodo /> 
      <Todos todos={todos}/>
    </div>
  )
}

export default App
