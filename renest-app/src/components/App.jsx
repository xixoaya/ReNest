import { useState, useEffect } from 'react'
import logo from '../logo.svg';
import './App.css';
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import AddTaskHeader from './AddTaskHeader';
import AddTaskBody from './AddTaskBody';
import SearchTaskView from './SearchTaskView';


const App = () => {

	const [view, setView] = useState('home')
	const [tasksView, setTasksView] = useState('activeTasks')

	const activeTasks = () => setTasksView('activeTasks')

	const completedTasks = () => setTasksView('completedTasks')

	const viewNewTasks = () => setView('newTasks')

	const goHome = () => setView('home')

	const goSearchView = () => setView('search')

	return <>
		<div className="app">
    		{
				view === 'home' && <>
        			<HomeHeader showTasks={tasksView} onTasks={activeTasks}
						onCompleted={completedTasks} onAddTask={viewNewTasks} onGoSearch={goSearchView}
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
			{
				view === "search" && <>
        			<SearchTaskView onGoBack={goHome} />
      			</>
			}
    	</div>
	</>
}


export default App;