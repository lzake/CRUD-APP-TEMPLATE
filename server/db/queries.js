// THE CONNECTION
const knex = require('./knex');


// THIS IS HOW ALL OF YOUR ROUTES WILL KNOW WHAT DATA TO GET, AND KNOW WHAT TO DO WITH THAT DATA

module.exports = {
  getAll () {
    return knex('movie');
  },
  getOne(id) {
    return knex('movie').where('id', id).first();
  },
  create(movie) {
    return knex('movie').insert(movie, '*');
  },
  update(id, movie) {
    return knex('movie').where('id', id).update(movie, '*');
  },
  delete(id) {
    return knex('movie').where('id', id).del();
  }
};
