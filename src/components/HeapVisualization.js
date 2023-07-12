import React, { useState } from 'react';
import './HeapVisualization.css';

const HeapVisualization = () => {
  const [heap, setHeap] = useState([]);
  const [value, setValue] = useState('');

  const insertNode = () => {
    if (value !== '') {
      const newNode = parseInt(value);
      const newHeap = [...heap, newNode];
      // Perform heapify operation to maintain heap property
      heapify(newHeap, newHeap.length - 1);
      setHeap(newHeap);
      setValue('');
    }
  };

  const heapify = (arr, index) => {
    const parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && arr[parentIndex] < arr[index]) {
      // Swap parent and child nodes
      [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]];
      // Recursively heapify the parent node
      heapify(arr, parentIndex);
    }
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="heap-visualization">
      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter a value"
          className="input-box"
        />
        <button onClick={insertNode}>Insert</button>
      </div>

      <div className="heap">
        {heap.map((node, index) => (
          <div className="node" key={index}>
            {node}
            {index > 0 && <div className="edge"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeapVisualization;
