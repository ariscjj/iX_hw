import React, { useState } from 'react'; 

export default function RecipeInput(props){
  const [name, setName] = useState(""); 
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(""); 
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function onRecipeFormSubmit(e){
    e.preventDefault();
    props.onRecipeCreate(name, description, date, steps, ingredients); 

    // clears out input
    setName('')
    setDescription('')
    setDate('')
    setSteps('')
    setIngredients('')
  }
  
  return (
    <div class="fw-bold">
      <form onSubmit={onRecipeFormSubmit}>
        <div className="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">Name of Dish</label>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Name" />
        </div>
        <div className="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Description" />
        </div>
        <div className="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">Date Made (mm/dd/yyyy)</label>
          <input 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Date" />
        </div>
      <div className="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">Steps</label>
          <input 
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Steps" />
        </div>
        <div className="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">Ingredients</label>
          <input 
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Ingredients" />
        </div>

        <button className="btn btn-outline-secondary" type="submit">
          Submit
        </button> 
      </form>
    </div>
  )

}







