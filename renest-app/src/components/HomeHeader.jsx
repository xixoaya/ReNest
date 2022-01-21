import { useState, useEffect } from 'react'
import './HomeHeader.css';

const HomeHeader = ({onTasks, onCompleted, showTasks, onAddTask, onGoSearch}) => {

    const [tasksView, setTasksView] = useState(showTasks)

    useEffect(() => {
    
        setTasksView(showTasks)
    
    }, [showTasks])

    return <>
        <div className="header">
            <div className="navbar">
                <span className="navbar-menu">
                    <div className="menu-top-stem"></div>
                    <div className="menu-medium-stem"></div> 
                    <div className="menu-bottom-stem"></div> 
                </span>
                <h1 className="navbar-name">ReNest</h1>
                <span className="navbar-add" onClick={onAddTask}>
                    <div className="navbar-add-stem"></div>
                    <div className="navbar-add-kick"></div>
                </span>
            </div>
            <form className="search">
                <input type="text" id='query' className="search-input" name="query" placeholder="Search" onClick={onGoSearch} />
            </form>
            <div className="home-navigation">
                <div className={tasksView === 'activeTasks' ? "home-navigation-item__selected" : "home-navigation-item"} onClick={onTasks} >Tasks</div>
                <a className={tasksView === 'completedTasks' ? "home-navigation-item__selected" : "home-navigation-item"} onClick={onCompleted}>Completed</a>
            </div>
        </div>
    </>

}

export default HomeHeader