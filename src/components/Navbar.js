import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.jpeg';
import { useRef } from 'react';


const Navbar = () => {
    const location = useLocation();

    const links = [
        { path: "/", label: "Home" },
        { path: "/bubblesort", label: "Bubble Sort" },
        { path: "/insertionsort", label: "Insertion Sort" },
        { path: "/sudoku", label: "Sudoku" },
        { path: "/mergesort", label: "Merge Sort" },
        { path: "/graph", label: "Graph" },
        { path: "/bfs", label: "BFS" },
        { path: "/dfs", label: "DFS" },
        { path: "/tree", label: "Tree" },
        { path: "/stack", label: "Stack" },
        { path: "/queue", label: "Queue" },
        { path: "/linkedlist", label: "Linked List" },
        { path: "/heap", label: "Heap" },
        { path: "/bst", label: "BST" },
    ];

    const navbarLinksContainerRef = useRef(null);

    const scrollRight = () => {
        if (navbarLinksContainerRef.current) {
            navbarLinksContainerRef.current.scrollLeft += 100; // Adjust the scrolling distance as needed
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <img src={logo} alt="DSA Visualizer Logo" className="navbar-logo" />
                <div className="navbar-heading">
                <p className='navbar-heading-dsa'>DSA </p>
                <p className='navbar-heading-visualiser'>Visualisation</p>
                </div>
                
            </div>
            <div ref={navbarLinksContainerRef} className="navbar-links-container">
                <button className="navbar-scroll-btn navbar-scroll-right" onClick={scrollRight}>
                    <img src='' alt="Right Arrow" />
                </button>
                <div className="navbar-links">
                    {links.map(link => (
                        <Link 
                            key={link.path} 
                            to={link.path} 
                            className={`navbar-link ${location.pathname === link.path ? "active" : ""}`}>
                            {link.label}
                        </Link>
                    ))}
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;
