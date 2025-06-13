import styled from "styled-components";
import { useState } from "react";

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 4rem;
`;

const StyledInput = styled.input`
  padding: 5px 10px;
`;

//TODO: add more styling for the login component

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //collects email from the user
  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  //collects password from the user
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <StyledLoginForm>
      <h3>Log In</h3>
      <StyledForm action="">
        <StyledInput
          onChange={handleEmailOnChange}
          value={email}
          type="text"
          name="email"
          id="email"
          placeholder="enter your email"
        />
        <StyledInput
          onChange={handlePasswordOnChange}
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button>Log In</button>
      </StyledForm>
    </StyledLoginForm>
  );
}

export default LoginForm;
