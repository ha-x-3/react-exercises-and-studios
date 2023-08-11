import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Drink Recipes", value: "Drink Recipes", id: 1},
      {label: "Money Savers", value: "Money Savers", id: 2},
      {label: "Holiday Recipes", value: "Holiday Recipes", id: 3}
   ];

   const [boardName, setName] = useState('no boards yet');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
            <option value={board.value} key={board.id}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}