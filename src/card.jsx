import React from 'react'

function Card(props) {
  return (
    <h1 className='w-28 h-28 bg-slate-200 flex justify-center items-center my-2 text-xl font-bold'
    onClick={props.onClick}
    >{props.value}</h1>
  )
}

export default Card