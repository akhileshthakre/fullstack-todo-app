import axios from 'axios'
import React,{useState,useEffect} from 'react'
import EditTodo from './EditTodo'

const ListTodos = () => {
    const [todos,setTodos] = useState([])
    const getTodos = async () => {
        try {
            await axios.get('http://localhost:5000/todos').then((response) => {
                setTodos(response.data);
              });
            // const jsonData = await respose.json()
            // setTodos(jsonData)
        } catch (err) {
            console.log(err.message)
        }
    }

    //Delete Todo
    const deleteTodo = async (todoId) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${todoId}`)
            .then(() => {
              alert("Post deleted!");
              setTodos(todos.filter(todo => todo.todo_id !== todoId))
            });
            
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTodos()
    },[])
    // console.log(todos)
    return (
    <>
        <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td><EditTodo todo = {todo}/></td>
                    <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
    )
}

export default ListTodos
