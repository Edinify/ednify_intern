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
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import RemoveIcon from "@mui/icons-material/Remove";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EditIcon from "@mui/icons-material/Edit";
import { useTranslation } from "react-i18next";
import "./../../i18n.js";
import "./students.scss";
import StudentsTable from "../../components/StudentsTable/index.jsx";
const styleadd = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  overflowY: "auto",
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

function createData(
  studentName,
  motherName,
  fatherName,
  className,
  motherMobileNumber,
  fatherMobileNumber
) {
  return {
    studentName,
    motherName,
    fatherName,
    className,
    motherMobileNumber,
    fatherMobileNumber,
  };
}
const rows = [
  createData(
    "Agababa Baghirov",
    "Naila",
    "Yaqub",
    "Robotics",
    "+994 55 666 77 88",
    "+994 55 666 77 88"
  ),
  createData(
    "Shahin Mammadov",
    "Leyla",
    "Elshan",
    "Programming",
    "+994 55 666 77 88",
    "+994 55 666 77 88",
    3700
  ),
  createData(
    "Nargiz Aliyeva",
    "Aynur",
    "Elshan",
    "Digital Art",
    "+994 55 666 77 88",
    "+994 55 666 77 88"
  ),
  createData(
    "Lala Suleymanli",
    "Aynur",
    "Elshan",
    "Science",
    "+994 55 666 77 88",
    "+994 55 666 77 88"
  ),
  createData(
    "Eyyub Agalarov",
    "Aynur",
    "Elshan",
    "English",
    "+994 55 666 77 88",
    "+994 55 666 77 88"
  ),
];
const Students = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openOption = Boolean(anchorEl);
  const [value, setValue] = React.useState("female");
  const [openMore, setOpenMore] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");

  const handleMenuClick = (event, studentName) => {
    setAnchorEl(event.currentTarget);
    setSelectedStudent(studentName);
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
  const handleCloseMore = () => {
    setOpenMore(false);
  };

  const [selectedValue, setSelectedValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChangeAdd = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAdd = () => {
    if (selectedValue && !items.includes(selectedValue)) {
      setItems([...items, selectedValue]);
      setSelectedValue("");
    }
  };
  const handleDelete = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="students-container">
      <div className="search-section">
        <div className="left-container">
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder={t("Search")}
              className="search-input"
            />
          </div>
          <div className="select-container">
            <select className="select-input">
              <option value="someOption">{t("Active")}</option>
              <option value="otherOption">{t("Inactive")}</option>
            </select>
          </div>
        </div>
        <div>
          <button className="add-button" onClick={handleOpen}>
            + {t("Add")}
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
                {t("Add student")}
              </Typography>
              <TextField
                id="outlined-basic"
                label="Full name"
                variant="outlined"
                fullWidth
              />
              <div className="input-rows row row-input">
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="FIN"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Seriya"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
              </div>
              <div className="input-rows row row-input">
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Birthday"
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Health status"
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>

              <div className="input-rows row row-input">
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Educational institution"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Educational degree"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
              </div>
              <div className="input-rows row row-input">
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Mother name"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Father name"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
              </div>
              <div className="input-rows row row-input">
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Mother mobile number"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Father mobile number"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
              </div>
              <TextField
                id="outlined-basic"
                label="Mobile number / Emergency"
                variant="outlined"
                className="outlined-basic"
              />
              <TextField
                id="outlined-basic"
                label="Residental adress"
                variant="outlined"
                className="outlined-basic"
              />
              <TextField
                id="outlined-basic"
                label="Where did you hear us?"
                variant="outlined"
                className="outlined-basic"
              />

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
              <div className="add-list">
                <div className="first-section">
                  <FormControl sx={{ m: 0, minWidth: "85%" }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Class
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={selectedValue}
                      onChange={handleChangeAdd}
                    >
                      <MenuItem value="Ten">Ten</MenuItem>
                      <MenuItem value="Twenty">Twenty</MenuItem>
                      <MenuItem value="Thirty">Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <button className="add-button" onClick={handleAdd}>
                    Add
                  </button>
                </div>
                <ol
                  style={{
                    listStyle: "none",
                    counterReset: "list-counter",
                  }}
                >
                  {items.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "85%",
                        counterIncrement: "list-counter",
                        marginBottom: "10px",
                      }}
                    >
                      <span style={{ marginRight: "4px" }}>{index + 1}.</span>
                      <span style={{ flexGrow: 1 }}>{item}</span>
                      <RemoveIcon
                        className="del-button"
                        onClick={() => handleDelete(item)}
                      />
                    </li>
                  ))}
                </ol>
              </div>

              <TextField
                id="outlined-basic"
                label="Class amount"
                variant="outlined"
                className="outlined-basic"
              />

              <div style={{ display: "flex", gap: "8px" }}>
                <TextField label="Email" variant="outlined" fullWidth />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="button-container">
                <button className="create-button">{t("Create")}</button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="teachers-section">
        <StudentsTable
          rows={rows}
          t={t}
          setOpenMore={setOpenMore}
          handleOpenEdit={handleOpenEdit}
        />
        <Menu
          anchorEl={anchorEl}
          open={openOption}
          onClose={handleCloseMenu}
          sx={{
            "& .MuiPaper-root": { width: "150px" },
          }}
        >
          <MenuItem onClick={handleOpenEdit}>{t("Edit")}</MenuItem>
          <MenuItem onClick={handleOpenDelete} sx={{ color: "red" }}>
            {t("Delete")}
          </MenuItem>
        </Menu>

        <Modal open={openEdit} onClose={handleCloseEdit}>
          <Box sx={styleadd}>
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
              {t("Edit student")}
            </Typography>

            <TextField
              id="outlined-basic"
              label="Full name"
              variant="outlined"
              fullWidth
            />
            <div className="input-rows row row-input">
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="FIN"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Seriya"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
            </div>
            <div className="input-rows row row-input">
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Birthday"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Health status"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>

            <div className="input-rows row row-input">
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Educational institution"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Educational degree"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
            </div>
            <div className="input-rows row row-input">
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Mother name"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Father name"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
            </div>
            <div className="input-rows row row-input">
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Mother mobile number"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Father mobile number"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
            </div>
            <TextField
              id="outlined-basic"
              label="Mobile number / Emergency"
              variant="outlined"
              className="outlined-basic"
            />
            <TextField
              id="outlined-basic"
              label="Residental adress"
              variant="outlined"
              className="outlined-basic"
            />
            <TextField
              id="outlined-basic"
              label="Where did you hear us?"
              variant="outlined"
              className="outlined-basic"
            />
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
            <div className="add-list">
              <div className="first-section">
                <FormControl sx={{ m: 0, minWidth: "85%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Class
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedValue}
                    onChange={handleChangeAdd}
                  >
                    <MenuItem value="Ten">Ten</MenuItem>
                    <MenuItem value="Twenty">Twenty</MenuItem>
                    <MenuItem value="Thirty">Thirty</MenuItem>
                  </Select>
                </FormControl>
                <button className="add-button" onClick={handleAdd}>
                  Add
                </button>
              </div>
              <ol
                style={{
                  listStyle: "none",
                  counterReset: "list-counter",
                }}
              >
                {items.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "85%",
                      counterIncrement: "list-counter",
                      marginBottom: "10px",
                    }}
                  >
                    <span style={{ marginRight: "4px" }}>{index + 1}.</span>
                    <span style={{ flexGrow: 1 }}>{item}</span>
                    <RemoveIcon
                      className="del-button"
                      onClick={() => handleDelete(item)}
                    />
                  </li>
                ))}
              </ol>
            </div>

            <TextField
              id="outlined-basic"
              label="Class amount"
              variant="outlined"
              className="outlined-basic"
            />

            <div style={{ display: "flex", gap: "8px" }}>
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="button-container">
              <button className="create-button">{t("Save")}</button>
            </div>
          </Box>
        </Modal>

        <Modal open={openDelete} onClose={handleCloseDelete}>
          <Box sx={styledelete}>
            <Typography sx={{ textAlign: "center" }}>
              {t("ConfirmDeleteStudent", {
                name: selectedStudent.split(" ")[0],
              })}
            </Typography>
            <Box
              sx={{ display: "flex", mt: 2, justifyContent: "space-around" }}
            >
              <button className="cancel-button" onClick={handleCloseDelete}>
                {t("Cancel")}
              </button>
              <button className="delete-button" onClick={handleCloseDelete}>
                {t("Delete")}
              </button>
            </Box>
          </Box>
        </Modal>

        <Modal
          open={openMore}
          onClose={() => setOpenMore(false)}
          BackdropProps={{
            style: { backgroundColor: "transparent" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: {
                md: "50%",
                lg: 400,
                xl: 500,
              },
              height: "100%",
              bgcolor: "background.paper",
              boxShadow: 10,
              p: 2,
              borderRadius: 2,
            }}
          >
            <div>
              <Typography variant="h6" component="h2" sx={{ marginBottom: 1 }}>
                {t("Personal Information")}
              </Typography>
              <div>
                <IconButton
                  onClick={handleOpenEdit}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 50,
                    backgroundColor: "#462aff",
                    color: "white",
                    height: "33px",
                    width: "33px",
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={handleCloseMore}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "#f2f2f2",
                    height: "33px",
                    width: "33px",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                marginBottom: 3,
              }}
            >
              <p>
                <strong>Full name:</strong> Agababa Bagirov
              </p>
              <p>
                <strong>Birthday:</strong> 27.11.1997
              </p>
              <p>
                <strong>FIN:</strong> 45ABCDE
              </p>
              <p>
                <strong>Seria number:</strong> AZE 12345678
              </p>
              <p>
                <strong>Health status:</strong> Healthy
              </p>
              <p>
                <strong>Education:</strong> Azerbaijan school, 8th grade
              </p>
              <p>
                <strong>Mother:</strong> Naila, +994 55 666 77 88
              </p>
              <p>
                <strong>Father:</strong> Yaqub, +994 55 666 77 88
              </p>
              <p>
                <strong>Phone number:</strong> +994 55 666 77 88
              </p>
              <p>
                <strong>Email:</strong> agababa@gmail.com
              </p>
              <p>
                <strong>Address:</strong> N.Narimanov, 15B
              </p>
            </Box>

            <Typography variant="h6" component="h2" sx={{ marginBottom: 1 }}>
              Education information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <p>
                <strong>Class 1:</strong> Programming,{" "}
                <span style={{ color: "blue" }}>15</span>
              </p>
              <p>
                <strong>Class 2:</strong> Digital Art,{" "}
                <span style={{ color: "blue" }}>4</span>
              </p>
              <p>
                <strong>Department:</strong> AZ, EN
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span style={{ color: "green" }}>Active</span>
              </p>
              <p>
                <strong>Joined:</strong> 27.11.2023
              </p>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Students;
