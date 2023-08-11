import React, { useState, useEffect } from "react";
import "./BubbleSortVisualizer.css";
import { useNavigate } from 'react-router-dom';

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const BubbleSortVisualizer1 = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const home = () => {
    navigate('/', { state: { from: 'merge' } });
  };

  useEffect(() => {
    setData(generateData(10));
  }, []);

  const generateData = (numBars) => {
    const data = [];
    for (let i = 0; i < numBars; i++) {
      data.push(Math.floor(Math.random() * 47) + 4);
    }
    return data;
  };

  const bubbleSort = async () => {
    const arr = [...data];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setData([...arr]);
          await delay(400);
        }
      }
    }
  };

  const solve = () => {
    setData(generateData(10));
  }

  return (
    <div className="bst-visualization">
      <div className="input-container">
        {/* Input elements, if any */}
      </div>
      <div className="bst">
        {data.map((value, index) => (
          <div key={index} className="node" style={{ height: `${value}vh` }}>{value}</div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={home}>Home</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={solve}>Reset Chart</button>
      </div>
    </div>
  );
};

export default BubbleSortVisualizer1;
