import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #1e88e5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  color: #fff;
`;

const StyledMenu = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

function NavBar() {
  return (
    <StyledNav>
      <div>
        <h3>TEST APP</h3>
      </div>
      <StyledMenu>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
      </StyledMenu>
    </StyledNav>
  );
}

export default NavBar;
