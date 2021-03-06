
exports.up = function(knex, Promise) {
  return knex.schema.createTable('conflicts', function(table){
    table.increments();
    table.integer('employee_id').unsigned();
    table.foreign('employee_id').references('id').inTable('employees');
    table.timestamp('date').notNullable();
    table.unique(['employee_id', 'date']);
    // table.string('shift').defaultTo('All');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('conflicts');
};
