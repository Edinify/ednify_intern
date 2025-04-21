import React, { useState } from "react";
import {

  Typography,
  IconButton,
  TextField,
  Grid,
  Chip,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Box,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const studentData = [
  { name: "Aisa.A", color: "#D9F4C7" },
  { name: "Omar.B", color: "#F7C8C8" },
  { name: "Cahid.F", color: "#D9F4C7" },
  { name: "Emin.M", color: "#F5E8A3" },
  { name: "Aisa.A", color: "#D9F4C7" },
  { name: "Omar.B", color: "#F7C8C8" },
  { name: "Cahid.F", color: "#D9F4C7" },
];
const MainStudentModal = ({ open, setOpen,cellData  }) => {
  const [note, setNote] = useState("Bu müəllimin qeydi olacaq");
  const [task, setTask] = useState("Bu isə tapşırıqdır");
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("unviewed");

  const handleClose = () => {
    setOpen(false);
  };

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
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={styleadd}>
        <div>
          <IconButton
            onClick={handleClose}
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
        </div>

        <Box p={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Box>
              <div className="teacher-info">
                <div>
                  <span className="typography-name">Teacher:</span>
                  <span className="typography-content">{cellData?.teacher}</span>
                </div>
                <div>
                  <span className="typography-name">Class:</span>
                  <span className="typography-content">{cellData?.subject}</span>
                </div>
              </div>
              <div className="date-info">
                <div>
                  <span className="typography-name">Date:</span>
                  <span className="typography-content"> {cellData?.day} - {cellData?.date}</span>
                </div>
                <div>
                  <span className="typography-name">Time:</span>
                  <span className="typography-content">{cellData?.time}</span>
                </div>
              </div>
            </Box>
          </Box>

        
          <Box mb={4}>
            <Typography  className="text-filed-label">
              Student:
            </Typography>
            <Grid container spacing={1}>
              {studentData.map((student, index) => (
                <Grid item key={index}>
                  <div className="student-name"    style={{ backgroundColor: student.color }}>
                    <span >{student.name}</span>
                <span>    <ArrowDropDownIcon /></span>
                   
                 
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>


          <Box
         
            display="flex"
            justifyContent="space-end"
            alignItems="center"
          >
    

            <Box display="flex" alignItems="center" gap={2}>
              <button className="save-button">
                Save
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default MainStudentModal;
