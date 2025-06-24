import { useState } from "react";

export default function Player({initialname, symbol, isActive, onChangeName}){
    const [playerName,setPlayerName] = useState(initialname);
    const [isEditing, setIsEditing]= useState(false);

    function handleEditClick(){
    //    setIsEditing(!isEditing); 
       setIsEditing((editing) => !editing); //Best way to use the state 
       if(isEditing){
        onChangeName(symbol, playerName);
       }
       
    }
    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className='player-name'>{playerName}</span>;

    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }
   
    return (       
        
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
                <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    );
}