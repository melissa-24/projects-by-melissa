
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {type: 'combined'},
        {type: 'frontend'},
        {type: 'backend'},
        {type: 'full-stack'},
        {type: 'multi-source'},
        {type: 'past-frontend'},
        {type: 'past-backend'},
        {type: 'organization'}
      ]);
    });
};
