import styled from "styled-components";

const StyledEmployeeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: #fff;
  min-width: 300px;
  margin-left: 1rem;
  margin-top: 3rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

const StyledProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 15px;
  border-bottom: 1px solid #9e9e9e;
`;

const StyledProfilePicture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const StyledParagraph = styled.p`
  padding: 1rem 0;
  min-width: 300px;
  border-bottom: 1px solid #9e9e9e;
`;

function EmployeeDetail({ employeeDetail }) {
  return (
    <StyledEmployeeDetailContainer>
      <StyledProfileSection>
        <StyledProfilePicture src={employeeDetail.profilePicture} alt="" />
        <h3>{`${employeeDetail.firstName} ${employeeDetail.lastName}`}</h3>
      </StyledProfileSection>
      <StyledContactInfo>
        <StyledParagraph>
          <StyledSpan>Call Mobile:</StyledSpan> {employeeDetail.callMobile}
        </StyledParagraph>
        <StyledParagraph>
          <StyledSpan>Call Office:</StyledSpan> {employeeDetail.callOffice}
        </StyledParagraph>
        <StyledParagraph>
          <StyledSpan>SMS:</StyledSpan> {employeeDetail.sms}
        </StyledParagraph>
        <StyledParagraph>
          <StyledSpan>Email:</StyledSpan> {employeeDetail.email}
        </StyledParagraph>
      </StyledContactInfo>
    </StyledEmployeeDetailContainer>
  );
}

export default EmployeeDetail;
