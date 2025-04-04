import React from 'react'

const Card = (prop) => {
  return (
    <div className='items-center shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] p-4 bg-white rounded-xl h-65 w-60 m-5'>
        <img src={prop.imgSRC} className='h-12 w-12 mx-auto rounded-full my-5' />
        <h1 className='font-bold'>{prop.title}</h1>
        <p>{prop.desc}</p>
    </div>
  )
}

export default Card