import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/Home";
import EmployeeListPage from "./pages/EmployeeList";
import LoginPage from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import AddEmployeePage from "./pages/AddEmployee";
import RegisterPage from "./pages/Register";
import { useState, useContext } from "react";
import { EmployeeContext } from "./context";

function App() {
  const { employeeData } = useContext(EmployeeContext);
  const [employeeDetail, setEmployeeDetail] = useState(employeeData[0]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="employee-list"
          element={
            <EmployeeListPage
              employeeDetail={employeeDetail}
              setEmployeeDetail={setEmployeeDetail}
            />
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="add-employee" element={<AddEmployeePage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
