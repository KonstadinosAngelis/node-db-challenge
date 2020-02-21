const express = require('express');
const projects = require('./data/routers/projectsRouter/projects-router')
const tasks = require('./data/routers/tasksRouter/tasks-router')
const resources = require('./data/routers/resourceRouter/resource-router')

const server = express();

server.use(express.json())
server.use('/api/projects', projects)
server.use('/api/tasks', tasks)
server.use('/api/resources', resources)

server.get('/', (req, res) => {
  res.status(200).json({successMessage: "Server is working!"})
})

module.exports = server