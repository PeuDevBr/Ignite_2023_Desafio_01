import {Trash} from 'phosphor-react'
import styles from './Task.module.css'

export default function Task({task, index, onDeleteTask, onChangeCheckTask}) {

    function Text() {
        if(task.isCompleted === true) {
            return (
                <p className={styles.isCompletedText}>{task.text}</p>
            )
        } else {
            return (
                <p className={styles.isNotCompletedText}>{task.text}</p>
            )
        }
    }


    return (
        <div className={styles.task}>
            <div>
                <input 
                    type="checkbox" 
                    checked={task.isCompleted} 
                    onChange={() => onChangeCheckTask(index)}
                />
            </div>
            <div>
               {Text()}
            </div>
            <button onClick={() => onDeleteTask(task)} title="Deletar tarefa">
                <Trash className={styles.icon} size={20}/>
            </button>
        </div>
    )
}