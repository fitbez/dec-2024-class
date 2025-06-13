import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

// TODO: add active link styling on the NavLink

function NavBar() {
  return (
    <StyledNav>
      <div>
        <h3>
          <StyledNavLink to="/">EMPLOYEE MANAGEMENT</StyledNavLink>
        </h3>
      </div>
      <StyledMenu>
        <li>
          <StyledNavLink to="employee-list">EMPLOYEE LIST</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="add-employee">ADD EMPLOYEE</StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            style={({ isActive }) => ({
              borderBottom: isActive ? "1px solid #333" : "none",
            })}
            to="login"
          >
            LOG IN
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="register">SIGN UP</StyledNavLink>
        </li>
      </StyledMenu>
    </StyledNav>
  );
}

export default NavBar;
