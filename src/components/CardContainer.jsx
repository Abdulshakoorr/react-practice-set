import React, { useState } from 'react'
import Card from './Card'
import { data } from '../data'



const uniqueCat = [...new Set(data.map((cat)=>{
  return cat.category;
}))]


console.log(uniqueCat);


const CardContainer = () => {
  const [datas , setDatas] = useState(data);
  const [uniquebtn, setUniquebtn] = useState(uniqueCat);


  const filterData=(category)=>{
    const updatedData= data.filter((curElm)=>{
      return curElm.category === category;
    })
    setDatas(updatedData);
  }
  return (
    <div>
        <h1 className='text-center'>CardContainer</h1>

      {/* btn navigation  */}
    <nav className='text-center p-4'>
      <button onClick={()=> setDatas(data)}>All</button>
      {
        uniquebtn.map((btn,index)=>{
          return (
            <button onClick={()=> filterData(btn)} key={index}>{btn}</button>
          )
        })
      }
      {/* <button onClick={()=> filterData("Website Developed")}>Website Developed</button>
      <button onClick={()=> filterData("Application")}>Application</button> */}
    </nav>


        <main className='px-32 flex flex-wrap items-center justify-center'>
          {
            datas?.map((items)=>{
              return(
                
                <Card data={items} key={items.id}/>
                )
              })
          }
        </main>
    </div>
  )
}

export default CardContainer