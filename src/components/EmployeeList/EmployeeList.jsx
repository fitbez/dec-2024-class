import styled from "styled-components";

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

function EmployeeList({ employeeData }) {
  return (
    <>
      <h3>List of Employees</h3>
      {employeeData.map(
        ({ profilePicture, firstName, lastName, title, id }) => {
          return (
            <StyledUserInfo key={id}>
              <StyledImage src={profilePicture} alt="" />
              <div>
                <b>
                  <p>{`${firstName} ${lastName}`}</p>
                </b>
                <p style={{ fontSize: "14px" }}>{title}</p>
              </div>
            </StyledUserInfo>
          );
        }
      )}
    </>
  );
}

export default EmployeeList;
