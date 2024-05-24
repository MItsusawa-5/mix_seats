import React, { useContext,useState } from 'react';
import { DataContext } from './DataContext';

function Forms() {
  const { formData, setFormData, handleExecute } = useContext(DataContext);

  const handleChange = (index, event) => {
    const newFormData = [...formData];
    newFormData[index] = event.target.value;
    setFormData(newFormData);
  };

  const handleAdd = () => {
    setFormData([...formData, '']);
  };

  const handleRemove = () => {
    if (formData.length > 1) {
      setFormData(formData.slice(0, -1));
    }
  };

  // const handleExecute = () => {
  //   console.log('Execute button clicked with data:', formData);
  // };

  return (
    <div className="forms-container">
      <div className="buttons">
        <button onClick={handleAdd}>追加する</button>
        <button onClick={handleRemove}>削除する</button>
        {/* <button onClick={handleExecute}>実行する</button> */}
        <button onClick={() => handleExecute(formData)}>実行する</button>
        <a>{formData.length}件</a>
      </div>
      {formData.map((data, index) => (
        <div key={index} className="form-group">
          <label>{index + 1}:</label>
          <input
            type="text"
            value={data}
            onChange={(e) => handleChange(index, e)}
            placeholder={index + 1}
          />
        </div>
      ))}
      
    </div>
  );
}

export default Forms;
