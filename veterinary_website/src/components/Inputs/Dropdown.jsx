import PropTypes from "prop-types";
import styles from "../../components/styles/Dropdown.module.scss";
const Dropdown = ({ options, onChange }) => {
  return (
    <div>
      <select className={styles.dropDown} onChange={onChange}>
        {options.map((option) => (
          <option
            style={{ textAlign: "center" }}
            key={option.id}
            value={option.id}
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
