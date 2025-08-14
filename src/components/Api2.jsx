import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api2 = () => {
    const[user,setUser]=useState([])

    async function fetchUser(){
        const res= await axios.get("https://dummyjson.com/users")
        setUser(res.data.users)
    }

    useEffect(()=>{
        fetchUser();
    })
  return (
    <div>
      <h4>User details</h4>

      <table className='table tabale-bordered'>
        <thead>
            <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Age</td>
                <td>Gender</td>
                <td>State</td>
            </tr>
        </thead>

        <tbody>
            {user.map((user)=>{
                return(
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td>{user.address.state}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>

    </div>
  )
}

export default Api2
