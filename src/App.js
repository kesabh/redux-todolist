import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAllTodos } from "./actions";


function App() {
  
  const [todoText, setTodoText] = useState("") ; 

  const myTodoList = useSelector( (state) =>  state.todoListReducer.todoList  ) 
  const dispatch = useDispatch() ; 

  return (
    <div className="App">
      <input type="text"  placeholder="enter item " value={todoText}  onChange={(e)=>{setTodoText(e.target.value)}} />
      <button onClick={ ()=>{ dispatch( addTodo(todoText) ) } }> Add item </button>

      <div className="todo-list">
        {
          myTodoList.map( (todoItem) => {
            return <div className="todo-item">
                { todoItem.data }
                <button onClick={ () => {dispatch( deleteTodo(todoItem.id) )} }>   Delete  </button>
            </div>
          } )
        }
      </div>

      <button onClick = { ()=> { dispatch( removeAllTodos() ) } }>Remove All</button>

    </div>  
  );
}

export default App;
