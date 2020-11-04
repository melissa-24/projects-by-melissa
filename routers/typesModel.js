const db = require("../database/db-config.js");

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    update,
    remove
};

function findAll() {
    return db("types");
}

function findBy(filter) {
    return db("types")
    .where(filter).first();
}

function findById(id) {
    return db("types")
    .where({id}).first();
}

function add(type) {
    return db("types")
    .insert(type, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("types")
        .where({ id })
        .update(changes, '*')
}

function remove(id) {
    return db("types")
    .where({ id }).del();
}

