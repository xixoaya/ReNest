import './HomeBody.css';
import { useState, useEffect } from 'react'
import CompleteTasksBlock from './CompleteTasksBlock';
import Block from './Block';


const HomeBody = ({showTasks}) => {
    const [tasksView, settasksView] = useState(showTasks)
    const [completeTasks, setCompleteTasks] = useState([])

    useEffect(() => {
        settasksView(showTasks)
    }, [showTasks])

    return <> 
        <div className="home__body">
            {
                tasksView === 'activeTasks' && <> 
                    <Block setCompleteTasks={setCompleteTasks} priority={'high'}/>
                    <Block setCompleteTasks={setCompleteTasks} priority={'normal'}/>
                    <Block setCompleteTasks={setCompleteTasks} priority={'low'}/>
                    <CompleteTasksBlock completeTasks={completeTasks} setCompleteTasks={setCompleteTasks}/>
                </>
            }
            {
                tasksView === 'completedTasks' && <> 
                    <CompleteTasksBlock completeTasks={completeTasks} setCompleteTasks={setCompleteTasks}/>
                </>
            }
        </div>
    </>

}

export default HomeBody
