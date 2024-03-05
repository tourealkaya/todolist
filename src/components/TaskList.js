import React, { useState } from 'react';
import Task from './Task'; // Assurez-vous que le chemin d'importation est correct

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskText, setNewTaskText] = useState('');
    const [isAddingTask, setIsAddingTask] = useState(false);

    const handleNewTaskTitleChange = (e) => {
        setNewTaskTitle(e.target.value);
    };

    const handleNewTaskTextChange = (e) => {
        setNewTaskText(e.target.value);
    };

    const handleNewTaskSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, { title: newTaskTitle, text: newTaskText }]);
        setNewTaskTitle('');
        setNewTaskText('');
        setIsAddingTask(false);
    };

    const handleDeleteTask = (taskToDelete) => {
        setTasks(tasks.filter(task => task !== taskToDelete));
    };

    const handleEditTask = (taskToEdit, newText) => {
        setTasks(tasks.map(task => task === taskToEdit ? { ...task, text: newText } : task));
    };

    return (
        <div>
            <button onClick={() => setIsAddingTask(true)}>Ajouter une tâche</button>
            {isAddingTask && (
                <form onSubmit={handleNewTaskSubmit}>
                    <input value={newTaskTitle} onChange={handleNewTaskTitleChange} placeholder="Titre de la tâche" />
                    <input value={newTaskText} onChange={handleNewTaskTextChange} placeholder="Texte de la tâche" />
                    <button type="submit">Valider</button>
                </form>
            )}
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={handleDeleteTask} onEdit={handleEditTask} /> // Passer la fonction handleEditTask en tant que prop onEdit
            ))}
        </div>
    );
}

export default TaskList;