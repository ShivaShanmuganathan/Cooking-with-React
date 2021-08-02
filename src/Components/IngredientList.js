import React from 'react'
import Ingredient from './Ingredient'


function IngredientList({ingredients}) {
    return (
        <div>
            {ingredients.map(ingredient => {
                return <Ingredient key={ingredient.id} {...ingredient}/>
            })}
        </div>
    )
}

export default IngredientList
