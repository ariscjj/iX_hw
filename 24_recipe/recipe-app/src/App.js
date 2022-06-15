import React, { useState, useEffect } from 'react';
//import boostrap from node modules 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'; 
import { auth } from './firebase/firebase';


import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

//import the Recipe Service 
import RecipeService from './services/recipe.service'; 
import { onAuthStateChanged } from 'firebase/auth';

//import the Recipe class from the models folder 
import { Recipe } from './models/recipe.js';
// import RecipeCard from './components/recipes/RecipeCard';
// import RecipeInput from './components/recipes/RecipeInput'; 
import RecipePage from './components/recipes/RecipePage';
import HomePage from './components/recipes/HomePage';
import AddPage from './components/recipes/AddPage';

import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

import Navbar from './components/common/Navbar';
import RequireAuth from './components/common/RequireAuth';
import Spinner from './components/common/Spinner';



export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] =  useState(null);
  const[isUserUpdated, setIsUserUpdated] = useState(false); 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user); 
      setIsUserUpdated(true);
    });
  },[]); 

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

  async function onRecipeUpdate(name, description, date, steps, ingredients) {
    // add the recipe to the recipes state 
    const recipe = await RecipeService.updateRecipe(
      new Recipe(null, name, description, date, steps, ingredients)); 
    setRecipes([...recipes, recipe]); 
  }

  async function onRecipeRemove(recipeId) {
    await RecipeService.deleteRecipe(recipeId); 
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId)); 
  }
  return (
    <BrowserRouter>
      <Navbar user={user} />
      {
        isUserUpdated ?
          <Routes>
            <Route path='/' element={
              <RequireAuth user={user}>
                <HomePage />
              </RequireAuth>
            } />
            <Route path='' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/recipelist' element={<RecipePage />} />
            <Route path='/add' element={<AddPage />} />
          </Routes>
          :
          <div className='mt-3 text-center'>
            <Spinner />
          </div>
      }
    </BrowserRouter>








  );
}


