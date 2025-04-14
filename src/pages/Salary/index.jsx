import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./salary.scss";
function createData(
  teacherName,
  confirmed,
  canceled,
  participantCount,
  salary,
  totalSalary,
  bonus
) {
  return {
    teacherName,
    confirmed,
    canceled,
    participantCount,
    salary,
    totalSalary,
    bonus,
  };
}
const rows = [
  createData("Agababa Baghirov", 0, 0, 0, "15 (saatliq)", 0, 0),
  createData("Shahin Mammadov", 0, 0, 0, "15 (saatliq)", 0, 0),
  createData("Nargiz Aliyeva", 0, 0, 0, "15 (saatliq)", 0, 0),
  createData("Lala Suleymanli", 0, 0, 0, "15 (saatliq)", 0, 0),
  createData("Eyyub Agalarov", 0, 0, 0, "15 (saatliq)", 0, 0),
];
const Salary = () => {
  return (
    <div className="salary-container">
      <div className="search-section">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        <div className="filter-container">
          <div className="date-picker">
            <label>From</label>
            <input type="date" />
          </div>
          <div className="date-picker">
            <label>To</label>
            <input type="date" />
          </div>
          <div>
            <button className="clear-button">Clear all</button>
          </div>
          <div>
            <button className="apply-button">Apply</button>
          </div>
        </div>
      </div>
      <div className="salary-section">
        <TableContainer component={Paper} elevation={0}>
          <Table sx={{ "& td, & th": { padding: "10px 20px" } }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "grey" }}>Teacher name</TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Confirmed
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Canceled
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Participant Count
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Salary
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Total salary
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Bonus
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.teacherName}>
                  <TableCell>{row.teacherName}</TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.confirmed}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.canceled}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.participantCount}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.salary}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.totalSalary}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.bonus}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      padding: "1px !important",
                    }}
                    align="center"
                  >
                    <IconButton>
                      <AddCircleOutlineIcon className="plus-icon" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Salary;
