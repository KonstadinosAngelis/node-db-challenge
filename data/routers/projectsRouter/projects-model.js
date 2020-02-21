const db = require('../../db-config');

module.exports = {
  findProjects,
  findProjectById,
  addProject,
  addResource,
}

function findProjects() {
  return db('projects')
}

function findProjectById(id){
  return db('projects')
  .where({ id })
  .first();
}

function addProject(project){
  return db('projects')
    .insert(project, "id");
}

function addResource(projectId, resourceId){
  return db('project_resource')
}
