import AddEmployee from "../components/AddEmployee/AddEmployee";
import Page from "../components/Page/Page";

function AddEmployeePage(props) {
  return (
    <Page>
      <AddEmployee employeeData={props.employeeData} />
    </Page>
  );
}

export default AddEmployeePage;
