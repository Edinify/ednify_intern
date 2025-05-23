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
import TeachersTable from "../../components/TeachersTable/index.jsx";
import "./../../i18n.js";
import "./teachers.scss";
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
    <div className="teachers-container">
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
                {t("Add teacher")}
              </Typography>
              <div className="input-rows row row-input">
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label={t("Full name")}
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label={t("Birthday")}
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>

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
                    label="Mobile number"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
                <div className="col-6 outlined-basic">
                  <TextField
                    id="outlined-basic"
                    label="Work experience"
                    variant="outlined"
                    className="outlined-basic"
                    fullWidth
                  />
                </div>
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
                  className="row row-input"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    value="married"
                    control={<Radio />}
                    label="Married"
                    className="radio-input col-6"
                    sx={{ margin: 0 }}
                  />

                  <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label="Single"
                    className="radio-input col-6"
                    sx={{ margin: 0 }}
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

              <div className="salary row ">
                <TextField
                  id="outlined-suffix-shrink"
                  className="salary-input col-9"
                  label="Salary"
                  variant="outlined"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">m</InputAdornment>
                      ),
                    },
                  }}
                />
                <TextField
                  select
                  className="select-time col-3"
                  defaultValue="Monthly"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    minWidth: 80,
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    "& .MuiInputBase-root": {
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                    },
                    "& .MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 14px",
                    },
                    "& .MuiInputBase-input": { padding: "1" },
                  }}
                >
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Yearly">Hourly</MenuItem>
                </TextField>
              </div>

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
        <TeachersTable
          rows={rows}
          t={t}
          setOpenMore={setOpenMore}
          handleMenuClick={handleMenuClick}
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
              {t("Edit teacher")}
            </Typography>
            <div className="input-rows row row-input">
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Full name"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Birthday"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>

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
                  label="Mobile number"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
              <div className="col-6 outlined-basic">
                <TextField
                  id="outlined-basic"
                  label="Work experience"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                />
              </div>
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
                className="row row-input"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <FormControlLabel
                  value="married"
                  control={<Radio />}
                  label="Married"
                  className="radio-input col-6"
                  sx={{ margin: 0 }}
                />

                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single"
                  className="radio-input col-6"
                  sx={{ margin: 0 }}
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

            <div className="salary row ">
              <TextField
                id="outlined-suffix-shrink"
                className="salary-input col-9"
                label="Salary"
                variant="outlined"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">m</InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                select
                className="select-time col-3"
                defaultValue="Monthly"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{
                  minWidth: 80,
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  "& .MuiInputBase-root": {
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  },
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 14px",
                  },
                  "& .MuiInputBase-input": { padding: "1" },
                }}
              >
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Yearly">Hourly</MenuItem>
              </TextField>
            </div>

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
              {t("ConfirmDeleteTeacher", {
                name: selectedTeacher.split(" ")[0],
              })}
            </Typography>
            <Box
              sx={{
                display: "flex",
                mt: 2,
                justifyContent: "space-around",
                gap: 1,
              }}
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

export default Teachers;
