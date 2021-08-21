import axios from 'axios';
import React,{useState} from 'react'

const EditTodo = ({todo}) => {

    const [description,setDescription] = useState((todo.description))
    
    //Edit Description function
   const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      await axios.put(
        `http://localhost:5000/todos/${todo.todo_id}`,body).then((response) => {
            setDescription(response.data)
        })

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

    return (
        <>
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
        </button>

        <div className="modal fade" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                    </div>

                    <div className="modal-body">
                        <input type="text" className="form-control" value={description} onChange = {(e) => setDescription(e.target.value)} />
                    </div>
                    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick = {(e) => updateDescription(e)}>
                            Edit
                        </button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditTodo
