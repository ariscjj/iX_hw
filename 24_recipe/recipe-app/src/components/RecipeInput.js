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
        {/* <div class="row g-2"> */}
        {/*   <div class="col-md"> */}
        {/*     <div class="form-floating"> */}
        {/*       <input */} 
        {/*       id={name} */}
        {/*       value={name} */}
        {/*       onchange={(e) => setname(e.target.value)} */}
        {/*       type="text" */} 
        {/*       classname="form-control" */}
        {/*       placeholder="name" /> */}
        {/*       <label for={name}>Name of Dish</label> */}
        {/*     </div> */}
        {/*   </div> */}
        {/*   <div class="col-md"> */}
        {/*     <div class="form-floating"> */}
        {/*       <input type="email" class="form-control" id="floatinginputgrid" placeholder="name@example.com" value="mdo@example.com"> */}
        {/*       <label for="floatinginputgrid">email address</label> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}

    


        <div classname="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">name of dish</label>
          <input 
            value={name}
            onchange={(e) => setname(e.target.value)}
            type="text" 
            classname="form-control"
            placeholder="name" />
        </div>
        <div classname="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">description</label>
          <textarea 
            value={description}
            onchange={(e) => setdescription(e.target.value)}
            type="text" 
            classname="form-control"
            placeholder="description" />
        </div>
        <div classname="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">date made (mm/dd/yyyy)</label>
          <input 
            value={date}
            onchange={(e) => setdate(e.target.value)}
            type="text" 
            classname="form-control"
            placeholder="date" />
        </div>
      <div classname="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">steps</label>
          <input 
            value={steps}
            onchange={(e) => setsteps(e.target.value)}
            type="text" 
            classname="form-control"
            placeholder="steps" />
        </div>
        <div classname="mb-3">
          <label for="exampleformcontrolinput1" class="form-label">ingredients</label>
          <input 
            value={ingredients}
            onchange={(e) => setingredients(e.target.value)}
            type="text" 
            classname="form-control"
            placeholder="ingredients" />
        </div>

        <button className="btn btn-outline-secondary" type="submit">
          Submit
        </button> 
      </form>
    </div>
  )

}







