import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledUserInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  width: 400px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledSearch = styled.div`
  display: flex;
  width: 400px;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StyledSearchInput = styled.input`
  padding: 8px;
  flex: 2;
  border: 1px solid #333;
  border-radius: 4px;
`;

function EmployeeList({ employeeData, setEmployeeDetail }) {
  const [search, setSearch] = useState("");
  const [records, setRecords] = useState(employeeData);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function handleEmployeeDetail(id) {
    const ed = employeeData.find((employee) => {
      return employee.id === id;
    });
    setEmployeeDetail(ed);
  }

  // console.log("employee detail", employeeDetail);

  const handleSearchFunctionality = () => {
    setRecords(
      records.filter((record) => {
        console.log("search object", record.firstName);
        return record.firstName.toLowerCase() === search.toLowerCase();
      })
    );
  };

  return (
    <>
      <h3>List of Employees</h3>
      <StyledSearch>
        <StyledSearchInput
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faSearch}
          onClick={handleSearchFunctionality}
        />
      </StyledSearch>
      {records.length === 0 ? (
        <p>No employee record found.</p>
      ) : (
        records.map(({ profilePicture, firstName, lastName, title, id }) => {
          return (
            <StyledUserInfo key={id} onClick={() => handleEmployeeDetail(id)}>
              <StyledImage src={profilePicture} alt="" />
              <div>
                <b>
                  <p>{`${firstName} ${lastName}`}</p>
                </b>
                <p style={{ fontSize: "14px" }}>{title}</p>
              </div>
            </StyledUserInfo>
          );
        })
      )}
    </>
  );
}

export default EmployeeList;
