import React from 'react';
import './LinkedListExplanation.css';

const LinkedListExplanation = () => {
  return (
    <div className="linked-list-explanation-container">
      <h3 className="linked-list-explanation-title">Linked List</h3>
      <p className="linked-list-explanation-description">
        A linked list is a linear data structure where elements are stored in nodes, and each node contains a data element and a reference (link) to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory locations, making them more flexible in terms of insertion and deletion operations. Linked lists can be singly linked, where each node points only to the next node, or doubly linked, where each node points to both the next and previous nodes.
      </p>
      <h4 className="linked-list-explanation-subtitle">Characteristics of a Linked List:</h4>
      <ul className="linked-list-explanation-list">
        <li>Nodes: The basic building blocks of a linked list, containing data and a reference to the next (and previous for doubly linked lists) node.</li>
        <li>Head: The first node in the linked list.</li>
        <li>Tail (only for doubly linked lists): The last node in the linked list.</li>
        <li>Traversal: Linked lists are traversed sequentially, starting from the head (and tail for doubly linked lists) and moving to the next (and previous for doubly linked lists) node until the end of the list is reached.</li>
        <li>Insertion and Deletion: Elements can be inserted or removed from a linked list by adjusting the references in the adjacent nodes, without the need to shift other elements.</li>
      </ul>
      <h4 className="linked-list-explanation-subtitle">Types of Linked Lists:</h4>
      <ul className="linked-list-explanation-list">
        <li>Singly Linked List: Each node points to the next node in the list, forming a unidirectional sequence.</li>
        <li>Doubly Linked List: Each node points to both the next and previous nodes, forming a bidirectional sequence.</li>
        <li>Circular Linked List: The last node points back to the first node, creating a circular structure.</li>
      </ul>
      <h4 className="linked-list-explanation-subtitle">Applications:</h4>
      <ul className="linked-list-explanation-list">
        <li>Dynamic Data Structures: Linked lists provide dynamic memory allocation for elements, making them suitable for situations where the size of the data structure changes frequently.</li>
        <li>Implementing Stacks and Queues: Linked lists can be used to implement both stacks and queues.</li>
        <li>Memory Management: Linked lists play a crucial role in memory management, especially in garbage collection algorithms.</li>
      </ul>
      <button className="stack-explanation-button">Visualization</button>
    </div>
  );
};

export default LinkedListExplanation;
