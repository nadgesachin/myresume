import React from 'react';
import './GraphExplanation.css';

const GraphExplanation = () => {
  return (
    <div className="graph-explanation-container">
      <h3 className="graph-explanation-title">Graph</h3>
      <p className="graph-explanation-description">
        A graph is a collection of nodes (vertices) connected by edges. It is a versatile data structure used to represent various types of relationships between objects. Graphs are widely used in computer science, including social networks, routing algorithms, and modeling complex systems.
      </p>
      <h4 className="graph-explanation-subtitle">Characteristics of Graphs:</h4>
      <ul className="graph-explanation-list">
        <li>Nodes (Vertices): Represent entities or objects in the graph.</li>
        <li>Edges: Represent relationships between nodes.</li>
        <li>Directed vs. Undirected: In directed graphs, edges have a specific direction (from one node to another), while in undirected graphs, edges have no direction.</li>
        <li>Weighted vs. Unweighted: In weighted graphs, edges have a weight or cost associated with them, while in unweighted graphs, all edges have the same weight.</li>
        <li>Cyclic vs. Acyclic: Graphs that contain cycles (at least one path that starts and ends at the same node) are cyclic, while graphs without cycles are acyclic.</li>
      </ul>
      <h4 className="graph-explanation-subtitle">Types of Graphs:</h4>
      <ul className="graph-explanation-list">
        <li>Undirected Graph: A graph in which edges have no direction, and the connection between nodes is bidirectional.</li>
        <li>Directed Graph (Digraph): A graph in which edges have a specific direction from one node to another.</li>
        <li>Weighted Graph: A graph in which edges have weights or costs associated with them.</li>
        <li>Tree: A connected acyclic undirected graph with N nodes and N-1 edges.</li>
      </ul>
      <button className="stack-explanation-button">Visualization</button>
    </div>
  );
};

export default GraphExplanation;
