import React from 'react'

export const Button = ({ src, number, text }) => {

  return(
    <div className='buttonContainer' onClick={src}>
      <div className='circle'>{number}</div>
      <span className='text'>{text}</span>
    </div>
  )
}
