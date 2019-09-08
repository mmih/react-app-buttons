import React from 'react'

export const Button = ({ name, src }) => {

  return(
    <button onClick={src} className='myButton'>{name}</button>
  )
}
