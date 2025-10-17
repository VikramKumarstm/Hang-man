import React from 'react'
import { Link } from 'react-router-dom'

function PlayGame() {
  return (
    <>
        <div>PlayGame</div>
        <Link to={'/start'}> Start Game </Link>
    </>
  )
}

export default PlayGame