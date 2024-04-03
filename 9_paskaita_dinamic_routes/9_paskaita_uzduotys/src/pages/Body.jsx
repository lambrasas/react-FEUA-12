import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Users from "./Users";
import User from "./User";
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </main>
  );
};

export default Main;
