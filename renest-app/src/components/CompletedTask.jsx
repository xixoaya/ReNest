import './CompletedTask.css';

const CompletedTask = ({task : { name }}) => {

    return <>
        <div className="completed-task__container">
            <span className="checkmark">
                <div className="checkmark-circle"></div>
                <div className="checkmark-stem"></div>
                <div className="checkmark-kick"></div>
            </span>
            <div className="completed-task-name">{name[0].toUpperCase() + name.slice(1)}</div>
        </div>
    </>

}

export default CompletedTask