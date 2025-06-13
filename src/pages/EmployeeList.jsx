import EmployeeList from "../components/EmployeeList/EmployeeList";
import Page from "../components/Page/Page";

function EmployeeListPage({ employeeData }) {
  return (
    <Page>
      <EmployeeList employeeData={employeeData} />
    </Page>
  );
}

export default EmployeeListPage;
