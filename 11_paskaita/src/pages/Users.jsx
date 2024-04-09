import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import todoApi from "../api/todoApi";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/users"),
  //       then((resp) => resp.data)
  //         .then((response) => {
  //           setUsers(response);
  //         })
  //         .catch((error) => console.error(error));
  //   });
  //   useEffect(()=>{
  //     todoApi.fetch().then((response)=>{
  //         setTodos(response)
  //     }).catch(error)=console.error(error)
  //   })
  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    todoApi
      .fetch()
      .then((response) => {
        setTodos(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
