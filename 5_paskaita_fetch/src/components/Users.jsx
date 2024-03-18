import React, { useState, useEffect } from "react";
import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the user data:", error);
      });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} name={user.name} surname={user.username} />
      ))}
    </div>
  );
}
export default Users;
