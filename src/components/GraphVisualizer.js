

import React, { useState, useRef, useEffect } from "react";
import "./GraphVisualizer.css";

const GraphVisualizer = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [nodeOption, setNodeOption] = useState(true);
  const [edgeOption, setEdgeOption] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [visitedNodes, setVisitedNodes] = useState(new Set());
  const [delay, setDelay] = useState(1000); // Delay between each step in milliseconds
  const svgRef = useRef(null);

  useEffect(() => {
    if (visitedNodes.size > 0) {
      const resetTimeout = setTimeout(() => {
        setVisitedNodes(new Set());
      }, delay * (visitedNodes.size + 1));

      return () => clearTimeout(resetTimeout);
    }
  }, [visitedNodes, delay]);

  const handleNodeClick = (event) => {
    if (nodeOption) {
      const svg = svgRef.current;
      const point = svg.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      const cursorPoint = point.matrixTransform(svg.getScreenCTM().inverse());

      const newNode = {
        id: nodes.length + 1,
        x: cursorPoint.x,
        y: cursorPoint.y,
      };

      setNodes((prevNodes) => [...prevNodes, newNode]);
    }
  };

  const handleEdgeClick = (node) => {
    if (edgeOption) {
      if (selectedNode) {
        const newEdge = {
          source: selectedNode,
          target: node.id,
        };

        setEdges((prevEdges) => [...prevEdges, newEdge]);
        setSelectedNode(null);
      } else {
        setSelectedNode(node.id);
      }
    }
  };

  const bfs = (startNodeId) => {
    const queue = [];
    const visited = new Set();

    queue.push(startNodeId);
    visited.add(startNodeId);

    const bfsTraversal = () => {
      if (queue.length > 0) {
        const currentNodeId = queue.shift();

        const adjacentEdges = edges.filter(
          (edge) => edge.source === currentNodeId || edge.target === currentNodeId
        );

        adjacentEdges.forEach((edge) => {
          const nextNodeId = edge.source === currentNodeId ? edge.target : edge.source;

          if (!visited.has(nextNodeId)) {
            queue.push(nextNodeId);
            visited.add(nextNodeId);
          }
        });

        setVisitedNodes(new Set(visited));

        setTimeout(bfsTraversal, delay);
      }
    };

    bfsTraversal();
  };

  const dfs = (startNodeId) => {
    const stack = [startNodeId];
    const visited = new Set();
    
    const dfsTraversal = () => {
      if (stack.length === 0) return;
      
      const nodeId = stack.pop();
      visited.add(nodeId);
      
      const adjacentEdges = edges.filter(
        (edge) => edge.source === nodeId || edge.target === nodeId
      );
      
      adjacentEdges.forEach((edge) => {
        const nextNodeId = edge.source === nodeId ? edge.target : edge.source;
        
        if (!visited.has(nextNodeId)) {
          stack.push(nextNodeId);
        }
      });
      
      setVisitedNodes(new Set(visited));
      
      setTimeout(dfsTraversal, delay);
    };
    
    dfsTraversal();
  };
  

  const handleBFS = () => {
    if (selectedNode) {
      bfs(selectedNode);
    }
  };

  const handleDFS = () => {
    if (selectedNode) {
      dfs(selectedNode);
    }
  };

  const handleReset = () => {
    setVisitedNodes(new Set());
  };

  return (
    <div className="graph-container">
      <div className="options-container">
        <div>
          <label>
            <input
              type="radio"
              name="option"
              checked={nodeOption}
              onChange={() => {
                setNodeOption(true);
                setEdgeOption(false);
              }}
            />
            Node
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="option"
              checked={edgeOption}
              onChange={() => {
                setNodeOption(false);
                setEdgeOption(true);
              }}
            />
            Edge
          </label>
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={handleBFS} disabled={!selectedNode}>
          BFS
        </button>
        <button onClick={handleDFS} disabled={!selectedNode}>
          DFS
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
      <svg className="graph-svg" ref={svgRef} onClick={handleNodeClick}>
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
            className={`graph-node ${selectedNode === node.id ? "selected" : ""} ${
              visitedNodes.has(node.id) ? "visited" : ""
            }`}
            cx={node.x}
            cy={node.y}
            r={20}
            onClick={() => handleEdgeClick(node)}
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
  );
};

export default GraphVisualizer;


