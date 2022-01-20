import React from 'react'
import './AddTaskBody.css';
import NewTask from './NewTask';
import { useState, useEffect } from 'react'
import { retrieveTaskNames } from '../logic';

const AddTaskBody = () => {
    
    const [tasksNames, setTasksNames] = useState([])
    const [reloadViewTask, setReloadViewTask] = useState(false)

    useEffect(() => {

        setTasksNames(retrieveTaskNames())
        setReloadViewTask(false)

    }, [reloadViewTask])


   return <> 
    <div className="add-task__container">
        {
            tasksNames.map(taskName =>
                < NewTask taskName={ taskName } setReloadViewTask={setReloadViewTask} key={ taskName.id }
            />)
        }
    </div>
   </> 
}

export default AddTaskBody