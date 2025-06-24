export default function TodoItems({todo,onDelete}){
    return(
        <div className="container">
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <button className="btn btn-danger" type="button" onClick={()=>onDelete(todo)}>Delete</button>
        </div>
    );
}