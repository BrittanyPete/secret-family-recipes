exports.seed = function(knex) {
  return knex('recipe_ing').insert([
    {step_id: 1, ingredient_id: 7},
    {step_id: 1, ingredient_id: 8},
    {step_id: 1, ingredient_id: 9},
    {step_id: 3, ingredient_id: 10},
    {step_id: 3, ingredient_id: 11},
    {step_id: 6, ingredient_id: 1},
    {step_id: 6, ingredient_id: 2},
    {step_id: 6, ingredient_id: 3},
    {step_id: 6, ingredient_id: 4},
    {step_id: 7, ingredient_id: 5},
    {step_id: 7, ingredient_id: 6},
  ]);
};
