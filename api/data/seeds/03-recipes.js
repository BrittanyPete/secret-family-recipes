exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Chip Dip', source: 'Uncle Hagrid', user_id: 1},
    {recipe_name: 'Chocolate Milk', source: 'Mom', user_id: 2},
    {recipe_name: 'PB Chocolate Chip Cookies', source: 'Mrs. Weasley', user_id: 3}
  ]);
};
