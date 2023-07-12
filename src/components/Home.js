
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const bubblesort = () => {
    navigate('/bubblesort', { state: { from: 'bubblesort' } });
  };

  const insertionsort = () => {
    navigate('/insertionsort', { state: { from: 'insertionsort' } });
  };

  const sudoku = () => {
    navigate('/sudoku', { state: { from: 'sudoku' } });
  };
  const mergesort = () => {
    navigate('/mergesort', { state: { from: 'mergesort' } });
  };
  const graph = () => {
    navigate('/graph', { state: { from: 'graph' } });
  };

  const tree = () => {
    navigate('/tree', { state: { from: 'graph' } });
  };
  const stack = () => {
    navigate('/stack', { state: { from: 'graph' } });
  };
  const queue = () => {
    navigate('/queue', { state: { from: 'graph' } });
  };
  const linkedlist = () => {
    navigate('/linkedlist', { state: { from: 'graph' } });
  };
  const heap = () => {
    navigate('/heap', { state: { from: 'graph' } });
  }; 
  const bst = () => {
    navigate('/bst', { state: { from: 'graph' } });
  };
  return (
    <>
      <button onClick={bubblesort} className="merge-btn">
        BubbleSort Visualizer
      </button>
      <button onClick={insertionsort} className="merge-btn">
        InsertionSort Visualiser
      </button>
      <button onClick={sudoku} className="merge-btn">
        Sudoku Visualizer
      </button>
      <button onClick={mergesort} className="merge-btn">
        Merge Sort
      </button>
      <button onClick={graph} className="merge-btn">
        Graph
      </button>
      <button onClick={tree} className="merge-btn">
        Tree
      </button>
      <button onClick={stack} className="merge-btn">
        Stack
      </button>
      <button onClick={queue} className="merge-btn">
        Queue
      </button>
      <button onClick={linkedlist} className="merge-btn">
        Linked List
      </button>
      <button onClick={heap} className="merge-btn">
      Heap
      </button>
      <button onClick={bst} className="merge-btn">
      BST
      </button>
    </>
  );
};

export default Home;
