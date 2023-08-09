import React from 'react';
import './ArrayExplanation.css';

const ArrayExplanation = () => {
  return (
    <div className="array-explanation-container">
      <h3 className="array-explanation-title">Arrays</h3>
      <p className="array-explanation-description">
        Arrays are fundamental data structures that store a collection of elements of the same data type. They offer a contiguous block of memory to store elements, and each element in the array can be accessed using its index. Arrays provide efficient random access to elements, making them suitable for various applications.
      </p>
      <h4 className="array-explanation-subtitle">Characteristics of Arrays:</h4>
      <ul className="array-explanation-list">
        <li>Fixed Size: Arrays have a fixed size, meaning the number of elements they can store is determined at the time of creation. This size cannot be changed during the program's execution.</li>
        <li>Indexed Access: Elements in an array are accessed using their indices. The index starts from 0 for the first element, 1 for the second element, and so on.</li>
        <li>Homogeneous Elements: Arrays store elements of the same data type. All elements should be of the same type, be it integers, characters, or custom objects.</li>
        <li>Contiguous Memory Allocation: The elements of an array are stored in adjacent memory locations, which allows for efficient memory access.</li>
        <li>Linear Data Structure: Arrays represent a linear data structure, as elements are arranged in a linear sequence.</li>
      </ul>
      <h4 className="array-explanation-subtitle">Common Operations on Arrays:</h4>
      <ul className="array-explanation-list">
        <li>Insertion: Elements can be inserted into an array at a specific index or at the end of the array.</li>
        <li>Deletion: Elements can be deleted from an array by removing them from a specific index or based on their value.</li>
        <li>Traversal: You can traverse through the elements of an array to perform operations on each element.</li>
        <li>Searching: Arrays can be searched for specific elements to check their presence or find their index.</li>
        <li>Sorting: Elements in an array can be sorted in ascending or descending order using various sorting algorithms.</li>
      </ul>
      <h4 className="array-explanation-subtitle">Advantages of Using Arrays:</h4>
      <ul className="array-explanation-list">
        <li>Fast Access: Array elements can be accessed in constant time O(1) using their index.</li>
        <li>Memory Efficiency: Arrays use contiguous memory, which makes them memory-efficient.</li>
        <li>Easy Implementation: Arrays are simple to implement and widely supported in programming languages.</li>
        <li>Index-Based Operations: Arrays provide easy manipulation of elements using their indices.</li>
      </ul>
      <h4 className="array-explanation-subtitle">Disadvantages of Using Arrays:</h4>
      <ul className="array-explanation-list">
        <li>Fixed Size: The fixed size of arrays may lead to wastage of memory if not utilized fully.</li>
        <li>Insertion and Deletion: Insertion and deletion operations can be costly, especially in large arrays, as it may require shifting elements.</li>
      </ul>
      <button className="stack-explanation-button">Visualization</button>
    </div>
  );
};

export default ArrayExplanation;
