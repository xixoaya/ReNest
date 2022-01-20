import { useState, useEffect } from 'react'
import './HomeHeader.css';

const HomeHeader = ({onTasks, onCompleted, showTasks, onAddTask}) => {

    const [tasksView, setTasksView] = useState(showTasks)

    useEffect(() => {
    
        setTasksView(showTasks)
    
    }, [showTasks])

    return <>
        <div className="header">
            <div className="navbar">
                <a className="navbar-menu">menu</a>
                <h1 className="navbar-name">ReNest</h1>
                <a className="navbar-add" onClick={onAddTask}>+</a>
            </div>
            <form className="search">
                <input type="text" id='query' className="search-input" name="query" placeholder=" 🔍 Search" />
            </form>
            <div className="home-navigation">
                <div className={tasksView === 'activeTasks' ? "home-navigation-item__selected" : "home-navigation-item"} onClick={onTasks} >Tasks</div>
                <a className={tasksView === 'completedTasks' ? "home-navigation-item__selected" : "home-navigation-item"} onClick={onCompleted}>Completed</a>
            </div>
        </div>
    </>

}

export default HomeHeader