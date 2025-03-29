import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./classes.scss";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 5,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};
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
const Classes = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openOption = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");

  const handleMenuClick = (event, className) => {
    setAnchorEl(event.currentTarget);
    setSelectedClass(className);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
    handleCloseMenu();
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
    handleCloseMenu();
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <>
      <div className="classes-container">
        <div className="search-section">
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <div>
            <button className="add-button" onClick={handleOpen}>
              + Add
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Add class
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Class name"
                  variant="outlined"
                  className="outlined-basic"
                />
                <div className="button-container">
                  <button className="create-button">Create</button>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
        <div className="class-section">
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "grey" }}>Class name</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      width: "10px",
                      padding: "0",
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  "Robotics",
                  "Programming",
                  "Digital Art",
                  "Science",
                  "English",
                ].map((className) => (
                  <TableRow key={className}>
                    <TableCell>{className}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        width: "10px",
                        padding: "0",
                        borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <IconButton
                        onClick={(e) => handleMenuClick(e, className)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Menu
            anchorEl={anchorEl}
            open={openOption}
            onClose={handleCloseMenu}
            sx={{
              "& .MuiPaper-root": { width: "150px" },
            }}
          >
            <MenuItem onClick={handleOpenEdit}>Edit</MenuItem>
            <MenuItem onClick={handleOpenDelete} sx={{ color: "red" }}>
              Delete
            </MenuItem>
          </Menu>

          <Modal open={openEdit} onClose={handleCloseEdit}>
            <Box sx={style}>
              <IconButton
                onClick={handleCloseEdit}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Edit Class
              </Typography>
              <TextField
                fullWidth
                label="Class name"
                variant="outlined"
                defaultValue={selectedClass}
              />
              <div className="button-container">
                <button className="create-button">Save</button>
              </div>
            </Box>
          </Modal>

          <Modal open={openDelete} onClose={handleCloseDelete}>
            <Box sx={styledelete}>
              <Typography sx={{ textAlign: "center" }}>
                Are you sure you want to delete the class?
              </Typography>
              <Box
                sx={{ display: "flex", mt: 2, justifyContent: "space-around" }}
              >
                <button className="cancel-button" onClick={handleCloseDelete}>
                  Cancel
                </button>
                <button className="delete-button" onClick={handleCloseDelete}>
                  Delete
                </button>
              </Box>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Classes;
