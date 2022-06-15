import {
  collection, addDoc,
  query, getDocs, 
  doc, updateDoc, 
  deleteDoc
} from 'firebase/firestore'; 

import { db } from '../firebase/firebase'; 
import { Recipe } from '../models/recipe'; 

class RecipeService {
  constructor(){
    this.collection = 'recipes'; 
  }

  async createRecipe(recipe) {
    // do the firebase fetching 
    const collectionRef = collection(db, this.collection); 
    const docRef = await addDoc(collectionRef, {
      name: recipe.name, 
      description: recipe.description,
      date: recipe.date,
      steps: recipe.steps,
      ingredients: recipe.ingredients
    }); 

    recipe.id = docRef.id; 
    return recipe; 
  }

 
  async fetchRecipes() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const recipes = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const recipe = new Recipe(
        doc.id,
        data.name,
        data.description,
        data.date, 
        data.steps, 
        data.ingredients
      );
      recipes.push(recipe);
    });

    return recipes;
  }

  async updateRecipe(recipe) {
    const docRef = doc(db, this.collection, recipe.id);

    await updateDoc(docRef, {
      name: recipe.name,
      description: recipe.description,
      date: recipe.date,
      steps: recipe.steps,
      ingredients: recipe.ingredients
    });

    return recipe;
  }

  async deleteRecipe(recipeId) {
    const docRef = doc(db, this.collection, recipeId);
    await deleteDoc(docRef);
  }

}
const service = new RecipeService();

export default service; 

