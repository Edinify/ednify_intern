import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  useMediaQuery,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import { Drawer } from "@mui/material";
const SalaryTable = ({
  rows,
  t,
  hoveredBonus,
  setHoveredBonus,
  handleOpenEdit,
  handleOpenAdd,
}) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  const [selectedTeacher, setSelectedTeacher] = useState(null);
  if (isMobile) {
    return (
      <>
        <Box display="flex" flexDirection="column" gap={2}>
          {rows.map((row) => (
            <Box
              key={row.teacherName}
              onClick={() => setSelectedTeacher(row)}
              sx={{
                cursor: "pointer",
                padding: 2,
                borderBottom: "1px solid #eee",
              }}
            >
              <Typography>{row.teacherName}</Typography>
              <Typography>
                {t("Salary")}: {row.salary}
              </Typography>
              <Typography>
                {t("Total salary")}: {row.totalSalary}
              </Typography>
            </Box>
          ))}
        </Box>

        <Drawer
          anchor="right"
          open={!!selectedTeacher}
          onClose={() => setSelectedTeacher(null)}
          PaperProps={{
            sx: {
              backgroundColor: "#ffffff !important",
              width: 320,
              color: "#000 !important",
            },
          }}
        >
          <Box p={3} width={300}>
            <Typography variant="h6">{selectedTeacher?.teacherName}</Typography>
            <Typography>
              {t("Confirmed")}: {selectedTeacher?.confirmed}
            </Typography>
            <Typography>
              {t("Canceled")}: {selectedTeacher?.canceled}
            </Typography>
            <Typography>
              {t("Participant Count")}: {selectedTeacher?.participantCount}
            </Typography>
            <Typography>
              {t("Salary")}: {selectedTeacher?.salary}
            </Typography>
            <Typography>
              {t("Total salary")}: {selectedTeacher?.totalSalary}
            </Typography>
            <Typography>
              {t("Bonus")}: {selectedTeacher?.bonus}
            </Typography>

            <Box mt={2} display="flex" gap={1}>
              <button
                className="edit-button"
                onClick={(e) =>
                  handleOpenEdit(e, rows.indexOf(selectedTeacher))
                }
              >
                {t("Edit bonus")}
              </button>
              <button
                variant="contained"
                onClick={handleOpenAdd}
                className="add-button"
              >
                {t("Add bonus")}
              </button>
            </Box>
          </Box>
        </Drawer>
      </>
    );
  }
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ "& td, & th": { padding: "10px 20px" } }}>
        <TableHead>
          <TableRow>
            {[
              "Teacher name",
              "Confirmed",
              "Canceled",
              "Participant count",
              "Salary",
              "Total salary",
              "Bonus",
              "",
            ].map((label, i) => (
              <TableCell
                key={label}
                sx={{
                  color: "grey",
                  borderLeft: i === 0 ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
                  padding: i === 7 ? "1px !important" : undefined,
                }}
              >
                {label && t(label)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.teacherName}>
              <TableCell>{row.teacherName}</TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.confirmed}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.canceled}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.participantCount}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.salary}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.totalSalary}
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  cursor: "pointer",
                  backgroundColor:
                    hoveredBonus === row.teacherName
                      ? "rgba(0,0,0,0.04)"
                      : "transparent",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={() => setHoveredBonus(row.teacherName)}
                onMouseLeave={() => setHoveredBonus(null)}
              >
                {row.bonus}
                {hoveredBonus === row.teacherName && (
                  <IconButton
                    size="small"
                    onClick={(e) => handleOpenEdit(e, index)}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: 8,
                      transform: "translateY(-50%)",
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  padding: "1px !important",
                }}
                align="center"
              >
                <IconButton onClick={handleOpenAdd}>
                  <AddCircleOutlineIcon className="plus-icon" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalaryTable;
