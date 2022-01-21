
/**
 * returns all the tasks selected by the user, with their priority, status, id and corresponding nameId.
 * 
 */
import tasks from "../data/tasks"
import taskNames from "../data/taskNames"

const retrieveTasks = () => tasks.map( task => ({
    id: task.id,
    priority: task.priority,
    name: taskNames.find( taskName => taskName.id === task.taskNameId).name,
    status: task.status
}))

export default retrieveTasks