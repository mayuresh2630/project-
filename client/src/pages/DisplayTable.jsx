import React from "react";

export default function DisplayTable({ tableData }) {
  return (
    <div>
      <table>
        <tr>
          <th>Participant</th>
          <th>Area of Operation</th>
          <th>Employee Signature</th>
          <th>Date</th>
          <th>Trainer Name and  Signature</th>
        </tr>
        {tableData &&
          tableData.map((data) => (
            <tr>
              <td>{data["EMPLOYEE NAME"]}</td>
              <td>{data.Dept }</td>
              <td>{data["EMPLOYEE NAME"]}</td>
              <td>{data.DOJ}</td>
              <td>{data["CONTRACTOR"]}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
