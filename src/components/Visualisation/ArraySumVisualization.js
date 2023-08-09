import React, { useState } from 'react';
import './ArraySumVisualization.css';

const ArraySumVisualization = () => {
  const [selectedIndices, setSelectedIndices] = useState([]);

  const array = [2, 4, 6, 8, 10];
  const target = 12;

  const handleVisualization = () => {
    const indices = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          indices.push(i, j);
          break;
        }
      }
    }
    setSelectedIndices(indices);
  };

  return (
    <div className="array-sum-visualization">
      <h3>Array Sum Visualization</h3>
      <div className="array-container">
        {array.map((num, index) => (
          <div
            key={index}
            className={`array-cell ${selectedIndices.includes(index) ? 'selected' : ''}`}
          >
            {num}
          </div>
        ))}
      </div>
      <button onClick={handleVisualization}>Visualize</button>
    </div>
  );
};

export default ArraySumVisualization;
