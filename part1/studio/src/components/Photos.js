import styles from './Description.module.css';

export default function RecipePhoto() {
   return (
      <div className={styles.infoBlock}>
         <img src="https://www.gimmesomeoven.com/wp-content/uploads/2009/09/Homemade-Pumpkin-Spice-Latte-Recipe-1-1-1365x2048.jpg" alt="Pumpkin Spice Latte" className = {styles.imageUpdates} height="725px" />
      <p>Background Image by <a href="https://pixabay.com/users/lucasgeorgewendt-15638399/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5300030">Lucas Wendt</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5300030">Pixabay</a></p>
      </div>
      
   
   );
}