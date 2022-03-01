const ingredients = [
  {ingredient_name: 'butter', quantity: 1, measurement: 'cups'},
  {ingredient_name: 'peanut butter', quantity: 1, measurement: 'cups'},
  {ingredient_name: 'sugar', quantity: 1, measurement: 'cups'},
  {ingredient_name: 'eggs', quantity: 2, measurement: 'large'},
  {ingredient_name: 'flour', quantity: 2, measurement: 'cups'},
  {ingredient_name: 'baking soda', quantity: 1, measurement: 'tsp'},
  {ingredient_name: 'sour cream', quantity: 16, measurement: 'oz'},
  {ingredient_name: 'ranch powder', quantity: 1, measurement: 'packet'},
  {ingredient_name: 'cheese', quantity: 1, measurement: 'cups'},
  {ingredient_name: 'milk', quantity: 2, measurement: 'cups'},
  {ingredient_name: 'chocolate powder', quantity: 2, measurement: 'tbsp'},
]


exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients);
};

