import React from 'react'

export default function RecipeCard(props){
  // console.log(props)

  return (
  <div>
    { 
      props.recipes.map((recipe) => 
      <ul class="list-group list-group-horizontal my-5">
        <li class="list-group-item col-5">
          <h5 class="card-title">{recipe.name}</h5>
              <p>Date Made: {recipe.date}</p>
              <p>{recipe.description}</p>
                <div onClick={() => props.onRecipeRemove(recipe.id)}>
                    <i className="bi bi-trash"></i>
                </div>
                <div onClick={() => props.onRecipeUpdate(recipe)}>
                    <button type="button" class="btn btn-link">Edit</button>
                </div>

        </li>
        <li class="list-group-item col-2">
            <h5 class="card-title">Ingredients</h5>
            <p class="card-text">{recipe.ingredients}</p>
        </li>
        <li class="list-group-item">
            <h5 class="card-title">Steps</h5>
            <p class="card-text">{recipe.steps}</p>
        </li>
      </ul>
    )
  }
  </div>



  )
}

