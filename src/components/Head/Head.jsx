import React from 'react'
import "./Head.css"
import icon from "../../assets/dark-arrow.png"

function Head() {
  return (
    <div className='head container' id='home'>
        <div className='info'>
        <h1>The better education for a better world</h1>
        <p>
            Imagine a bustling campus where cultures collide in a symphony of ideas and ambitions.
            Modern lecture halls hum with intellectual fervor, while serene gardens offer respite for contemplation.
            Students here don't just attend classes—they engage in spirited debates, forge lifelong friendships, and challenge
            the status quo.
        </p>
        <button className='btn'>Explore More <img src={icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Head
