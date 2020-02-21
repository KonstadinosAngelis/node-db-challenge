
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "computer", description: "for programming"},
        {resource_name: "conference room", description: "for meeting in"},
        {resource_name: "microphone", description: "for being loud through"},
        {resource_name: "delivery van", description: "for going to places"},
        {resource_name: "TestPit", description: "Testing"},
      ]);
    });
};
