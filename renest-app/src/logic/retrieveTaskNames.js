import taskNames from "../data/taskNames";
import tasks from "../data/tasks";

const retrieveTaskNames = () => taskNames.filter(taskName =>
    !tasks.some( task => task.taskNameId === taskName.id)
)

export default retrieveTaskNames


// const retrieveTaskNames = () => {
//     taskNames.filter(taskName => {
//         tasks.find( taskName => taskName.id === task.taskNameId).name
//     })
// }