
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const bubblesort = () => {
//     navigate('/bubblesort', { state: { from: 'bubblesort' } });
//   };

//   const insertionsort = () => {
//     navigate('/insertionsort', { state: { from: 'insertionsort' } });
//   };

//   const sudoku = () => {
//     navigate('/sudoku', { state: { from: 'sudoku' } });
//   };
//   const mergesort = () => {
//     navigate('/mergesort', { state: { from: 'mergesort' } });
//   };
//   const graph = () => {
//     navigate('/graph', { state: { from: 'graph' } });
//   };

//   const tree = () => {
//     navigate('/tree', { state: { from: 'graph' } });
//   };
//   const stack = () => {
//     navigate('/stack', { state: { from: 'graph' } });
//   };
//   const queue = () => {
//     navigate('/queue', { state: { from: 'graph' } });
//   };
//   const linkedlist = () => {
//     navigate('/linkedlist', { state: { from: 'graph' } });
//   };
//   const heap = () => {
//     navigate('/heap', { state: { from: 'graph' } });
//   }; 
//   const bst = () => {
//     navigate('/bst', { state: { from: 'graph' } });
//   };
//   return (
//     <>
//       <button onClick={bubblesort} className="merge-btn">
//         BubbleSort Visualizer
//       </button>
//       <button onClick={insertionsort} className="merge-btn">
//         InsertionSort Visualiser
//       </button>
//       <button onClick={sudoku} className="merge-btn">
//         Sudoku Visualizer
//       </button>
//       <button onClick={mergesort} className="merge-btn">
//         Merge Sort
//       </button>
//       <button onClick={graph} className="merge-btn">
//         Graph
//       </button>
//       <button onClick={tree} className="merge-btn">
//         Tree
//       </button>
//       <button onClick={stack} className="merge-btn">
//         Stack
//       </button>
//       <button onClick={queue} className="merge-btn">
//         Queue
//       </button>
//       <button onClick={linkedlist} className="merge-btn">
//         Linked List
//       </button>
//       <button onClick={heap} className="merge-btn">
//       Heap
//       </button>
//       <button onClick={bst} className="merge-btn">
//       BST
//       </button>
//     </>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import StringExplanation from '../components/ExplainTopics/StringExplanation';
import ArrayExplanation from './ExplainTopics/ArrayExplanation';
import LinkedListExplanation from './ExplainTopics/LinkedListExplanation';
import QueueExplanation from './ExplainTopics/QueueExplanation';
import TreeExplanation from './ExplainTopics/TreeExplanation';
import HeapExplanation from './ExplainTopics/HeapExplanation';
import GraphExplanation from './ExplainTopics/GraphExplanation';
import StackExplanation from './ExplainTopics/StackExplanation';
import SortingExplanation from './ExplainTopics/SortingExplanation';
import examplesArray from '../components/Examples/ExampleData'
import DSATopicExample from './Examples/DSATopicExample';

const Home = () => {
    return (
        <div className="home-container">
            <section className="home-banner">
                <h1>Welcome to DSA Visualizer</h1>
                <p>Explore the complexities and intricacies of Data Structures and Algorithms through interactive visualizations, theory, and problems.</p>
            </section>
            
            <section className="home-visualizations">
                <h2>Topics</h2>
                <div className="topics-list"> 
                <ArrayExplanation/>
                 </div> 
                <div className="topics-list"> 
                <StringExplanation/>
                 </div> 
                 <div className="topics-list"> 
                <LinkedListExplanation/>
                 </div>
                 <div className="topics-list"> 
                <QueueExplanation/>
                 </div>
                 <div className="topics-list"> 
                <TreeExplanation/>
                 </div>
                 <div className="topics-list"> 
                <HeapExplanation/>
                 </div>
                 <div className="topics-list"> 
                <GraphExplanation/>
                 </div>
                 <div className="topics-list"> 
                <StackExplanation/>
                 </div>
                 <div className="topics-list"> 
                <SortingExplanation/>
                 </div>

            </section>
            
            <section className="home-theory">
                <h2>Theory & Explanations</h2>

                <div className="theory-card">
                  <h3>Graphs</h3>
                  <p>A graph is a set of nodes connected by edges. They can be used to represent virtually any kind of multi-way relational data.
                  </p>
                  <Link to="/graph">Visualize</Link>
              </div>

              <div className="theory-card">
                  <h3>Trees</h3>
                  <p>Trees are hierarchical data structures that have a root and child nodes. They represent hierarchical relationships between objects.
                  </p>
                  <Link to="/tree">Visualize</Link>
              </div>

                {/* Add other DSA theory cards similarly */}
            </section>
            
            <section className="home-problems">
                <h2>Sample Problems</h2>
                {/* { console.log(examplesArray.topicName)} */}
                {examplesArray.map((topic, index) => (
                  <DSATopicExample key={index} topicName={topic.topicName} examples={topic.examples} />
                ))}

                {/* Add other DSA problems similarly */}
            </section>



            <section className="home-resources">
            <h2>Recommended Resources</h2>
            <div className="resource-card">
                <h3>Books</h3>
                <ul>
                    <li><a href="https://example.com/book1">Data Structures and Algorithms Made Easy</a></li>
                    <li><a href="https://example.com/book2">Introduction to Algorithms</a></li>
                </ul>
            </div>
            <div className="resource-card">
                <h3>Online Courses</h3>
                <ul>
                    <li><a href="https://coursera.org/examplecourse">Mastering Data Structures on Coursera</a></li>
                    <li><a href="https://udemy.com/examplecourse">Algorithms Bootcamp on Udemy</a></li>
                </ul>
            </div>
            <div className="resource-card">
            <h3>Graphs</h3>
            <ul>
                <li><a href="#">Graph Theory Basics</a></li>
                <li><a href="#">Depth First Search Explained</a></li>
                ... // More resources for Graphs
            </ul>
          </div>

          <div className="resource-card">
              <h3>Trees</h3>
              <ul>
                  <li><a href="#">Binary Trees Introduction</a></li>
                  <li><a href="#">Balanced Trees and AVL Trees</a></li>
                  ... // More resources for Trees
              </ul>
          </div>

            {/* Add other resource types similarly */}
            </section>

            <section className="home-testimonials">
            <h2>What Our Users Say</h2>
            <div className="testimonial-card">
                <blockquote>
                    "This visualizer has been a game-changer for my understanding of complex algorithms!"
                </blockquote>
                <cite>- Jane Doe, Student at XYZ University</cite>
            </div>
            <div className="testimonial-card">
                <blockquote>
                    "A must-use tool for every computer science student."
                </blockquote>
                <cite>- John Smith, Software Engineer at ABC Corp</cite>
            </div>
            {/* Add other testimonials similarly */}
            </section>

            {/* Add sections for Live Examples, Resources, Testimonials, etc. similarly */}

        </div>
    );
};

export default Home;
