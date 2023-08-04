import React from 'react';
import styles from './Description.module.css';

const RecipeAuthor = () => {
   let authorLink = "https://www.gimmesomeoven.com/about/";
   let authorPhoto = "https://www.gimmesomeoven.com/wp-content/uploads/2021/10/Ali-Martin-Barcelona-Kitchen-1392-1-1365x2048.jpg";
   let authorName = "Ali Martin";

   return (
      <div className = {styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt = "Ali Martin" className={styles.imageUpdates} height="350px" />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Gimme Some Oven</a> 
         </div>
      </div>
   );
}

class RecipeDescription extends React.Component {

   render() {
      return (
         <div> 
            <div>
               <h1>Pumpkin Spice Latte</h1>
               <p>Delicious latte without the coffee shop markup!</p>
            </div>
            <RecipeAuthor />
         </div>
      );
   }
}

export default RecipeDescription;