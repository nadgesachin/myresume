import React from 'react';
import './HeapExplanation.css';

const HeapExplanation = () => {
  return (
    <div className="heap-explanation-container">
      <h3 className="heap-explanation-title">Heap</h3>
      <p className="heap-explanation-description">
        A heap is a specialized binary tree-based data structure that satisfies the heap property. In a max heap, each node's value is greater than or equal to the values of its children, making the root node the largest element in the heap. Conversely, in a min heap, each node's value is less than or equal to the values of its children, making the root node the smallest element in the heap. Heaps are commonly used to implement priority queues and efficiently find the maximum or minimum element in a collection.
      </p>
      <h4 className="heap-explanation-subtitle">Characteristics of a Heap:</h4>
      <ul className="heap-explanation-list">
        <li>Binary Tree Structure: A heap is a binary tree with the following properties:</li>
        <ul>
          <li>The tree is a complete binary tree, meaning all levels are filled except possibly the last level, and nodes are filled from left to right.</li>
          <li>In a max heap, the value of each node is greater than or equal to the values of its children.</li>
          <li>In a min heap, the value of each node is less than or equal to the values of its children.</li>
        </ul>
        <li>Heap Operations:</li>
        <ul>
          <li>Insertion: Adding a new element to the heap while maintaining the heap property.</li>
          <li>Deletion: Removing the root element (maximum or minimum) from the heap while maintaining the heap property.</li>
          <li>Heapify: Converting an array into a heap data structure by arranging the elements to satisfy the heap property.</li>
        </ul>
        <li>Applications:</li>
        <ul>
          <li>Priority Queues: Heaps can be used to implement priority queues, where elements with higher priorities are served before elements with lower priorities.</li>
          <li>Heap Sort: Heapsort is an efficient sorting algorithm based on the heap data structure.</li>
          <li>Selection Algorithms: Heaps can be used to efficiently find the kth largest or smallest element in a collection.</li>
        </ul>
      </ul>
      <button className="stack-explanation-button">Visualization</button>
    </div>
  );
};

export default HeapExplanation;
