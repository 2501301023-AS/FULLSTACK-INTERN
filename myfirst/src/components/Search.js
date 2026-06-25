import React, { useEffect, useState } from 'react';

const MyFirstUseStateComponent = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div >
      <input style={{fontStyle:"italic,bold",boxShadow:"10px 5px 5px red",fontSize:"50px",border:"20px solid green",borderRadius:"20px",marginLeft:"10px",color:"red",backgroundColor:"yellow"}}
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    
      {search && (
        <ol style={{fontStyle:"italic,bold",marginTop:"-30px",fontSize:"50px",color:"red",backgroundColor:"yellow",width:"40vw",marginLeft:"10px", borderRadius:"20px",boxShadow:"0px 7px 10px green"}}>
            <p>This user found</p>
            {filteredUsers.map(user => (
          
            <li  
            
              key={user.id} 
              onClick={() => {
                setSelectedUser(user);
                setSearch(user.name); 
              }}
              style={{ cursor: 'pointer',fontSize:"20px" }}
            >
              {user.name}
            </li>
          ))}
        </ol>
      )}


      {selectedUser && <h2>Selected: {selectedUser.name}</h2>}
    </div>
  );
};

export default MyFirstUseStateComponent;