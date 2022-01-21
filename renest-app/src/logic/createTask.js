/**
 * Creates a new open task from the available options with the priority seleceted 
 * @param {string} taskNameId The full name of the new task.
 * @param {string} priority the chosen priority between high, normal and low options
 */

import createId from "../helpers/createId"
import tasks from "../data/tasks"

const createTask = (taskNameId, priority) => {
    const task = {
        id: createId(),
        taskNameId,
        priority,
        status: 'open'
    }

    tasks.push(task)
}

export default createTask