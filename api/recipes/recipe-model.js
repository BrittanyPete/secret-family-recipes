const db = require('../data/db-config');

const getRecipeById = async (recipe_id) => {
    const result = await db('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .select(
            'r.recipe_id',
            'r.recipe_name',
            'r.source',
            's.step_id',
            's.step_number', 
            's.instructions'
        )
        .where('r.recipe_id', recipe_id)
        .orderBy('s.step_number')
    if (result.length === 0) {
        return null;
    }

    const recipe = {
        recipe_id: result[0].recipe_id,
        recipe_name: result[0].recipe_name,
        source: result[0].source,
        steps: []
    }

    for(let [idx, step] of result.entries()) {
        const ingredients = await db('recipe_ing as ri')
        .leftJoin('ingredients as i', 'ri.ingredient_id', 'i.ingredient_id')
        // console.log(step)
        .where('ri.step_id', step.step_id)
        .orderBy('ri.step_id');

        recipe.steps.push({
            step_id: step.step_id,
            step_number: step.step_number,
            instructions: step.instructions,
            ingredients: []
        })

        if (ingredients == []) {
            //empty
        } else {
            ingredients.forEach( item => {
                recipe.steps[idx].ingredients.push({
                    ingredient_id: item.ingredient_id,
                    ingredient_name: item.ingredient_name,
                    quantity: item.quantity,
                    measurement: item.measurement
                })
            })
        }

    }

    return recipe;
}



module.exports = {
    getRecipeById,
}