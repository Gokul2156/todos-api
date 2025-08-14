import React, { useEffect, useState } from 'react'

const Api3 = () => {

 const details=[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
 {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
 {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
]

const[todos,setTodos]=useState([])
const[filterData,setFilterData]=useState([])

async function fetchTodo(){
   const  response= await fetch("https://jsonplaceholder.typicode.com/todos/")
    const data=await response.json()
    setTodos(data)
    setFilterData(data)
}
useEffect(()=>{
   
        fetchTodo()
    
},[])

function filterfunction(id){
setFilterData(todos.filter((fildata)=>(fildata.userId===id)))
}


  return (
<>
    <div className='container  w-75'>
        
    <h4 style={{textAlign:'center', paddingTop:'10px'}}>TO-DO API</h4>
      

        <button onClick={()=>filterfunction(1)}>User1</button>
        <button onClick={()=>filterfunction(2)}>User2</button>
        <button onClick={()=>filterfunction(3)}>User3</button>
        <button onClick={()=>filterfunction(4)}>User4</button>
        <button onClick={fetchTodo}>All User</button>

        <br /> <br />
        
      {filterData.map((todo)=>(
            <div key={todo.id} style={{display:'flex' }}>

                <ul style={{listStyleType:'none'}}  key={todo.id}>
                    <li>{todo.id} {todo.title} <input type="checkbox" checked={todo.completed}/></li>
                   
                </ul>
            

            </div>
            ))}
        
    </div>
</>
  )
}

export default Api3
