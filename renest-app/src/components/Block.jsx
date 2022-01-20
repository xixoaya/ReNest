import './Block.css';
import ActiveTask from './ActiveTask';
import { useState, useEffect } from 'react'
import { retrieveTasks } from '../logic';

const Block = ({ setCompleteTasks, priority }) => {

    const [activeTasks, setActiveTasks] = useState([])
    const [reloadViewTask, setReloadViewTask] = useState(false)

    useEffect(() => {

        const highOpenTasks = retrieveTasks().filter(task => task.priority === priority && task.status === 'open')
        setActiveTasks(highOpenTasks)
        const completedTasks = retrieveTasks().filter(task => task.status === 'completed')
        setCompleteTasks(completedTasks)
        setReloadViewTask(false)

    }, [reloadViewTask])
    
    return <>
        <div className={`priority-container priority-container--${priority}`}>
            <h2 className={`priority-title priority-title--${priority}`}>{priority} Priority</h2>
            <div className="priority--tasks">
                {
                    activeTasks.map(task =>
                        < ActiveTask task={task} setReloadViewTask={setReloadViewTask} key={ task.id }/>
                    )
                }
            </div>
        </div>
    </>
}

export default Block