
import {useState} from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function AddForm(){
    const [task, setTask] =useState("");
    const dispatch= useDispatch();

    let handleTask =(event) =>{
        setTask(event.target.value);
        // console.log(task);
    }

    let submitHandler= (event) =>{
        event.preventDefault();
        dispatch(addTodo(task));

    }
    return(
        <form onSubmit={submitHandler}>
            <input type="text" onChange={handleTask} />
            <button>Add task</button>

        </form>
    )
}