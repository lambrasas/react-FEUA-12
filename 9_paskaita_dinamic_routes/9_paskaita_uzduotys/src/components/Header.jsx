import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home page</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Header;
