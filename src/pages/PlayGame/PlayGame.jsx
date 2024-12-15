import React from 'react'
import { Link } from 'react-router-dom'

function PlayGame() {
  return (
    <div>
        <h2>PlayGame</h2>
        <Link to= {"/start"} >Start Game</Link>
    </div>
  )
}

export default PlayGame