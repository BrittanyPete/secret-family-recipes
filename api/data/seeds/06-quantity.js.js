

exports.seed = function(knex) {
  return knex('measurement').insert([
    {quantity: 1, measurement: 'cups'},
    {quantity: 2, measurement: 'large'},
    {quantity: 2, measurement: 'cups'},
    {quantity: 1, measurement: 'tsp'},
    {quantity: 16, measurement: 'oz'},
    {quantity: 1, measurement: 'packet'},
    {quantity: 2, measurement: 'tbsp'},
  ]);
};
