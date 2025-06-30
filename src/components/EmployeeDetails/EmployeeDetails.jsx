import { useState } from "react";

function EmployeeDetail({ employeeDetail }) {
  return (
    <>
      <img src={employeeDetail.profilePicture} alt="" />
      <p>Call Mobile: {employeeDetail.callMobile}</p>
    </>
  );
}

export default EmployeeDetail;
