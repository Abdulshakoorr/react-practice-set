import React from 'react'

const Card = ({data}) => {
  // console.log(data)
  const{category,name,img,id,description} = data;
  return (
    <div className='bg-slate-50 w-64 h-2/5 flex flex-col m-2 rounded shadow-md p-2'>
        <img src={img} alt="" className='w-full h-[180px] scale-105 rounded pb-2' />
        <div className="text-data">
            <p>category:{category}</p>
            <h2>Name:{name}</h2>
            <p>description:{description} </p> 
        </div>
    </div>
  )
}

export default Card