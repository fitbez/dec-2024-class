import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/Home";
import EmployeeListPage from "./pages/EmployeeList";
import LoginPage from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import AddEmployeePage from "./pages/AddEmployee";
import RegisterPage from "./pages/Register";

const data = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    callOffice: "0392380",
    callMobile: "038023023",
    sms: "305903903",
    email: "john@email.com",
    profilePicture:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "FE Developer",
  },
  {
    id: 2,
    firstName: "Metin",
    lastName: "Khaled",
    callOffice: "0392380",
    callMobile: "038023023",
    sms: "305903903",
    email: "metin@email.com",
    profilePicture:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
    title: "BE Developer",
  },
  {
    id: 3,
    firstName: "Matteo",
    lastName: "Omar",
    callOffice: "0392380",
    callMobile: "038023023",
    sms: "305903903",
    email: "matteo@email.com",
    profilePicture:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
    title: "FE Architect",
  },
  {
    id: 4,
    firstName: "Daniel",
    lastName: "Xavier",
    callOffice: "0392380",
    callMobile: "038023023",
    sms: "305903903",
    email: "daniel@email.com",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    title: "Dev Ops",
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="employee-list"
          element={<EmployeeListPage employeeData={data} />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="add-employee" element={<AddEmployeePage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
