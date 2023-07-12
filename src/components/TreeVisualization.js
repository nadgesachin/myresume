import React, { useState } from 'react';
import { Tree } from 'react-d3-tree';

const TreeVisualization = () => {
  const initialTreeData = [
    {
      name: 'Root',
      value: 1,
      children: [
        {
          name: 'Child 1',
          value: 2,
          children: [
            {
              name: 'Grandchild 1',
              value: 4,
            },
            {
              name: 'Grandchild 2',
              value: 5,
            },
          ],
        },
        {
          name: 'Child 2',
          value: 3,
        },
      ],
    },
  ];

  const [treeData, setTreeData] = useState(initialTreeData);
  const [searchValue, setSearchValue] = useState('');
  const [foundNode, setFoundNode] = useState(null);

  const containerStyles = {
    width: '100%',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const treeConfig = {
    orientation: 'vertical',
    nodeSize: { x: 200, y: 100 },
    separation: { siblings: 1, nonSiblings: 1 },
  };

  const handleSearch = () => {
    const result = traverseTree(treeData, searchValue);
    if (result) {
      setFoundNode(result);
    } else {
      setFoundNode(null);
    }
  };

  const traverseTree = (tree, value) => {
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.value === value) {
        return node;
      } else if (node.children) {
        const result = traverseTree(node.children, value);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  const renderCustomNode = ({ nodeDatum }) => {
    const isFoundNode = foundNode && foundNode.value === nodeDatum.value;
    const nodeColor = isFoundNode ? '#ff0000' : '#ffffff';

    return (
      <g>
        <circle r={10} fill={nodeColor} stroke="#000" strokeWidth={1} />
        <text textAnchor="middle" y={4}>
          {nodeDatum.value}
        </text>
      </g>
    );
  };

  return (
    <div style={containerStyles}>
      <div>
        <input
          type="number"
          placeholder="Enter a number"
          value={searchValue}
          onChange={(e) => setSearchValue(parseInt(e.target.value))}
          style={{ width: '50%', height: '50%' }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        <Tree
          data={treeData}
          orientation="vertical"
          translate={{ x: 100, y: 50 }}
          {...treeConfig}
          nodeSvgShape={{ shape: 'circle', shapeProps: { r: 10, fill: '#fff', stroke: '#000' } }}
          renderCustomNodeElement={renderCustomNode}
        />
      </div>
    </div>
  );
};

export default TreeVisualization;
