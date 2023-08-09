import React from 'react';
import './QueueExplanation.css';

const QueueExplanation = () => {
  return (
    <div className="queue-explanation-container">
      <h3 className="queue-explanation-title">Queue</h3>
      <p className="queue-explanation-description">
        A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It is similar to waiting in a queue or line, where the first person to join the queue is the first one to be served. In a queue, elements are inserted at the rear (enqueue) and removed from the front (dequeue).
      </p>
      <h4 className="queue-explanation-subtitle">Characteristics of a Queue:</h4>
      <ul className="queue-explanation-list">
        <li>Enqueue: Adding an element to the rear of the queue.</li>
        <li>Dequeue: Removing the front element from the queue.</li>
        <li>Front: The first element in the queue.</li>
        <li>Rear: The last element in the queue.</li>
        <li>Empty Queue: A queue with no elements.</li>
        <li>Full Queue (bounded queue): A queue with a fixed size where the enqueue operation is not possible if the queue is full.</li>
      </ul>
      <h4 className="queue-explanation-subtitle">Types of Queues:</h4>
      <ul className="queue-explanation-list">
        <li>Linear Queue: A basic queue that follows the FIFO principle.</li>
        <li>Circular Queue: A queue implemented in a circular manner to efficiently use the available space.</li>
        <li>Priority Queue: A specialized queue where elements have priorities and are served based on their priority.</li>
        <li>Double-Ended Queue (Deque): A queue that allows insertion and deletion from both ends.</li>
      </ul>
      <h4 className="queue-explanation-subtitle">Applications:</h4>
      <ul className="queue-explanation-list">
        <li>Process Scheduling: Queue data structures are used in operating systems to manage processes waiting for CPU time.</li>
        <li>Print Queue: Used to manage print jobs and print them in the order they are received.</li>
        <li>Breadth-First Search (BFS): Queue is used in BFS traversal of graphs.</li>
        <li>Task Management: Queue data structures are used in task management systems to manage tasks and their execution order.</li>
      </ul>
      <button className="stack-explanation-button">Visualization</button>
    </div>
  );
};

export default QueueExplanation;
