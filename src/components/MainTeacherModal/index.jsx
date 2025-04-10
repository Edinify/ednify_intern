import React from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import "./mainTeacherModal.scss";

const MainTeacherModal = ({open, setOpen}) => {

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
    <Modal
          open={open}
          onClose={() => setOpen(false)}
         
        >
          <Box
            sx={styleadd}
          >
              <div>
              
                <IconButton
                  onClick={handleClose}
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
           
          

            <Typography variant="h6" component="h2" sx={{ marginBottom: 1 }}>
              Education information
            </Typography>
           
          </Box>
        </Modal>
  )
}

export default MainTeacherModal