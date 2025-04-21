import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Close as CloseIcon,
  Edit as EditIcon,
  Feedback,
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Popover from "@mui/material/Popover";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";
import "./../../i18n.js";
import "./feedbackStudent.scss";
function createData(studentName, aboutWho, feedback, date) {
  return {
    studentName,
    aboutWho,
    feedback,
    date,
  };
}

const rows = [
  createData(
    "Agababa Baghirov",
    "Ceyhun Imanov",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "23.08.2023"
  ),
  createData(
    "Shahin Mammadov",
    "Nihad Orucov",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "21.08.2023"
  ),
  createData(
    "Nargiz Aliyeva",
    "Elgun Mammadaliyev",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "12.07.2023"
  ),
  createData(
    "Lala Suleymanli",
    "Ramin Mammadov",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "23.08.2023"
  ),
  createData(
    "Eyyub Agalarov",
    "Zeynab Kazimova",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "23.08.2023"
  ),
];
const styledelete = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 5,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};
const FeedbackStudent = () => {
  const { t } = useTranslation();
  const [anchorElAdd, setAnchorElAdd] = useState(null);
  const [hoveredBonus, setHoveredBonus] = useState(null);

  const handleOpenAdd = (event) => {
    setAnchorElAdd(event.currentTarget);
  };

  const handleCloseAdd = () => {
    setAnchorElAdd(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const openAdd = Boolean(anchorElAdd);

  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenEdit = (event, rowIndex) => {
    const buttonPosition = event.currentTarget.getBoundingClientRect();

    setPopoverAnchor({
      top: buttonPosition.bottom,
      left: buttonPosition.left,
    });
    setEditRowIndex(rowIndex);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseEdit = () => {
    setPopoverAnchor(null);
  };
  const handleOpenDelete = (event, teacherName) => {
    setOpenDelete(true);
    handleCloseMenu();
    setAnchorEl(event.currentTarget);
    setSelectedTeacher(teacherName);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const [selectedTeacher, setSelectedTeacher] = useState("");

  return (
    <div className="feedbackStudent-container">
      <div className="search-section">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder={t("Search")}
            className="search-input"
          />
        </div>

        <div className="filter-container">
          <div className="date-picker">
            <label>{t("From")}</label>
            <input type="date" />
          </div>
          <div className="date-picker">
            <label>{t("To")}</label>
            <input type="date" />
          </div>
          <div>
            <button className="clear-button">{t("Clear all")}</button>
          </div>
          <div>
            <button className="apply-button">{t("Apply")}</button>
          </div>
        </div>
      </div>
      <div className="salary-section">
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}
        >
          <Table sx={{ "& td, & th": { padding: "10px 20px" } }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "grey" }}>
                  {" "}
                  {t("Student name")}
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {t("About who (teacher)")}
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {t("Feedback")}
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {t("Date")}
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
              {rows.map((row, index) => (
                <TableRow key={row.studentName}>
                  <TableCell>{row.studentName}</TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.aboutWho}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.feedback}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.date}
                  </TableCell>

                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      padding: "1px !important",
                    }}
                    align="center"
                  >
                    <IconButton
                      onClick={(e) => handleMenuClick(e, row.teacherName)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Popover
          open={openAdd}
          anchorEl={anchorElAdd}
          onClose={handleCloseAdd}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              width: 400,
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: 2,
            },
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {t("Add bonus")}
          </Typography>
          <TextField
            label={t("Bonus amount")}
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">m</InputAdornment>,
            }}
          />
          <TextField
            label={t("Comment")}
            multiline
            rows={4}
            fullWidth
            variant="outlined"
          />
          <IconButton
            onClick={handleCloseAdd}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              height: "33px",
              width: "33px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="button-container">
            <button className="save-button">{t("Save")}</button>
          </div>
        </Popover>

        <Popover
          open={Boolean(popoverAnchor)}
          anchorReference="anchorPosition"
          anchorPosition={
            popoverAnchor
              ? { top: popoverAnchor.top, left: popoverAnchor.left }
              : undefined
          }
          onClose={handleCloseEdit}
          PaperProps={{
            sx: {
              width: 400,
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: 2,
            },
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {t("Edit bonus")}
          </Typography>
          <TextField
            label={t("Bonus amount")}
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">m</InputAdornment>,
            }}
          />
          <TextField
            label={t("Comment")}
            multiline
            rows={4}
            fullWidth
            variant="outlined"
          />
          <IconButton
            onClick={handleCloseEdit}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              height: "33px",
              width: "33px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="popover-footer">
            <IconButton
              onClick={(e) =>
                handleOpenDelete(e, rows[editRowIndex]?.teacherName)
              }
            >
              <DeleteOutlineIcon className="delete-btn" />
            </IconButton>
            <div className="button-container">
              <button className="save-button">{t("Save")}</button>
            </div>
          </div>
        </Popover>
        <Modal open={openDelete} onClose={handleCloseDelete}>
          <Box sx={styledelete}>
            <Typography sx={{ textAlign: "center" }}>
              {t("ConfirmDeleteBonus", {
                name: selectedTeacher.split(" ")[0],
              })}
            </Typography>
            <Box
              sx={{ display: "flex", mt: 2, justifyContent: "space-around" }}
            >
              <button className="cancel-button" onClick={handleCloseDelete}>
                {t("Cancel")}
              </button>
              <button className="delete-button">{t("Delete")}</button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default FeedbackStudent;
