const RecipeAuthor = () => {
   let authorLink = "https://www.gimmesomeoven.com/about/";
   let authorPhoto = "https://www.gimmesomeoven.com/wp-content/uploads/2021/10/Ali-Martin-Barcelona-Kitchen-1392-1-1365x2048.jpg";
   let authorName = "Ali Martin";

   return (
      <div>
         <img src={authorPhoto} alt = "Ali Martin" height="400px" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Gimme Some Oven</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["2 Shot Espresso", "1 Tbsp Pumpkin Puree", "2 tsp Maple Syrup", "1/2 tsp Vanilla Extract", "1/4 tsp Pumpkin Pie Spice", "Pinch of Sea Salt", "1 Cup Milk", "Whipped Cream and Pumpkin Pie Spice for Topping"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
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

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Pumpkin Spice Latte</h1>
            <p>Delicious latte without the coffee shop markup!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.gimmesomeoven.com/wp-content/uploads/2009/09/Homemade-Pumpkin-Spice-Latte-Recipe-1-1-1365x2048.jpg" alt="Pumpkin Spice Latte" className="imageUpdates" height="725px" />
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}