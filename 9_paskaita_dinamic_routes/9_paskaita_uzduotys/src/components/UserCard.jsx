import PropTypes from "prop-types";
import User from "../pages/User";
import "./UserCard.css";
const UserCard = ({ user }) => {
  return (
    <div className="userCard">
      <h1>Name: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>
        Adress: {user.address.street}, {user.address.suite}, {user.address.city}
      </p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};
UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
};
export default UserCard;
