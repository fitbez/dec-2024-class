import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  background-color: #1e88e5;
  border: none;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
`;

const Button = (props) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(props.path);
  };
  return (
    <StyledButton onClick={handleNavigation}>{props.buttonText}</StyledButton>
  );
};

export default Button;
