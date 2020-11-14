const Url = require('../models/Url');


exports.up = function(knex) {
    return knex.schema
        .createTable('urls', (table) => {
        table.increments('id');
        table.string('description', 512).notNullable().defaultTo("");
        table.string('newDescription', 512).notNullable().defaultTo("");
        table.integer('count').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('urls');
};
