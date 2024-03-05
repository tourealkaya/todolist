// JavaScript + React
import React from 'react';
import Task from './Task';

function TaskList() {
    const [tasks, setTasks] = React.useState([
        { title: "Apprendre React", id: 1, text: "Ceci est la première tâche" },
        { title: "Créer une application To-Do", id: 2, text: "Ceci est la deuxième tâche" }
    ]);

    if (tasks.length === 0) {
        return <p>Aucune tâche à afficher</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </ul>
    );
}

export default TaskList;