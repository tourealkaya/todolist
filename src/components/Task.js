// JavaScript + React
import React from 'react';
import '../TaskCss.css';
import editIcon from '../img/edit.png';
import deletedIcon from '../img/delet.png';


function Task({ task }) {
    return (
        <div className='task'>
            <div className='taskTitle'>
                {task.title} 
                <div className='buttonContainer'>
                    <button id='editButton'>
                        <img src={editIcon} alt="Modifier" width="20" height="20"/>
                    </button>
                    <button id='deleteButton'>
                        <img src={deletedIcon} alt="Supprimer" width="20" height="20"/> 
                </button>
                </div>
                
            </div>
            <div className='taskDetails'><p>{task.text}</p></div>
        </div>
    )
}

export default Task;