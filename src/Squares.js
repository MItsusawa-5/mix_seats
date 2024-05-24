import React, { useContext,useState } from 'react';
import './App.css';
import { DataContext } from './DataContext';

function Squares() {
  const { selectedCells, setSelectedCells, inputData } = useContext(DataContext);

  const toggleCell = (index) => {
    const newSelectedCells = [...selectedCells];
    newSelectedCells[index] = !newSelectedCells[index];
    setSelectedCells(newSelectedCells);
  };

  const { resetGrid } = useContext(DataContext);

  return (
    <div className="grid">
      {selectedCells.map((selected, index) => (
        <div
          key={index}
          className={`cell ${selected ? 'selected' : ''}`}
          onMouseDown={() => toggleCell(index)}
        >
          {inputData[index]}
        </div>
      ))}
      <button onClick={resetGrid} className="reset-button">リセット</button>
    </div>
  );
}

export default Squares;


// function App() {
//   const gridSize = 10;
//   const [selectedCells, setSelectedCells] = useState(Array(gridSize * gridSize).fill(false));
//   const [dragging, setDragging] = useState(false);
//   const [initialState, setInitialState] = useState(false);

//   const toggleCell = (index) => {
//     const newSelectedCells = [...selectedCells];
//     newSelectedCells[index] = !newSelectedCells[index];
//     setSelectedCells(newSelectedCells);
//   };

//   const setCell = (index, state) => {
//     const newSelectedCells = [...selectedCells];
//     newSelectedCells[index] = state;
//     setSelectedCells(newSelectedCells);
//   };

//   const handleMouseDown = (index) => {
//     setDragging(true);
//     setInitialState(!selectedCells[index]);
//     toggleCell(index);
//   };

//   const handleMouseEnter = (index) => {
//     if (dragging) {
//       setCell(index, initialState);
//     }
//   };

//   const handleMouseUp = () => {
//     setDragging(false);
//   };

//   const resetGrid = () => {
//     setSelectedCells(Array(gridSize * gridSize).fill(false));
//   };

//   return (
//     <div>
//       <div className="grid-container" onMouseLeave={handleMouseUp}>
//         <div className="grid" onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
//           {selectedCells.map((selected, index) => (
//             <div
//               key={index}
//               className={`cell ${selected ? 'selected' : ''}`}
//               onMouseDown={() => handleMouseDown(index)}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseUp={handleMouseUp}
//             ></div>
//           ))}
//         </div>
//       </div>
//       <button onClick={resetGrid} className="reset-button">リセット</button>
//     </div>
//   );
// }

// export default App;
