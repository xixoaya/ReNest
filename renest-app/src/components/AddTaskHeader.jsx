import './AddTaskHeader.css';

const AddTaskHeader = ({onGoBack}) => {
    
    return <> 
        <div className="task-header__container">
            <span className="task-header-back" onClick={onGoBack}>
                <div className="header-back-stem"></div>
                <div className="header-back-kick"></div>
            </span>
            <h2 className="task-header-title">Add Task</h2>
        </div>
    </>
}
export default AddTaskHeader