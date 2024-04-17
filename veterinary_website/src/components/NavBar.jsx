import { Link } from "react-router-dom";
import logo from "../assets/vetbee.svg";
import styles from "../components/styles/NavBar.module.scss";
const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="vetbee" />
      <div className={styles.linksDiv}>
        <Link className={styles.link} to="/pets">
          Pets
        </Link>
        <Link className={styles.link} to="/medications">
          Medications
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
