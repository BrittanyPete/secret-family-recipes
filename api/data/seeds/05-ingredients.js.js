const ingredients = [
  {ingredient_name: 'butter'},
  {ingredient_name: 'peanut butter'},
  {ingredient_name: 'sugar'},
  {ingredient_name: 'eggs'},
  {ingredient_name: 'flour'},
  {ingredient_name: 'baking soda'},
  {ingredient_name: 'sour cream'},
  {ingredient_name: 'ranch powder'},
  {ingredient_name: 'cheese'},
  {ingredient_name: 'milk'},
  {ingredient_name: 'chocolate powder'},
]


exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients);
};

