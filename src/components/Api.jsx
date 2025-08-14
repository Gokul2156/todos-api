import React, { useEffect, useState } from 'react'
import axios from "axios"


const Api = () => {
    const [user,setUser]=useState([])

async function fetchUser(){
 const res= await axios.get("https://dummyjson.com/users");
 setUser(res.data.users)
}
    useEffect(()=>{
        fetchUser();
    },[])

    const curlyH=user.filter((curly)=>
    {
        return(curly.hair.type==="Curly")
    })
  return (
    <>
    <div className='container'>
      <h4>user with curly hair</h4>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>First name</td>
                    <td>Last name</td>
                    <td>Age</td>
                    <td>Hair color</td>
                    <td>Hair type</td>
                </tr>
            </thead>

            <tbody>
                    {curlyH.map((user)=>{
                        return(
                          <tr>
                           <td>{user.id}</td> 
                           <td>{user.firstName}</td> 
                           <td>{user.lastName}</td> 
                           <td>{user.age}</td> 
                           <td>{user.hair.color}</td> 
                           <td>{user.hair.type}</td> 
                           
                           </tr>
                           )

                    })}
            </tbody>
        </table>

    </div>
    </>

  )
}
// "https://dummyjson.com/users hair type curly
// id, firstname, lastname, age, hair color, hair type"
export default Api
