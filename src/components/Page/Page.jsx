import styled from "styled-components";

const StyledPage = styled.div`
  height: 100vh;
  width: 1200px;
  margin: 0 auto;
  background-color: #f4f4f4;
`;

const Page = (props) => {
  return <StyledPage>{props.children}</StyledPage>;
};

export default Page;
