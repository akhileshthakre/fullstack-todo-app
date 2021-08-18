import React,{useState,useEffect} from 'react'

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
                <tr>
                    <td>{todo.description}</td>
                    <td>Edit</td>
                    <td>Button</td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
    )
}

export default ListTodos
