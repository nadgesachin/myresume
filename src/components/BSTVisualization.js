import React, { useState } from 'react';
import './BSTVisualization.css';
// Functional component representing a single node in the BST
const BSTVisualization = ({ value, left, right }) => {
  return (
    <div className="node">
      <div className="value">{value}</div>
      {left && <BSTVisualization value={left.value} left={left.left} right={left.right} />}
      {right && <BSTVisualization value={right.value} left={right.left} right={right.right} />}
      {left && (
        <div className="edge">
          <div className="edge-line" />
          <div className="edge-corner" />
        </div>
      )}
      {right && (
        <div className="edge">
          <div className="edge-line" />
          <div className="edge-corner" />
        </div>
      )}
    </div>
  );
};

// Functional component representing the entire BST
const BST = () => {
  // Define your BST structure here
  const bst = {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 15,
      left: null,
      right: null,
    },
  };

  return <BSTVisualization value={bst.value} left={bst.left} right={bst.right} />;
};

export default BSTVisualization;
