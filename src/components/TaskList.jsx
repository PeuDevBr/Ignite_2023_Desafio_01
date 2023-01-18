import styles from './TaskList.module.css';
import clipboard from '../assets/Clipboard.png';
import Task from './Taks';
import { useState } from 'react';

export function TaskList({
    tasksList, 
    setTasksList, 
    onDeleteTask,
    tasksCompleted,
    setTasksCompleted
}) {

    const changeCheckTask = (index) => {
        const newTasks = [...tasksList];

        newTasks[index].isCompleted = !newTasks[index].isCompleted;

        const tasksCompleted = newTasks.filter(task => (task.isCompleted === true));
        const tasksNotCompleted = newTasks.filter(task => task.isCompleted === false);

        setTasksList([...tasksNotCompleted, ...tasksCompleted]);

        setTasksCompleted(tasksCompleted.length);
    }


    const renderTaskList = () => {
        if (tasksList.length === 0) {
            return (
                <div className={styles.empty}>
                    <img src={clipboard} alt="" />
                    <div>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    {tasksList.map((task, index) => {
                        return (
                            <Task 
                                onDeleteTask={onDeleteTask} 
                                onChangeCheckTask={changeCheckTask} 
                                key={task.text} 
                                task={task}
                                index={index}
                            />
                        )
                    })}
                </>
            )               
        }
    }

   return (
    <div className={styles.taskList}>

        <div className={styles.info}>

            <div className={styles.created}>

                <p>Tarefas criadas</p>
                <div className={styles.counter}>
                    <p>{tasksList.length}</p>
                </div>

            </div>

            <div className={styles.done}>

                <p>Concluídas</p>
                <div className={styles.counter}>
                    <p>{tasksCompleted} de {tasksList.length}</p>
                </div>
                
            </div>

        </div>

        <div>
            {renderTaskList()}            
        </div>

    </div>
   )
}