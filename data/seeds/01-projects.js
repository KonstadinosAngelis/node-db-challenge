
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "Sprint Challenge", project_description: "Create a Database", project_completed: 0},
        {project_name: "Do Chores", project_description: "Sweep and do dishes", project_completed: "1"},
        {project_name: "Code Website", project_description: "Use React to make a cool website", project_completed: "0"},
        {project_name: "Come up with project names", project_description: "This 5th ones going to be hard", project_completed: 1},
        {project_name: "Test", project_description: "Test_descrip", project_completed: 0},
      ]);
    });
};
