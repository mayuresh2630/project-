import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function DisplayTable({ tableData }) {
  return (
    <div>
      <Container maxWidth="">
        <Typography
          style={{
            backgroundColor: "white",
            border: "1px solid black",
          }}
        >
          <div className="img">
            <img
              style={{ maxWidth: "70%" }}
              src={process.env.PUBLIC_URL + "/images/heads.png"}
            />
          </div>
          <table>
            <tr>
              <th>Participant</th>
              <th>Area of Operation</th>
              <th>Employee Signature</th>
              <th>Date</th>
              <th>Trainer Name and Signature</th>
            </tr>
            {tableData &&
              tableData.map((data) => (
                <tr>
                  <td>{data["EMPLOYEE NAME"]}</td>
                  <td>{data.Dept}</td>
                  <td>{data["EMPLOYEE NAME"]}</td>
                  <td>{data.DOJ}</td>
                  <td>{data["CONTRACTOR"]}</td>
                </tr>
              ))}
          </table>
        </Typography>
      </Container>
    </div>
  );
}
