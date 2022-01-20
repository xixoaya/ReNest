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