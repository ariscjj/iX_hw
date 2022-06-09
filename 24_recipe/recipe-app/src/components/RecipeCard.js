import React from 'react'

export default function RecipeCard(props){
  // console.log(props)

  return (
  <div>
    {
      props.recipes.map((recipe) => 
    <div class="row" key={recipe.id}>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{recipe.name}</h5>
            <div class="card-text"> 
              <p>Date Made: {recipe.date}</p>
              <p>{recipe.description}</p>
                <div onClick={() => props.onRecipeRemove(recipe.id)}>
                    <i className="bi bi-trash"></i>
                </div>
            </div>

          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Ingredients</h5>
            <p class="card-text">{recipe.ingredients}</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Steps</h5>
            <p class="card-text">{recipe.steps}</p>
          </div>
        </div>
      </div>
    </div>
      )
    }
  </div>

  )
}
    




