import styles from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div className={styles.choresBody}>
         <h2 className={styles.choresHeading}>List of Chores</h2>
         <ol>
            <li className={styles.choresText}>Do Laundry</li>
            <li className={styles.choresText}>Wash Dishes</li>
            <li className={styles.choresText}>Vacuum</li>
         </ol>
      </div>
   );
}