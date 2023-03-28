import React, { useState } from 'react'
import './App.css';
import { Link, Outlet } from "react-router-dom";
import { UserContext } from './context/userContext'

function App() {

  const [user, setState] = useState({
    name: 'John',
    lastname: 'Smith',
  })

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <div className="App-container">
          <h2>Testing con RTL</h2>
        <nav className="nav" >
          <ul>
            <li>
              <Link to="/home">Home</Link>
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
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;





