import React, { useState } from "react";
import "./Stack.css";

const Stack = () => {
  const [stack, setStack] = useState([]);

  const pushToStack = () => {
    const newElement = prompt("Enter an element to push:");
    setStack([...stack,newElement]); // Insert the new element at the beginning
  };

  const popFromStack = () => {
    if (stack.length === 0) {
      alert("Stack is empty!");
      return;
    }
    const updatedStack = [...stack];
    updatedStack.pop(); // Remove the last element
    setStack(updatedStack);
  };
  
  

  return (
    <div className="stack-container">
      <h2>Stack Data Structure</h2>
      <div className="stack">
        {stack.length === 0 ? (
          <div className="stack-empty">Stack is empty!</div>
        ) : (
          stack.map((element, index) => (
            <div key={index} className="stack-element">
              {element}
            </div>
          ))
        )}
      </div>
      <div className="stack-buttons">
        <button onClick={pushToStack}>Push</button>
        <button onClick={popFromStack}>Pop</button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Stack />
    </div>
  );
}
