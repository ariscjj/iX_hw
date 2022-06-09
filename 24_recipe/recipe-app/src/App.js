import React, { useState, useEffect } from 'react';
//import boostrap from node modules 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'; 

//import the Recipe Service 
import RecipeService from './services/recipe.service'; 

//import the Recipe class from the models folder 
import { Recipe } from './models/recipe.js';

//import components from components folder
import RecipeCard from './components/RecipeCard';

import RecipeInput from './components/RecipeInput'; 

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!recipes.length){
      onInitialLoad(); 
    }
  }, []); 

  async function onInitialLoad(){
    const recipes = await RecipeService.fetchRecipes(); 
    setRecipes(recipes);
  }

  async function onRecipeCreate(name, description, date, steps, ingredients) {
    // add the recipe to the recipes state 
    const recipe = await RecipeService.createRecipe(
      new Recipe(null, name, description, date, steps, ingredients)); 
    setRecipes([...recipes, recipe]); 
  }

  async function onRecipeRemove(recipeId) {
    await RecipeService.deleteRecipe(recipeId); 
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId)); 
  }
  return (
    <div className="container my-5">
      <div className="card card-body text-center">
        <h1>Cooking in Lisbon</h1>
        <hr></hr>
        <p>Here are the recipes that my friends and I have cooked so far in our trip to Lisbon!</p>
        <RecipeInput onRecipeCreate={onRecipeCreate} />
      </div>
      <RecipeCard 
        onRecipeRemove={onRecipeRemove}
        recipes={recipes} />
    </div>
  );
}


