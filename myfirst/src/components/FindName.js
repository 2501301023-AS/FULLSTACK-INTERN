import React, { useState } from 'react'

const FindName = () => {
    const users=[
        {id:1,name:"Ram",city:"Panipat"},
        {id:2,name:"Shyam",city:"KUK"},
        {id:3,name:"Ramksh",city:"Sonipat"},
        {id:4,name:"Aman",city:"Agra"},
        {id:5,name:"Raman",city:"Delhi"},
    ]
    const[search,setsearch]=useState("");
    const filteredUser=users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredUser)
  return (
    <div>
        <input type="text" placeholder='Enter Your Name' value={search} onChange={(e)=>setsearch(e.target.value)}/>
      {
        users.map((user)=>{
            <div key={user.id}>
                {user.name}
                </div>
        })
      }
    </div>
  )
}

export default FindName
