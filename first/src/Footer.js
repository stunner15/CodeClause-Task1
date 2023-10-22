import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
        <h1>{length} TODO {length===1? "item" :"items"}</h1>
    </footer>
  )
}

export default Footer