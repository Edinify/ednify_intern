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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import "./teachers.scss";
const styleadd = {
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

function createData(teacherName, className, email, mobileNumber, salary) {
  return { teacherName, className, email, mobileNumber, salary };
}
const rows = [
  createData(
    "Agababa Baghirov",
    "Robotics",
    "agababa@gmail.com",
    "+994 55 666 77 88",
    2400
  ),
  createData(
    "Shahin Mammadov",
    "Programming",
    "lorem@gmail.com",
    "+994 55 666 77 88",
    3700
  ),
  createData(
    "Nargiz Aliyeva",
    "Digital Art",
    "lorem@gmail.com",
    "+994 55 666 77 88",
    2400
  ),
  createData(
    "Lala Suleymanli",
    "Science",
    "lorem@gmail.com",
    "+994 55 666 77 88",
    6700
  ),
  createData(
    "Eyyub Agalarov",
    "English",
    "lorem@gmail.com",
    "+994 55 666 77 88",
    "35 (saatliq)"
  ),
];
const Teachers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openOption = Boolean(anchorEl);
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const handleMenuClick = (event, teacherName) => {
    setAnchorEl(event.currentTarget);
    setSelectedTeacher(teacherName);
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
    <div className="teachers-container">
      <div className="search-section">
        <div className="left-container">
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <div className="select-container">
            <select className="select-input">
              <option value="someOption">Active</option>
              <option value="otherOption">Other option</option>
            </select>
          </div>
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
            <Box sx={styleadd}>
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
                Add teacher
              </Typography>
              <div className="input-rows">
                <TextField
                  id="outlined-basic"
                  label="Full name"
                  variant="outlined"
                  className="outlined-basic"
                />
                <TextField
                  id="outlined-basic"
                  label="Birthday"
                  variant="outlined"
                  className="outlined-basic"
                />
              </div>
              <div className="input-rows">
                <TextField
                  id="outlined-basic"
                  label="FIN"
                  variant="outlined"
                  className="outlined-basic"
                />
                <TextField
                  id="outlined-basic"
                  label="Seriya"
                  variant="outlined"
                  className="outlined-basic"
                />
              </div>
              <div className="input-rows">
                <TextField
                  id="outlined-basic"
                  label="Mobile number"
                  variant="outlined"
                  className="outlined-basic"
                />
                <TextField
                  id="outlined-basic"
                  label="Work experience"
                  variant="outlined"
                  className="outlined-basic"
                />
              </div>
              <TextField
                id="outlined-basic"
                label="Health status"
                variant="outlined"
                className="outlined-basic"
              />
              <FormControl>
                <p>Marital status</p>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    value="married"
                    control={<Radio />}
                    label="Married"
                    className="radio-input"
                    sx={{ margin: 0, width: "49%" }}
                  />
                  <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label="Single"
                    className="radio-input"
                    sx={{ margin: 0, width: "49%" }}
                  />
                </RadioGroup>
              </FormControl>
              <FormGroup>
                <p>Department</p>
                <div className="checkbox">
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "lightgrey",
                        }}
                      />
                    }
                    label="AZ"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "lightgrey",
                        }}
                      />
                    }
                    label="EN"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "lightgrey",
                        }}
                      />
                    }
                    label="RU"
                  />
                </div>
              </FormGroup>
              <div>
                {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem
                    // value={10}
                    >
                      Ten
                    </MenuItem>
                    <MenuItem>Twenty</MenuItem>
                    <MenuItem>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>With label + helper text</FormHelperText>
                </FormControl> */}
              </div>
              <div className="button-container">
                <button className="create-button">Create</button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="teachers-section">
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
                  Class
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    color: "grey",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Mobile number
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
                ></TableCell>
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
                    {row.className}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.email}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.mobileNumber}
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
                  >
                    {row.salary}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                      padding: "5px !important",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    align="center"
                  >
                    More
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
              defaultValue={selectedTeacher}
            />
            <div className="button-container">
              <button className="create-button">Save</button>
            </div>
          </Box>
        </Modal>

        <Modal open={openDelete} onClose={handleCloseDelete}>
          <Box sx={styledelete}>
            <Typography sx={{ textAlign: "center" }}>
              Are you sure you want to delete the "
              {selectedTeacher.split(" ")[0]}" teacher?
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
  );
};

export default Teachers;
