import React from 'react';
import './TreeExplanation.css';

const TreeExplanation = () => {
  return (
    <div className="tree-explanation-container">
      <h3 className="tree-explanation-title">Tree</h3>
      <p className="tree-explanation-description">
        A tree is a hierarchical data structure that consists of nodes connected by edges. Each tree has a root node, and every node in the tree has zero or more child nodes. Nodes with no children are called leaves. Trees are widely used to represent hierarchical relationships and organize data efficiently.
      </p>
      <h4 className="tree-explanation-subtitle">Characteristics of Trees:</h4>
      <ul className="tree-explanation-list">
        <li>Root Node: The topmost node in the tree, from which all other nodes are descendants.</li>
        <li>Parent and Child Nodes: Nodes in the tree have parent-child relationships, where one node is the parent of another node.</li>
        <li>Leaf Nodes: Nodes that have no children are called leaf nodes.</li>
        <li>Depth: The depth of a node represents the number of edges from the root to that node.</li>
        <li>Height: The height of a tree is the maximum depth of any node in the tree.</li>
      </ul>
      <h4 className="tree-explanation-subtitle">Types of Trees:</h4>
      <ul className="tree-explanation-list">
        <li>Binary Tree: A tree in which each node has at most two children, typically referred to as the left child and the right child.</li>
        <li>Binary Search Tree (BST): A binary tree where the left child of a node has a smaller value, and the right child has a greater value than the node itself.</li>
        <li>AVL Tree: A balanced binary search tree where the heights of the two child subtrees of any node differ by at most one.</li>
        <li>Red-Black Tree: A self-balancing binary search tree with color-coded nodes to ensure balanced properties.</li>
      </ul>
      <button className="stack-explanation-button">Visualization</button>
    </div>
  );
};

export default TreeExplanation;
