import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import styles from './NewTask.module.css';

export function NewTask({tasksList, setTasksList}) {

    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask() {
        event.preventDefault();
        const newTask = event.target.task.value;
        setTasksList([
            ...tasksList,
            {
                text: newTask,
                isCompleted: false,
            }
        ]);

        setNewTaskText('');
        
      }

      function handleNewTaskChange() {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
      }

      function handleNewTaskInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório');
      }

      const isNewTaskEmpety = newTaskText.length === 0;

    return (
        <form onSubmit={handleCreateNewTask} className={styles.search}>
            <textarea 
                name='task'
                 placeholder="Adicione uma nova tarefa"
                 value={newTaskText}
                 onChange={handleNewTaskChange}
                 required
                 onInvalid={handleNewTaskInvalid}
             />
            <button type="submit" disabled={isNewTaskEmpety}>
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}