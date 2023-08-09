import React from 'react';
import './DSATopicExample.css';

const DSATopicExample = ({ topicName, examples}) => {
  
    return (
    <div className="dsa-topic-example">
      <h2 className="dsa-topic-name">{topicName}</h2>
      <div className="example-list">
          <div  className="example-item">
          {examples.map((example, index) => (
          <div key={index} className="example-item">
            <h3 className="example-title">Example {index + 1}</h3>
            <pre className="example-code">{example.code}</pre>
            <button className="stack-explanation-button">Visualization</button>
          </div>
        ))}
          </div>
      </div>
    </div>
  );
};

export default DSATopicExample;
