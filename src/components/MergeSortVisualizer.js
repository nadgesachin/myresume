import React, { useState, useEffect } from "react";
import "./MergeSortVisualizer.css";

const MergeSortVisualizer = () => {
  const [array, setArray] = useState([6, 2, 9, 5, 1, 8, 4, 7, 3]);
  const [sortedArray, setSortedArray] = useState([]);
  const [mergeSteps, setMergeSteps] = useState([]);
  const [sortingInProgress, setSortingInProgress] = useState(false);

  useEffect(() => {
    setArray([6, 2, 9, 5, 1, 8, 4, 7, 3]); // Reset array on component mount
  }, []);

  const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const merge = (left, right) => {
    let i = 0;
    let j = 0;
    let merged = [];

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      merged.push(left[i]);
      i++;
    }

    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }

    return merged;
  };

  const handleMergeSort = () => {
    setSortingInProgress(true);
    const sortedArray = mergeSort(array);
    animateMergeSort(sortedArray);
  };

  const animateMergeSort = (sortedArray) => {
    const mergeSteps = [];
  
    const mergeSortHelper = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }
  
      const mid = Math.floor(arr.length / 2);
      const left = mergeSortHelper(arr.slice(0, mid));
      const right = mergeSortHelper(arr.slice(mid));
  
      const merged = merge(left, right);
  
      mergeSteps.push({
        original: [...arr],
        divided: [...merged],
      });
  
      return merged;
    };
  
    mergeSortHelper(array);
  
    setMergeSteps(mergeSteps);
  
    const delay = 2000; // Delay between each step in milliseconds
    let i = 0;
  
    const interval = setInterval(() => {
      setArray(mergeSteps[i].divided);
      i++;
  
      if (i === mergeSteps.length) {
        clearInterval(interval);
        setSortedArray(sortedArray);
      }
    }, delay);
  };
  
return (
  <>
  <h2>Merge Sort</h2>
  <button onClick={handleMergeSort}>Merge Sort</button>
      <div className="array-container"><div className="step-info">
      
      <div className="step-label">Process Of Sorting:</div>
      <div className="sorted-array">
        {array.map((value, idx) => (
          <>
          <div className="array-element sorted-horizontal" key={idx}>
            {value}
          </div>
          </>
        ))}
      </div>
    </div>
        <div className="steps-container">
          {mergeSteps.map((step, index) => (
            <div key={index} className="step" >
              <div className="step-info">
                <div className="step-label">Step {index + 1}:</div>
                <div className="splitting-step">
                  <div className="step-label">Splitting:</div>
                  {step.original.map((value, idx) => (
                    <div className="array-element original" key={idx}>
                      {value}
                    </div>
                  ))}
                </div>
              </div>
              {index < mergeSteps.length - 1 && (
                <div className="merging-step">
                  <div className="step-label">Merging:</div>
                  {step.divided.map((value, idx) => (
                    <div className="array-element divided" key={idx}>
                      {value}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {sortedArray.length > 0 && (
          <div className="step-info">
            <div className="step-label">Sorted:</div>
            <div className="sorted-array">
              {sortedArray.map((value, idx) => (
                <div className="array-element sorted-horizontal" key={idx}>
                  {value}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </>
    );
};

export default MergeSortVisualizer;
