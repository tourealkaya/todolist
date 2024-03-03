// JavaScript + React
import React from 'react';
import Task from './Task';

function TaskList() {
    const [tasks, setTasks] = React.useState([

        "Apprendre React",
        "Créer une application To-Do List"
    ]);

    if (tasks.length === 0) {
        return <p>Aucune tâche à afficher</p>;
    }

    return (
        <ul>
            {tasks.map((task, index) => (
                <Task key={index} task={task} />
            ))}
        </ul>
    );
}

export default TaskList;