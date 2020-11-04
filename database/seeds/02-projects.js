
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "A Web Developers Guide", description: "A guide of tips, tricks and hints for Developers of all levels", source: "https://github.com/beedev-services/new-help-guide", link: "https://navyladyveteran.com", types_id: 1}
      ]);
    });
};
