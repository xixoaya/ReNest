import { useState, useEffect } from 'react'
import logo from '../logo.svg';
import './App.css';
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import AddTaskHeader from './AddTaskHeader';
import AddTaskBody from './AddTaskBody';


const App = () => {

	const [view, setView] = useState('home')
	const [tasksView, setTasksView] = useState('activeTasks')

	const activeTasks = () => setTasksView('activeTasks')

	const completedTasks = () => setTasksView('completedTasks')

	const viewNewTasks = () => setView('newTasks')

	const goHome = () => setView('home')

	return <>
		<div className="app">
    		{
				view === 'home' && <>
        			<HomeHeader showTasks={tasksView} onTasks={activeTasks}
						onCompleted={completedTasks} onAddTask={viewNewTasks}
					/>
        			<HomeBody showTasks={tasksView} />
      			</>
			}
      		{
				view === "newTasks" && <>
        			<AddTaskHeader onGoBack={goHome} />
        			<AddTaskBody />
      			</>
			}
    	</div>
	</>
}


export default App;