import React from 'react';
import './SortingExplanation.css';

const SortingExplanation = () => {
  return (
    <div className="sorting-explanation-container">
      <h3 className="sorting-explanation-title">Sorting Algorithms</h3>
      <p className="sorting-explanation-description">
        Sorting is a fundamental operation in computer science that involves arranging elements in a specific order. Various sorting algorithms have been developed to efficiently sort data in different scenarios. Sorting is used in numerous applications such as searching, data analysis, and optimizing algorithms.
      </p>
      <h4 className="sorting-explanation-subtitle">Types of Sorting Algorithms:</h4>
      <ul className="sorting-explanation-list">
        <li>Bubble Sort: A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</li>
        <li>Selection Sort: An in-place comparison sorting algorithm that divides the input list into two parts: the sorted part at the left and the unsorted part at the right.</li>
        <li>Insertion Sort: A sorting algorithm that builds a sorted array by repeatedly inserting elements from the unsorted part into the correct position in the sorted part.</li>
        <li>Merge Sort: A divide-and-conquer sorting algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves.</li>
        <li>Quick Sort: A fast and efficient sorting algorithm that picks an element as a pivot and partitions the array around the pivot.</li>
        <li>Heap Sort: A comparison-based sorting algorithm that converts the array into a binary heap and then extracts elements from the heap to obtain a sorted array.</li>
        <li>Counting Sort: An integer sorting algorithm that works by determining the number of occurrences of each element and sorting based on the count.</li>
        <li>Radix Sort: A non-comparative sorting algorithm that sorts elements by processing individual digits or characters.</li>
        <li>Bucket Sort: A sorting algorithm that distributes elements into a fixed number of buckets and then sorts each bucket individually.</li>
      </ul>
      <h4 className="sorting-explanation-subtitle">Performance Comparison:</h4>
      <p className="sorting-explanation-performance">
        The performance of sorting algorithms is often measured in terms of time complexity, space complexity, and stability. Each sorting algorithm has its advantages and disadvantages, and the choice of algorithm depends on the size of the data, its distribution, and the required stability of the sorting.
      </p>
      <button className="stack-explanation-button">Visualization</button>
    </div>
  );
};

export default SortingExplanation;
