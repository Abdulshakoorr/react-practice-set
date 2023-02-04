import React, { useEffect, useState } from "react";



const getData = () =>{
  const lists = localStorage.getItem("todos");
  if(lists){
    return JSON.parse(lists);
  }else{
    return []
  }
}
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getData());
  const [isEdited, setIsEdited] = useState("");
  const [togelIcon, setTogelIcon] = useState(false);




  // addition of data 
  const handleAddItems = () => {
    if(!inputData){
        alert("Please enter items first ");
    }else if(inputData && togelIcon){
      setItems(
        items.map((i)=> {
          if(i.id === isEdited){
            return { ...i, name:inputData}
          }
          return i;
        })
      )
      setInputData(" ")
      setTogelIcon(false);
    }
    else{
        const mynewitems = 
        {
           id :  new Date().getTime().toString(),
           name : inputData
        }
        setItems([...items,mynewitems]);
        setInputData("")
    }
  };
// add localstorage 
useEffect(()=>{
localStorage.setItem("todos", JSON.stringify(items))
},[items])

// handleDelete 

const handleDelete = (id) =>{
  const deleteItem = items.filter(item => item.id !== id);
  setItems(deleteItem);
  // console.log(deleteItem);

}
// handleUpdata 

const handleUpdate = (id) =>{
  const upDataedItems = items.find(item => item.id === id);
  setInputData(upDataedItems.name)
  setTogelIcon(true);
  setIsEdited(id)

}




  return (
    <div>
      <h1 className="text-center">  Add Todos</h1>
      <div className="addTodos flex items-center justify-center">
        <div className="input-group flex gap-1">
          <input
            type="text"
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            placeholder="Add your Items here"
            className="px-4 py-2"
          />
          <span
            className="flex items-center justify-center text-green-400 shadow-md rounded-full bg-slate-100 hover:bg-slate-800"
            onClick={handleAddItems}
          >{
            togelIcon? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
           : <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth="1.5"
           stroke="currentColor"
           className="w-6 h-4"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M12 4.5v15m7.5-7.5h-15"
           />
         </svg>
          }
            
          </span>
        </div>
      </div>
      <main className="px-64 flex items-center justify-center py-8">
        {/* listed items  */}
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id} className="flex items-center justify-between w-96 shadow-xl p-4 hover:bg-slate-700 hover:text-white">
                <h4>{item.name}</h4>
                <div className="icons flex items-center justify-center gap-2">
                  <span className="hover:text-blue-600" onClick={() =>{ handleUpdate(item.id)}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </span>
                  <span className="hover:text-red-600" onClick={()=>{handleDelete(item.id)}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </span>
                </div>
              </li>
            );
          })}
          <button onClick={()=> setItems([])}>Clear All</button>
        </ul>
      </main>
    </div>
  );
};

export default Todo;
