
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();

      tbl.string('project_name', 128)
        .unique()
        .notNullable();

      tbl.string('project_description', 256)
      
      tbl.boolean('project_completed')
        .notNullable()
        .defaultTo(false);
    })

    .createTable('tasks', tbl => {
      tbl.increments();

      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      tbl.string('task_description', 256)
        .notNullable();

      tbl.string('task_notes', 256);

      tbl.boolean('task_completed')
      .notNullable()
      .defaultTo(false);
    })

    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 128)
        .notNullable()
        .unique()
      tbl.string('description', 256)
    })

    .createTable('project_resource', tbl => {
      tbl.increments();

      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
