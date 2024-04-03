import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import { UserModel } from "../models/userModel";
import "../components/Users.css";

export const UserContext = createContext();

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((fetchedUsers) => {
        const userModels = fetchedUsers.map((user) => new UserModel(user));
        setUsers(userModels);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ users }}>
      <div className="usersContainer">
        {users.map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.id}`}>
              <UserCard user={user} />
            </Link>
          </div>
        ))}
      </div>
    </UserContext.Provider>
  );
};

export default Users;
