import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


export default function DisplayTable({ tableData,title }) {
  return (
    <div>
      <Container maxWidth="">
        <Typography
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            maxWidth:"100%"
          }}
        >
          <div className="img">
            <img
              style={{ maxWidth: "80%", marginLeft:"100px"}}
              src={title?title:process.env.PUBLIC_URL + "/images/heads.png"}
            />
          </div>
          <table>
            <tr>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;Participant&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th> &nbsp;&nbsp;&nbsp;&nbsp;Area of Operation&nbsp;&nbsp;&nbsp;&nbsp; </th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;Employee Signature&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;Trainer Name and Signature&nbsp;&nbsp;</th>
            </tr>
            {tableData &&
              tableData.map((data) => (
                <tr>
                  <td>{data["Employee Name"]}</td>
                  <td>{data.Department}</td>
                  <td>{data[""]}</td>
                  <td>{data.DOJ}</td>
                  <td>Mr.Allwin</td>
                </tr>
              ))}
              
          </table>
        </Typography>
      </Container>
      {/* <PdfComponent /> */}
    </div>
  );
}


