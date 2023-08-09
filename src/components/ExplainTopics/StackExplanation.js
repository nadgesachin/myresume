import React from 'react';
import './StackExplanation.css';

const StackExplanation = () => {
  return (
    <div className="stack-explanation-container">
      <h3 className="stack-explanation-title">Stack</h3>
      <p className="stack-explanation-description">
        A stack is an abstract data type that follows the Last-In-First-Out (LIFO) principle. It represents a collection of elements with two main operations: push (to add an element) and pop (to remove the top element). The last element added to the stack is the first one to be removed. Stacks can be implemented using arrays or linked lists.
      </p>
      <h4 className="stack-explanation-subtitle">Characteristics of Stacks:</h4>
      <ul className="stack-explanation-list">
        <li>Last-In-First-Out (LIFO): The last element added to the stack is the first one to be removed.</li>
        <li>Two Main Operations: Stacks support two primary operations: push (to add an element) and pop (to remove the top element).</li>
        <li>Top Element: The top of the stack represents the most recently added element.</li>
        <li>Empty Stack: When the stack has no elements, it is considered empty.</li>
      </ul>
      <h4 className="stack-explanation-subtitle">Common Operations on Stacks:</h4>
      <ul className="stack-explanation-list">
        <li>Push: Adds an element to the top of the stack.</li>
        <li>Pop: Removes the top element from the stack.</li>
        <li>Peek: Retrieves the top element without removing it from the stack.</li>
        <li>isEmpty: Checks whether the stack is empty.</li>
        <li>Size: Returns the number of elements in the stack.</li>
      </ul>
      <button className="stack-explanation-button">Visualization</button>
    </div>
  );
};

export default StackExplanation;
