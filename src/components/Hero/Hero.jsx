import styled from "styled-components";
import Button from "../Button/Button";

const StyledHero = styled.div`
  margin-top: 1rem;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
`;

const Hero = () => {
  return (
    <StyledHero>
      <h1>Welcome To the Employees Page</h1>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        incidunt magni illo ab accusantium nam eos natus nostrum. Corporis, non.
      </p>
      <StyledButtonContainer>
        <Button buttonText="LOG IN" path="login" />
        <Button buttonText="SIGN UP" path="register" />
      </StyledButtonContainer>
    </StyledHero>
  );
};

export default Hero;
