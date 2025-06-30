import EmployeeDetail from "../components/EmployeeDetails/EmployeeDetails";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Page from "../components/Page/Page";
import styled from "styled-components";

const StyledEmployeeSection = styled.div`
  display: flex;
`;

function EmployeeListPage({ employeeData, setEmployeeDetail, employeeDetail }) {
  return (
    <Page>
      <StyledEmployeeSection>
        <div>
          <EmployeeList
            employeeData={employeeData}
            setEmployeeDetail={setEmployeeDetail}
          />
        </div>
        <EmployeeDetail
          employeeData={employeeData}
          employeeDetail={employeeDetail}
        />
      </StyledEmployeeSection>
    </Page>
  );
}

export default EmployeeListPage;
