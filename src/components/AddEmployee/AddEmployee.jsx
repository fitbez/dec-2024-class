import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../context";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 1rem 2rem;
`;

const FormInput = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #333;
  border-radius: 4px;
`;

const FormTitle = styled.h2`
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
`;

function AddEmployee() {
  const { employeeData } = useContext(EmployeeContext);
  const navigate = useNavigate();
  //TODO: add a form that accepts employee information
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    callOffice: "",
    callMobile: "",
    sms: "",
    title: "",
    profilePicture: "",
  });
  const [records, setRecords] = useState(employeeData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newRecord = {
      id: Date.now(),
      ...formData,
    };
    setRecords((prev) => [newRecord, ...prev]);
    // navigate("/employee-list");
    setFormData({
      firstName: "",
      lastName: "",
      callOffice: "",
      callMobile: "",
      sms: "",
      title: "",
      profilePicture: "",
    });
  }

  return (
    <>
      <FormContainer>
        <FormTitle>Add Employee</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormInput>
            <label>First Name:</label>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              required
              onChange={handleChange}
            />
          </FormInput>
          <FormInput>
            <label>Last Name:</label>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              required
              onChange={handleChange}
            />
          </FormInput>
          <FormInput>
            <label>Call Office:</label>
            <Input
              type="text"
              name="callOffice"
              value={formData.callOffice}
              required
              onChange={handleChange}
            />
          </FormInput>
          <FormInput>
            <label>Call Mobile:</label>
            <Input
              type="text"
              name="callMobile"
              value={formData.callMobile}
              required
              onChange={handleChange}
            />
          </FormInput>
          <FormInput>
            <label>SMS:</label>
            <Input
              type="text"
              name="sms"
              value={formData.sms}
              required
              onChange={handleChange}
            />
          </FormInput>
          <FormInput>
            <label>Title:</label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              required
              onChange={handleChange}
            />
          </FormInput>
          <FormInput>
            <label>Profile Picture:</label>
            <Input
              type="text"
              name="profilePicture"
              value={formData.profilePicture}
              required
              onChange={handleChange}
            />
          </FormInput>
          <Button type="submit">SUBMIT</Button>
        </form>
      </FormContainer>
    </>
  );
}

export default AddEmployee;
