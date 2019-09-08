import React from 'react'

export const MoreButton = ({ name, show }) => {

  return(
    <button onClick={show} className='myButton'>{name}</button>
  )
}
