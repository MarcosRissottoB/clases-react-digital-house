import React from 'react'
import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-container">
      <nav className="nav" >
        <ul>
          <li>
        <   Link to="/home">Home</Link>
          </li>
          <li>
            
            {/* <a href="/posts">Posts</a> */}
            <Link to="/posts">Posts con Link</Link>
          </li>
          <li>
            {/* <a href="/posts/1234">Post</a> */}
            <Link to="/posts/12">Post con Link</Link>
          </li>
        </ul>
      </nav>
        <span>React router</span>
        <Outlet />
      </div>
    </div>
  );
}

export default App;





