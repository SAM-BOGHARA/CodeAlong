import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className="btn w-full btn-accent text-xl">{props.name}</button>
    </>
  )
}

export default Button