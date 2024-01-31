import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() =>{
    fetch("http://localhost:3000/todos")
    .then(async function(response){
      const json = await response.json();
      console.log(json);
      setTodos(json.todos);
      console.log(todos);
    })
  }, []);
  return (
    <div>
      <CreateTodo /> 
      <Todos todos={todos}/>
    </div>
  )
}
function fetchTodos() {

}

export default App
