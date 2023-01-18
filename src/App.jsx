import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';

import './global.css';
import { useState } from 'react';

function App() {

  const [tasksCompleted, setTasksCompleted] = useState(0)


  const [tasksList, setTasksList] = useState([
    {
      text:'The interactive example below demonstrates some of the values for align-items using grid layout',
      isCompleted: false,
    },
    {
      text:'Organizar os horários dos estudos... ',
      isCompleted: false,  
    }
  ]);

  function deleteTask(taskToDelete) {
    const taskWithoutDeleteOne = tasksList.filter( task => {
      return task !== taskToDelete
    })

    setTasksCompleted(tasksCompleted - 1);

    setTasksList(taskWithoutDeleteOne);
  }

  return (
    <div className={styles.app}>
      <Header/>
      <NewTask 
        tasksList={tasksList} 
        setTasksList={setTasksList}
      />
      <TaskList 
        onDeleteTask={deleteTask}
        tasksList={tasksList}
        setTasksList={setTasksList}
        tasksCompleted={tasksCompleted}
        setTasksCompleted={setTasksCompleted}
      />
    </div>
  )
}

export default App
