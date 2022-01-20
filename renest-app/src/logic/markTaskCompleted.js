import tasks from "../data/tasks"

const markTaskCompleted = id => {
    tasks.forEach(task => task.id === id ? task.status = 'completed': null)
}

export default markTaskCompleted

// const markTaskCompleted = (id) => {
//     tasks.forEach(task => {
//         if (task.id === id) {
//             task.status = 'completed'
//         }
//     })
// }