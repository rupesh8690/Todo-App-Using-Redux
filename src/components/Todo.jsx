import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
export default function Todo(){
    const todos= useSelector((state) => state.todos.todos)
    console.log(todos);
    const dispatch= useDispatch();
    const clickHandler= (id) =>{
        dispatch(deleteTodo(id));
    }

    const markDone=(id) =>{
        dispatch(markAsDone(id));
        
    }
    return(
        <>
        <AddForm/>
          <h3>Todos</h3>
          <ul>
            {todos.map((todo) => (
                 <li key={todo.id} style={{textDecoration: todo.isDone? 'line-through': 'none'}}>{todo.task}
                <button onClick={()=> clickHandler(todo.id)}>Delete</button>
                <button  onClick={()=> markDone(todo.id)}>Done</button>
            </li>))}
          </ul>
        </>
    )
}