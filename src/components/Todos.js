import  TodoItems  from "../components/TodoItems.js";

export default function Todos(props){
    return(
        <div className="container">
            <h3 className="mb-5 mt-5">Todo List</h3>
            {props.todo.length===0? "No Todo is Here !!" :
            
            props.todo.map((todo)=>{
                return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })
            }
            
        </div>
    );
}