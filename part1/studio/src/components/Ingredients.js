import styles from './Ingredients.module.css';

export default function RecipeIngredients() {

   const ingredients = ["2 Shot Espresso", "1 Tbsp Pumpkin Puree", "2 tsp Maple Syrup", "1/2 tsp Vanilla Extract", "1/4 tsp Pumpkin Pie Spice", "Pinch of Sea Salt", "1 Cup Milk", "Whipped Cream and Pumpkin Pie Spice for Topping"];
   return(
      <div className = {styles.ingredientList}>
         <h3>Recipe Ingredients</h3>
         <ul >
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
         </ul>
      </div>
   );
}