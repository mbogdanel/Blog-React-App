import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>The page cannot be found</p>
      <Link to='/'>Click to HomePage</Link>
    </div>
  )
}

export default NotFound
