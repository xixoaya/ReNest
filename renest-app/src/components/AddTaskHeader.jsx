import './AddTaskHeader.css';

const AddTaskHeader = ({onGoBack}) => {
    
    return <> 
        <div className="task-header__container">
            <div className="task-header-back" onClick={onGoBack}>flecha</div>
            <h2 className="task-header-title">Add Task</h2>
        </div>
    </>
}
export default AddTaskHeader