import React, { useState } from 'react'
import './App.css';
import { Link, Outlet } from "react-router-dom";
import { 
  UserContext
} from './context/userContext'
import { 
  ProductsContext
} from './context/productsContext'

function App() {
  const [user, setUser] = useState({
    name: 'John',
    lastname: 'Smith',
  })
  const [products, setProducts] = useState([
    {
    productName: 'Iphone',
    id: '1234fewf345'
    }
  ])

  return (
    <UserContext.Provider value={user}>
      <ProductsContext.Provider value={products}>
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
                <Link to="/posts">Posts </Link>
              </li>
              <li>
                {/* <a href="/posts/1234">Post</a> */}
                <Link to="/posts/12">Post </Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
            </ul>
          </nav>
            <Outlet />
          </div>
        </div>
      </ProductsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;





