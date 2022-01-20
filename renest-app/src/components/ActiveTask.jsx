import './ActiveTask.css';
import { markTaskCompleted } from '../logic';

const ActiveTask = ({task : {id, name}, setReloadViewTask}) => {
    
    const taskCompleted = () => {
        markTaskCompleted(id)
        setReloadViewTask(true)
    }

    return <> 
        <div className="task-container">
            <div className="task-cercle" onClick={taskCompleted} ></div>
            <div className="task-name">{name}</div>
        </div> 
    </>
    
}

export default ActiveTask