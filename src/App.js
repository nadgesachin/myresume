import BubbleSortVisualizer1 from "./components/BubbleSortVisualizer1";
import SudokuVisualizer from "../src/components/SudokuVisualizer"
import InsertionSortVisualizer from "./components/InsertionSortVisualiser";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "../src/components/Navbar"
import Home from "../src/components/Home"
import MergeSortVisualizer from "../src/components/MergeSortVisualizer"
import GraphVisualizer from "./components/GraphVisualizer";
import BFS from "./components/BFS";
import DFS from "./components/DFS";
import TreeVisualization from "./components/TreeVisualization";
import Stack from "./components/Stack";
import Queue from "./components/Queue";
import LinkedList from "./components/LinkedList";
import HeapVisualization from "./components/HeapVisualization";
import BSTVisualization from "./components/BSTVisualization";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bubblesort" element={<BubbleSortVisualizer1/>}/>
          <Route path="/insertionsort" element={<InsertionSortVisualizer/>}/>
          <Route path="/sudoku" element={<SudokuVisualizer/>}/>
          <Route path="/mergesort" element={<MergeSortVisualizer/>}/>
          <Route path="/graph" element={<GraphVisualizer/>}/>
          <Route path="/bfs" element={<BFS/>}/>
          <Route path="/dfs" element={<DFS/>}/>
          <Route path="/tree" element={<TreeVisualization/>}/>
          <Route path="/stack" element={<Stack/>}/>
          <Route path="/queue" element={<Queue/>}/>
          <Route path="/linkedlist" element={<LinkedList/>}/>
          <Route path="/heap" element={<HeapVisualization/>}/>
          <Route path="/bst" element={<BSTVisualization/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )}
 export default App;


