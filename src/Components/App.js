import React, {useState, useEffect} from 'react';
import RecipeList from './RecipeList';
import '../css/app.css'
import { v4 } from 'uuid';
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext()

function App() 
{
  
  const [recipes, setRecipes] = useState(sampleRecipes)
  const [selectedRecipeId, setSelectedRecipeId] = useState()

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  console.log(selectedRecipe)
  
  
  const RecipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }
  const LOCAL_STORAGE_KEY = 'cookingWithRecipes.recipes'


  //When Mounted
  // useEffect(() => {
  //   console.log('Render For First Time when Component is Mounted')
  // })

  //Whenever Component is updated.
  // useEffect(() => {
  //   console.log('Render Everytime Component gets updated')
  // })
  
  // Whenever page is reloaded
  //We fetch the value of RECIPES state in local storage
  //We then set it to local storage 

  useEffect(() =>
  {
    console.log('Render Everytime recipes is loaded')
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) {
      setRecipes(JSON.parse(recipeJSON))
    }
  },[]
  )
  
  //Whenever recipe state is updated
  //We store the value of RECIPES state in local storage
  //To display it the next time we visit the site. 
  useEffect(() => {
    console.log('Render Everytime recipes is stored')
    console.log(recipes)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  },[recipes])


  

  function handleRecipeAdd() 
  {
    console.log('adding new recipe')
    const newRecipe = 
      {
        id: v4(),
        name : '',
        servings: 1,
        cookTime: '',
        instructions: '',
        ingredients: 
          [
            {
              id: v4(),
              name: '',
              amount: ''
            }
          ]
      }
    
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])

  }

function handleRecipeDelete(id) 
  {
    if(selectedRecipeId != null && selectedRecipeId === id){
      setSelectedRecipeId(undefined)
    }

    return setRecipes(recipes.filter(recipe =>  recipe.id !== id))
  }

function handleRecipeChange(id, recipe){
  const newRecipes = [...recipes]
  const index = newRecipes.findIndex(recipe => recipe.id === id)
  newRecipes[index] = recipe
  setRecipes(newRecipes)
}


function handleRecipeSelect(id){
  setSelectedRecipeId(id)
}

  return (
    <RecipeContext.Provider value={RecipeContextValue}>
      <RecipeList recipes={recipes}/>
      
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )
}
  

const sampleRecipes = [
  {
    id:1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1.Put salt in chicken\n 2.Put chicken in oven\n 3.Eat chicken',
    ingredients: [

      {
        id: 1,
        name: 'Chicken',
        amount: '5 pounds'
      },

      {
        id:2,
        name: 'Salt',
        amount: '1 Tbsp'
      }
    ]
  },
  {
    id:2,
    name: 'Plain Pork',
    servings: 4,
    cookTime: '1:25',
    instructions: '1.Put salt in pork\n2.Put pork in oven\n3.Eat pork',
    ingredients: [

      {
        id: 1,
        name: 'Pork',
        amount: '5 pounds'
      },

      {
        id:2,
        name: 'Salt',
        amount: '1 Tbsp'
      }
    ]
  }
]

export default App;
