import './styles.css';

function Button() {
   function onLearnMore() {
      alert("The ocean is home to nearly 95% of all life on Earth.")
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;