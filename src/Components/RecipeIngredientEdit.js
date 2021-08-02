import React from 'react'

function RecipeIngredientEdit(props) {
    const {ingredient, handleIngredientChange, handleIngredientDelete} = props
    // console.log("HELLO WORLDS")

    function handleChange(changes){
        handleIngredientChange(ingredient.id, {...ingredient, ...changes})
    }
    
    return (
        <>
         <input 
         className="recipe-edit__input" 
         type="text"
         value={ingredient.name}
         onInput={(e) => handleChange({name: e.target.value})}
         />

         <input 
         className="recipe-edit__input"
         type="text"
         value={ingredient.amount}
         onInput={(e) => handleChange({amount: e.target.value})}
         />
         
         <button 
         className="btn btn--danger"
         onClick={()=> handleIngredientDelete(ingredient.id)}
         >&times;</button>
         
        </>
    )
}

export default RecipeIngredientEdit
