import EmployeeImage from "../../assets/employee.jpg";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 50%;
`;

const Header = () => {
  return <StyledImage src={EmployeeImage} alt="" />;
};

export default Header;
