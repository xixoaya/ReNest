import './CompleteTasksBlock.css';
import CompletedTask from './CompletedTask';
import { useEffect } from 'react'
import { retrieveTasks } from '../logic';

const CompleteTasksBlock = ({ completeTasks, setCompleteTasks }) => {
    
    useEffect(() => {
        
        const completedTasks = retrieveTasks().filter(task => task.status === 'completed')
        setCompleteTasks(completedTasks)

    }, [])

    return <>
        <div className="complete-tasks__container">
            {
                completeTasks.map(task =>
                    < CompletedTask task={task} key={task.id} />
                )
            }
        </div>
    </>
}

export default CompleteTasksBlock