import React,{useState,useEffect} from 'react'
import EditTodo from './EditTodo'

const ListTodos = () => {
    const [todos,setTodos] = useState([])
    const getTodos = async () => {
        try {
            const respose = await fetch("http://localhost:5000/todos")
            const jsonData = await respose.json()
            setTodos(jsonData)
        } catch (err) {
            console.log(err.message)
        }
    }

    //Delete Todo
    const deleteTodo = async (todoId) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${todoId}`, {
                method: "DELETE"
            })
            setTodos(todos.filter(todo => todo.todo_id !== todoId))
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTodos()
    },[])
    console.log(todos)
    return (
    <>
        <table class="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {todos.map(todo => (
                <tr key={todo.toto_id}>
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
