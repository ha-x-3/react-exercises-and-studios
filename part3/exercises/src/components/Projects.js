import data from './../data.json';
import { useState } from 'react';
import styles from './Project.module.css';


export default function MyProjects() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < data.projects.length-1)
    {
       setIndex(index + 1);
    }
    else 
    {
       setIndex(0);
    }
 }

  let projects = data.projects;
  let project = projects[index];

  return (
    <div className={styles.nail}> 
      <button onClick={handleClick}>
      Next
      </button>
      <h2>{project.name} using {project.method}</h2>
      <div className={styles.imageContainer}>
        <img src={project.photoUrl} alt={project.alt}/>
      </div>
      <p>Background photo by <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Grey</a> on <a href="https://unsplash.com/photos/62vi3TG5EDg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    </div>
  )
}