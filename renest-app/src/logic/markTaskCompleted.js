/**
 * receives an id as parameter and marks as completed the tasks with that id that it finds in the database.
 * @param {string} id Task ID.
 * 
 */

import tasks from "../data/tasks"

const markTaskCompleted = id => {
    tasks.forEach(task => task.id === id ? task.status = 'completed': null)
}

export default markTaskCompleted
