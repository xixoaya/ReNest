/**
 * returns the name of the tasks and id of those that the user has not yet selected.
 * 
 */

import taskNames from "../data/taskNames";
import tasks from "../data/tasks";

const retrieveTaskNames = () => taskNames.filter(taskName =>
    !tasks.some( task => task.taskNameId === taskName.id)
)

export default retrieveTaskNames
