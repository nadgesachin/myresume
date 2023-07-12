
import React, { useState } from "react";
import "./DFS.css";
import { useNavigate } from 'react-router-dom';

const DFS = () => {
  const [nodes, setNodes] = useState([
    { id: 1, x: 100, y: 100 },
    { id: 2, x: 300, y: 100 },
    { id: 3, x: 200, y: 200 },
    { id: 4, x: 100, y: 300 },
    { id: 5, x: 300, y: 300 },
    { id: 6, x: 400, y: 100 },
    { id: 7, x: 500, y: 200 },
    { id: 8, x: 400, y: 300 },
    { id: 9, x: 600, y: 100 },
    { id: 10, x: 700, y: 200 },
  ]);

  const [edges, setEdges] = useState([
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 5 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 7 },
    { source: 7, target: 8 },
    { source: 8, target: 9 },
    { source: 9, target: 10 },
  ]);

  const [visited, setVisited] = useState([]);

  const dfs = (nodeId) => {
    setVisited((prevVisited) => [...prevVisited, nodeId]);

    const adjacentEdges = edges.filter(
      (edge) => edge.source === nodeId || edge.target === nodeId
    );

    adjacentEdges.forEach((edge, index) => {
      const nextNodeId = edge.source === nodeId ? edge.target : edge.source;

      setTimeout(() => {
        if (!visited.includes(nextNodeId)) {
          dfs(nextNodeId);
        }
      }, (index + 1) * 1000);
    });
  };

  const handleDFS = () => {
    setVisited([]);
    dfs(1); // Start DFS from node with id 1
  };


  const navigate = useNavigate();
  const home = () => {
    navigate('/', { state: { from: 'merge' } });
  };

  return (
    <>
     <button onClick={handleDFS}>DFS</button>
     <button onClick={home} >Home</button>
    <div className="graph-container">
      <svg className="graph-svg">
        {edges.map((edge, index) => (
          <line
            key={index}
            className="graph-edge"
            x1={nodes[edge.source - 1].x}
            y1={nodes[edge.source - 1].y}
            x2={nodes[edge.target - 1].x}
            y2={nodes[edge.target - 1].y}
          />
        ))}
        {nodes.map((node, index) => (
          <circle
            key={index}
            className={`graph-node ${
              visited.includes(node.id) ? "visited" : ""
            }`}
            cx={node.x}
            cy={node.y}
            r={20}
          />
        ))}
        {nodes.map((node, index) => (
          <text
            key={index}
            className="graph-node-text"
            x={node.x}
            y={node.y}
            dy="0.35em"
          >
            {node.id}
          </text>
        ))}
      </svg>
    </div>
   </>
  );
};

export default DFS;
