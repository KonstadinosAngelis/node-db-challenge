const db = require('../../db-config');

module.exports = {
  findTasks,
  findTasksById,
  addTask,
}

function findTasks() {
  return db('tasks')
}

function findTasksById(id){
  return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select('projects.project_name', 'task_description', 'task_notes', 'task_completed')
    .where('tasks.project_id', id)
}

function addTask(task){
  return db('tasks')
    .insert(task, "id");
}
