const knex = require('../database/connection');

exports.all = () => {
    return knex
        .select('*')
        .from('urls');
}

exports.create = (url) => {
    return knex('urls')
        .insert({ description: url.description , newDescription: url.newDescription, count: 0 });
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('urls')
        .where('id', id)
        .first();
}

exports.findShort = (id) => {
    return knex
        .select('*')
        .from('urls')
        .where('newDescription', id)
        .first();
}

exports.findShort = (id) => {
    return knex
        .select('*')
        .from('urls')
        .where('newDescription', id)
        .first();
}

exports.update = (id, newCount) => {
    return knex
        .select('*')
        .from('urls')
        .where('id', id)
        .update('count', newCount)


}
