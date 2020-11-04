
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('types', tbl => {
        tbl.increments();
        tbl.string('type');
    })
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.integer('types_id').unsigned().notNullable().references('id').inTable('types').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.string('name').notNullable();
        tbl.string('description');
        tbl.string('source');
        tbl.string('alt-source');
        tbl.string('extra-source');
        tbl.string('link');
        tbl.string('alt-link');
        tbl.string('extra-link');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('types');
  };
  