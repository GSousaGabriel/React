import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

function App() {
  const [usersData, setUsersData]= useState([])

  const addUserHandler= newUser=>{
    setUsersData(prevUsers=>{
      return [newUser, ...prevUsers]
    })
  }

  return (
    <div>
      <AddUser addNewUser={addUserHandler}></AddUser>
      <UserList users={usersData}></UserList>
    </div>
  );
}

export default App;