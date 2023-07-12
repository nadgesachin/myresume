// import React, { useState } from "react";
// import "./LinkedList.css";

// const LinkedList = () => {
//   const [head, setHead] = useState(null);

//   const insertNode = () => {
//     const value = prompt("Enter a value to insert:");
//     const newNode = { value, next: null };
  
//     if (!head) {
//       setHead(newNode);
//     } else {
//       let currentNode = head;
//       while (currentNode.next) {
//         currentNode = currentNode.next;
//       }
//       currentNode.next = newNode;
//     }
  
//     setHead(Object.assign({}, head)); // Update the state with a new object reference
//   };
  

//   const deleteNode = () => {
//     if (!head) {
//       alert("Linked list is empty!");
//       return;
//     }
  
//     if (!head.next) {
//       setHead(null);
//       return;
//     }
  
//     let currentNode = head;
//     let previousNode = null;
//     while (currentNode.next) {
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//     }
  
//     if (previousNode) {
//       previousNode.next = null;
//     } else {
//       setHead(null);
//     }
  
//     // Update the state with a new object reference
//     setHead(Object.assign({}, head));
//   };
  

//   const renderNodes = () => {
//     if (!head) {
//       return <div className="linked-list-empty">Linked list is empty!</div>;
//     }
  
//     let currentNode = head;
//     const nodes = [];
//     while (currentNode) {
//       nodes.push(
//         <React.Fragment key={currentNode.value}>
//           <div className="linked-list-node">
//             <span className="linked-list-value">{currentNode.value}</span>
//           </div>
//           {currentNode.next && <span className="linked-list-arrow">→</span>}
//         </React.Fragment>
//       );
//       currentNode = currentNode.next;
//     }
  
//     return nodes;
//   };
  
  
//   return (
//     <div className="linked-list-container">
//       <h2>Linked List Data Structure</h2>
//       <div className="linked-list">
//         {renderNodes()}
//       </div>
//       <div className="linked-list-buttons">
//         <button onClick={insertNode}>Insert</button>
//         <button onClick={deleteNode}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default LinkedList;



import React, { useState,useEffect } from "react";
import "./LinkedList.css";

const LinkedList = () => {
  const [head, setHead] = useState(null);
  const [reversed, setReversed] = useState(false);

  const insertAtFirst = () => {
    const value = prompt("Enter a value to insert at the first position:");
    const newNode = { value, next: null };

    if (!head) {
      setHead(newNode);
    } else {
      newNode.next = head;
      setHead(newNode);
    }
  };

  const insertAtLast = () => {
    const value = prompt("Enter a value to insert at the last position:");
    const newNode = { value, next: null };
  
    if (!head) {
      setHead(newNode);
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  
    setHead(Object.assign({}, head));
  };
  

  const deleteAtFirst = () => {
    if (!head) {
      alert("Linked list is empty!");
      return;
    }

    setHead(head.next);
    // setHead(Object.assign({}, head));
  };

  const deleteAtLast = () => {
    if (!head) {
      alert("Linked list is empty!");
      return;
    }

    if (!head.next) {
      setHead(null);
      return;
    }

    let currentNode = head;
    let previousNode = null;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    setHead(Object.assign({}, head));
  };

  const insertAtMiddle = () => {
    const value = prompt("Enter a value to insert at the middle position:");
    const newNode = { value, next: null };
  
    if (!head) {
      setHead(newNode);
      return;
    }
  
    let slowPointer = head;
    let fastPointer = head;
  
    while (fastPointer && fastPointer.next && fastPointer.next.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
  
    newNode.next = slowPointer.next;
    slowPointer.next = newNode;
  
    setHead(Object.assign({}, head));
  };
  

  const deleteAtMiddle = () => {
    if (!head) {
      alert("Linked list is empty!");
      return;
    }
  
    const value = prompt("Enter the value of the node to delete:");
    let currentNode = head;
    let previousNode = null;
  
    while (currentNode) {
      if (currentNode.value === value) {
        if (previousNode) {
          previousNode.next = currentNode.next;
        } else {
          setHead(currentNode.next);
        }
        setHead(Object.assign({}, head));
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  
    alert("Node with the given value not found in the linked list!");
  };
// Function to delete the entire linked list
  const deleteLinkedList = () => {
    setHead(null);
  };

// Function to reverse the linked list
const reverseLinkedList = async () => {
    if (!head) {
      alert("Linked list is empty!");
      return;
    }
  
    setReversed(true);
  
    let currentNode = head;
    let previousNode = null;
    let nextNode = null;
  
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
  
      await delay(1000); // Delay time in milliseconds
  
      // Update the linked list state
      setHead(currentNode);
  
      previousNode = currentNode;
      currentNode = nextNode;
    }
  
    setReversed(false);
  };
  
  // Function to introduce a delay using Promises
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  

  const renderNodes = () => {
    if (!head) {
      return <div className="linked-list-empty">Linked list is empty!</div>;
    }

    let currentNode = head;
    const nodes = [];
    while (currentNode) {
      nodes.push(
        <React.Fragment key={currentNode.value}>
          <div className="linked-list-node">
            <span className="linked-list-value">{currentNode.value}</span>
          </div>
          {currentNode.next && <span className="linked-list-arrow">→</span>}
        </React.Fragment>
      );
      currentNode = currentNode.next;
    }

    return nodes;
  };
  useEffect(() => {
    if (reversed) {
      setTimeout(() => {
        setHead(Object.assign({}, head));
        setReversed(false);
      }, 1000); // Delay time in milliseconds
    }
  }, [reversed, head]);
  return (
    <div className="linked-list-container">
      <h2>Linked List Data Structure</h2>
      <div className="linked-list">{renderNodes()}</div>
      <div className="linked-list-buttons">
        <button onClick={insertAtFirst}>Insert</button>
        <button onClick={insertAtFirst}>Insert at First</button>
        <button onClick={insertAtLast}>Insert at Last</button>
        <button onClick={deleteAtFirst}>Delete at First</button>
        <button onClick={deleteAtLast}>Delete at Last</button>
        <button onClick={insertAtMiddle}>Insert at Middle</button>
        <button onClick={deleteAtMiddle}>Delete at Middle</button>
        <button onClick={() => deleteLinkedList()}>Delete</button>
        <button onClick={() => reverseLinkedList()} disabled={reversed}>Reverse</button>
      </div>
    </div>
  );
};

export default LinkedList;
