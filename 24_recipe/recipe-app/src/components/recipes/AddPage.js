import React, { useState, useEffect } from 'react';
//import boostrap from node modules 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import '../../App.css'; 

//import the Recipe Service 
import RecipeService from '../../services/recipe.service'; 

//import the Recipe class from the models folder 
import { Recipe } from '../../models/recipe.js';
import RecipeCard from './RecipeCard';
import RecipeInput from './RecipeInput'; 

// import Navbar from './components/common/Navbar';
// import RequireAuth from './components/common/RequireAuth';
// import Spinner from './components/common/Spinner';

import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';




export default function HomePage() {
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
    <div className="container my-5 p-4 text-center">
        <div className="card card-body">
          <h1>Cooking in Lisbon</h1>
          <hr></hr>
          <p>Feel free to add more recipes</p>
          <RecipeInput onRecipeCreate={onRecipeCreate} />
        </div>
      </div>
  );
}





