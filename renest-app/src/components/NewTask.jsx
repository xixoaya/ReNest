import './NewTask.css'
import { useState } from 'react'
import { createTask } from '../logic';


const NewTask = ({ taskName: { id, name }, setReloadViewTask }) => {

    const [view, setView] = useState('name')

    const selectPriority = () => setView('priorities')

    const seeName = () => setView('name')

    const createNewTask = (priority) => {

        createTask(id, priority)
        setReloadViewTask(true)

    }

    return <>
        <div className='new-task__container'>
            {
                view === 'name' && <>
                    <div className='new-task-name'>{name[0].toUpperCase() + name.slice(1)}</div>
                    <span className='new-task-plus' onClick={selectPriority}>
                        <div className="new-task-stem"></div>
                        <div className="new-task-kick"></div>
                    </span>
                </>
            }
            {
                view === 'priorities' && <>
                    <div className='new-task'>
                        <div className='new-task-priority new-task-priority--high'
                            onClick={() => createNewTask('high')}
                        >
                            <p>High Priority</p>

                        </div>
                        <div className='new-task-priority new-task-priority--normal'
                            onClick={() => createNewTask('normal')}
                        >
                            <p>Normal Priority</p>
                        </div>
                        <div className='new-task-priority new-task-priority--low'
                            onClick={() => createNewTask('low')}
                        >
                            <p>Low Priority</p>
                        </div>
                    </div>
                    <span className='new-task-cross' onClick={seeName}>
                        <div className="new-task-stem cross-stem"></div>
                        <div className="new-task-kick cross-kick"></div>
                    </span>
                </>
            }
        </div>
    </>
}

export default NewTask