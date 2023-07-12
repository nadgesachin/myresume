import React, { useState } from "react";
import "./Queue.css";

const Queue = () => {
  const [queue, setQueue] = useState([]);

  const enqueue = () => {
    const newElement = prompt("Enter an element to enqueue:");
    setQueue([...queue, newElement]);
  };

  const dequeue = () => {
    if (queue.length === 0) {
      alert("Queue is empty!");
      return;
    }
    const updatedQueue = [...queue];
    updatedQueue.shift();
    setQueue(updatedQueue);
  };

  return (
    <div className="parent-container">
    <div className="queue-container">
      <h2>Queue Data Structure</h2>
      <div className="queue">
        {queue.length === 0 ? (
          <div className="queue-empty">Queue is empty!</div>
        ) : (
          queue.map((element, index) => (
            <div key={index} className="queue-element">
              {element}
            </div>
          ))
        )}
      </div>
      <div className="queue-buttons">
        <button onClick={enqueue}>Enqueue</button>
        <button onClick={dequeue}>Dequeue</button>
      </div>
    </div>
    </div>
  );
};

export default Queue;
