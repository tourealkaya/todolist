// JavaScript + React
import React, { useState } from 'react';
import '../TaskCss.css';
import editIcon from '../img/edit.png';
import deletedIcon from '../img/delet.png';

function Task({ task, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleNewTextChange = (e) => {
        setNewText(e.target.value);
    };

    const handleNewTextSubmit = (e) => {
        e.preventDefault();
        onEdit(task, newText);
        setIsEditing(false);
    };

    return (
        <div className='task'>
            <div className='taskTitle'>
                {task.title} 
                <div className='buttonContainer'>
                    <button id='editButton' onClick={() => setIsEditing(true)}>
                        <img src={editIcon} alt="Modifier" width="20" height="20"/>
                    </button>
                    <button id='deleteButton' onClick={() => onDelete(task)}>
                        <img src={deletedIcon} alt="Supprimer" width="20" height="20"/> 
                    </button>
                </div>
            </div>
            <div className='taskDetails'>
                {isEditing ? (
                    <form onSubmit={handleNewTextSubmit}>
                        <input value={newText} onChange={handleNewTextChange} />
                        <button type="submit">Valider</button>
                    </form>
                ) : (
                    <p>{task.text}</p>
                )}
            </div>
        </div>
    )
}

export default Task;