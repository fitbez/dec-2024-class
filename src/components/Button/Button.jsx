import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #1e88e5;
  border: none;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 4px;
`;

const Button = (props) => {
  return <StyledButton>{props.buttonText}</StyledButton>;
};

export default Button;
