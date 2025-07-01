import EmployeeDetail from "../components/EmployeeDetails/EmployeeDetails";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Page from "../components/Page/Page";
import styled from "styled-components";

const StyledEmployeeSection = styled.div`
  display: flex;
`;

function EmployeeListPage({ setEmployeeDetail, employeeDetail }) {
  return (
    <Page>
      <StyledEmployeeSection>
        <div>
          <EmployeeList setEmployeeDetail={setEmployeeDetail} />
        </div>
        <EmployeeDetail employeeDetail={employeeDetail} />
      </StyledEmployeeSection>
    </Page>
  );
}

export default EmployeeListPage;
