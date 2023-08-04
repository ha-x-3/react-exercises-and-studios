import styles from './Introduction.module.css';

export default function HobbyIntroduction() {
  return (
    <div className={styles.introduction}>
      <h2>3 Fun Facts About Nail Art:</h2>
      <ol>
        <li>It doesn't produce a bunch of clutter with finished projects.</li>
        <li>You can go as simple or as elaborate as you feel.</li>
        <li>There are endless combinations of methods to try!</li>
      </ol>
    </div>
  );
}