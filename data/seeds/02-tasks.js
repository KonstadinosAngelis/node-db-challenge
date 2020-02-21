
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: "1", task_description: "Test1", task_notes: "", task_completed: "0"},        {project_id: "1", task_description: "Test2", task_notes: "OptionalNotes", task_completed: "1"},
        {project_id: "1", task_description: "Test3", task_notes: "", task_completed: "1"},
        {project_id: "1", task_description: "Test4", task_notes: "OptionalTest", task_completed: "0"},
        {project_id: "2", task_description: "Make sure to fold towels", task_notes: "Need towels to shower with", task_completed: "1"},
        {project_id: "3", task_description: "Create react app", task_notes: "use Redux", task_completed: "1"},
        {project_id: "4", task_description: "Couldn't come up with too many", task_notes: "It's hard", task_completed: "0"},
        {project_id: "5", task_description: "Wasn't creative enough", task_notes: "Oef", task_completed: "1"},
      ]);
    });
};
