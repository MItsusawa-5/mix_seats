import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const gridSize = 10;
  const [selectedCells, setSelectedCells] = useState(Array(gridSize * gridSize).fill(false));
  const [formData, setFormData] = useState(['',]);
  const [inputData, setInputData] = useState(Array(gridSize * gridSize).fill(''));

  // const handleExecute = (data) => {
  //   setFormData(data);
  //   const newInputData = [...inputData];
  //   data.forEach((value, index) => {
  //     if (selectedCells[index]) {
  //       newInputData[index] = value;
  //     }
  //   });
  //   setInputData(newInputData);
  // };

  const handleExecute = (data) => {
    const newInputData = [...inputData];
    let formIndex = 0;
    for (let i = 0; i < newInputData.length; i++) {
      if (selectedCells[i] && formIndex < data.length) {
        newInputData[i] = data[formIndex];
        formIndex++;
      }
    }
    setInputData(newInputData);
  };

  const resetGrid = () => {
    setSelectedCells(Array(gridSize * gridSize).fill(false));
    setInputData(Array(gridSize * gridSize).fill(''));
  };

  return (
    <DataContext.Provider
      value={{
        selectedCells,
        setSelectedCells,
        formData,
        setFormData,
        inputData,
        handleExecute,
        resetGrid
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

