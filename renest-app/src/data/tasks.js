import createId from "../helpers/createId"
import taskNames from "./taskNames"

const tasks = [
    {
        id: createId(),
        taskNameId: taskNames[0].id,
        priority: 'high',
        status: 'open'
    },
    {
        id: createId(),
        taskNameId: taskNames[1].id,
        priority: 'high',
        status: 'open'
    },
    {
        id: createId(),
        taskNameId: taskNames[3].id,
        priority: 'normal',
        status: 'open'
    },
    {
        id: createId(),
        taskNameId: taskNames[2].id,
        priority: 'normal',
        status: 'open'
    },
    {
        id: createId(),
        taskNameId: taskNames[9].id,
        priority: 'low',
        status: 'open'
    },
]

export default tasks