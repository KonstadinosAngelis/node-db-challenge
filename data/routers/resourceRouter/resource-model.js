const db = require('../../db-config');

module.exports = {
  find,
  findById,
  findResources,
  addResource
}

function find() {
  return db('resources')
}

function findById(id){
  return db('resources')
    .where({ id })
    .first();
}

function findResources(id){
  return db('project_resource')
    .join('projects', 'project_resource.project_id', 'projects.id')
    .join('resources', 'project_resource.resource_id', 'resources.id')
    .select('projects.project_name', 'projects.project_description', 'resources.resource_name', 'resources.description')
    .where('project_resource.project_id', id)
}

function addResource(resource){
  return db('resources')
  .insert(resource, 'id')
}