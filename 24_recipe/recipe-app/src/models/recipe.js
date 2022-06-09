export class Recipe {
  constructor(
    id, 
    name,
    description, 
    date, 
    steps,
    ingredients 
  ) {
    this.id = id; 
    this.name = name; 
    this.description = description; 
    this.date = date; 
    this.steps = steps; 
    this.ingredients = ingredients
  }
}
