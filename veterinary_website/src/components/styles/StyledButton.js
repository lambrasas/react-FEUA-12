import styled, { css } from "styled-components";
import PropTypes from "prop-types";
const StyledButton = styled.button`
  color: white;
  background-color: #fd7f16;
  border: none;
  border-radius: 3px;
  width: 120px;
  height: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.05);
  }
  ${(props) =>
    props.$secondary &&
    css`
      background-color: white;
      color: #fd7f16;
      border: 2px #fd7f16 solid;
    `}
`;
StyledButton.propTypes = {
  secondary: PropTypes.bool,
};
export default StyledButton;
