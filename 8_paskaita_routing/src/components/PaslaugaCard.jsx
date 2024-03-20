import "./PaslaugaCard.css";
import PropTypes from "prop-types";

const PaslaugaCard = ({
  planName,
  price,
  description,
  planNameColor = "#000",
  priceColor = "#000",
}) => {
  return (
    <div className="paslaugaCard">
      <h3 style={{ color: planNameColor }}>{planName}</h3>
      <h4 style={{ color: priceColor }}>{price}</h4>
      <p>{description}</p>
    </div>
  );
};

PaslaugaCard.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  planNameColor: PropTypes.string,
  priceColor: PropTypes.string,
};

export default PaslaugaCard;
