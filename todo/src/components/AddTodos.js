import { useState } from "react";

export default function AddTodos(props) {
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const submit =(e)=>{
        e.preventDefault();
        if( !title || !desc){
            alert('Title and Desc not be empty!!')
        }
        props.addTodo(title,desc);
    }
  return (
    <div className="container">
      <h3 className="mt-5 mb-2">Add Todos Here!! </h3>
      <form className="mt-5" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title} onChange={(e)=>(setTitle(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc" value={desc} onChange={(e)=>(setDesc(e.target.value))}
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
}
