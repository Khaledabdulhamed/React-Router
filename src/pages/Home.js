import React from 'react'
import { Link } from 'react-router-dom'
import MainNavigation from '../components/Main-Navigation/MainNavigation'
const Home = () => {
  return (
    <div>

      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">The List of Products</Link>
      </p>
    </div>
  )
}

export default Home