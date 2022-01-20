import './NewTask.css'
import { useState } from 'react'
import { createTask } from '../logic';


const NewTask = ({taskName: { id, name }, setReloadViewTask}) => {

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
                <div className='new-task-name'>{name}</div>
                <div className='new-task-plus' onClick={selectPriority}>+</div>
                </>
            }
            {
                view === 'priorities' && <> 
                    <div className='new-task'>
                        <div className='new-task-priority new-task-priority--high'
                            onClick={() => createNewTask('high')}
                        >
                            High Priority
                        </div>
                        <div className='new-task-priority new-task-priority--normal'
                            onClick={() => createNewTask('normal')}
                        >
                            Normal Priority
                        </div>
                        <div className='new-task-priority new-task-priority--low'
                            onClick={() => createNewTask('low')}
                        >
                            Low Priority
                        </div>
                    </div>
                    <div className='new-task-plus' onClick={seeName}>x</div>
                </>
            }
        </div>
    </>
}

export default NewTask