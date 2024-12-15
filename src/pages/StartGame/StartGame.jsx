import React from 'react'
import { Link } from 'react-router-dom'

function StartGame() {
  return (
    <div>
        <h2>Start Game</h2>
        <Link to= {"/play"} >Play Game</Link>
    </div>
  )
}

export default StartGame