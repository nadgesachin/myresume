import React, { useState, useEffect} from "react";
import "./BFS.css";
import { useNavigate } from 'react-router-dom';
const BFS = () => {
  const [graph, setGraph] = useState({
    nodes: [
      { id: 0, value: 5, x: 50, y: 50 },
      { id: 1, value: 8, x: 200, y: 50 },
      { id: 2, value: 3, x: 150, y: 150 },
      { id: 3, value: 2, x: 250, y: 100 },
      { id: 4, value: 6, x: 300, y: 200 },
      { id: 5, value: 1, x: 400, y: 50 },
      { id: 6, value: 4, x: 350, y: 150 },
      { id: 7, value: 9, x: 450, y: 100 },
      { id: 8, value: 7, x: 500, y: 200 },
      { id: 9, value: 10, x: 600, y: 50 },
      { id: 10, value: 12, x: 550, y: 150 },
      { id: 11, value: 11, x: 650, y: 100 },
      { id: 12, value: 15, x: 700, y: 200 },
      { id: 13, value: 13, x: 800, y: 50 },
      { id: 14, value: 18, x: 750, y: 150 },
      { id: 15, value: 17, x: 850, y: 100 },
      { id: 16, value: 14, x: 900, y: 200 },
      { id: 17, value: 20, x: 1000, y: 50 },
      { id: 18, value: 19, x: 950, y: 150 },
      { id: 19, value: 16, x: 1050, y: 100 },
    ],
    edges: [
      { source: 0, target: 1 },
      { source: 0, target: 2 },
      { source: 1, target: 3 },
      { source: 1, target: 4 },
      { source: 2, target: 5 },
      { source: 2, target: 6 },
      { source: 3, target: 7 },
      { source: 4, target: 8 },
      { source: 5, target: 9 },
      { source: 5, target: 10 },
      { source: 6, target: 11 },
      { source: 7, target: 12 },
      { source: 8, target: 13 },
      { source: 8, target: 14 },
      { source: 9, target: 15 },
      { source: 10, target: 16 },
      { source: 11, target: 17 },
      { source: 12, target: 18 },
      { source: 13, target: 19 },
    ],
  });

  const [visited, setVisited] = useState([]);
  const [bfsQueue, setBFSQueue] = useState([]);
  const [isBFSRunning, setIsBFSRunning] = useState(false);

  const navigate = useNavigate();
  const home = () => {
    navigate('/', { state: { from: 'merge' } });
  };

  useEffect(() => {
    if (isBFSRunning) {
      const interval = setInterval(() => {
        if (bfsQueue.length === 0) {
          setIsBFSRunning(false);
          clearInterval(interval);
        } else {
          const node = bfsQueue.shift();
          setVisited((prevVisited) => [...prevVisited, node]);
          const neighbors = graph.edges
            .filter((edge) => edge.source === node)
            .map((edge) => edge.target);
          neighbors.forEach((neighbor) => {
            if (!visited.includes(neighbor) && !bfsQueue.includes(neighbor)) {
              bfsQueue.push(neighbor);
            }
          });
        }
      }, 1000); // Delay between each step in milliseconds
    }
  }, [bfsQueue, visited, graph.edges, isBFSRunning]);

  const handleBFS = () => {
    setVisited([]);
    setBFSQueue([0]);
    setIsBFSRunning(true);
  };

  return (
    <>
    <button onClick={handleBFS}>BFS</button>
    <button onClick={home} >Home</button>
    <div className="graph-container">
      <svg className="graph-svg">
        {graph.edges.map((edge, index) => (
          <line
            key={index}
            className="graph-edge"
            x1={graph.nodes[edge.source].x}
            y1={graph.nodes[edge.source].y}
            x2={graph.nodes[edge.target].x}
            y2={graph.nodes[edge.target].y}
          />
        ))}
        {graph.nodes.map((node) => (
          <circle
            key={node.id}
            className={`graph-node ${visited.includes(node.id) ? "visited" : ""}`}
            cx={node.x}
            cy={node.y}
            r={20}
          >
            <text className="graph-node-text" x={node.x} y={node.y}>
              {node.id}
            </text>
          </circle>
        ))}
      </svg>
    </div>
    
    </>
  );
};

export default BFS;