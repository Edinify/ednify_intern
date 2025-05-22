import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Drawer,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "./feedbacksStudentTable.scss";
const FeedbacksStudentTable = ({ rows, t, handleMenuClick }) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  if (isMobile) {
    return (
      <>
        <Box display="flex" flexDirection="column" gap={2}>
          {rows.map((row, idx) => (
            <Box
              key={idx}
              onClick={() => setSelectedFeedback(row)}
              sx={{
                cursor: "pointer",
                padding: 2,
                borderBottom: "1px solid #eee",
              }}
            >
              <Typography fontWeight={600}>{row.studentName}</Typography>
              <Typography>
                {t("About who (teacher)")}: {row.aboutWho}
              </Typography>
              <Typography>
                {t("Date")}: {row.date}
              </Typography>
              <Typography>
                {t("Feedback")}: {row.feedback}
              </Typography>
            </Box>
          ))}
        </Box>
        <Drawer
          anchor="right"
          open={!!selectedFeedback}
          onClose={() => setSelectedFeedback(null)}
          PaperProps={{
            sx: {
              backgroundColor: "#ffffff !important",
              width: 320,
              color: "#000 !important",
            },
          }}
        >
          <Box
            p={3}
            width={300}
            display="flex"
            flexDirection="column"
            gap={1.5}
          >
            <div>
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 50,
                  backgroundColor: "#f2f2f2",
                  color: "red",
                  height: "33px",
                  width: "33px",
                }}
              >
                <DeleteOutlineIcon />
              </IconButton>
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "#f2f2f2",
                  height: "33px",
                  width: "33px",
                }}
                onClick={() => setSelectedFeedback(null)}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="h6">
              {selectedFeedback?.studentName}
            </Typography>
            <Typography>
              <strong>{t("About who")}:</strong> {selectedFeedback?.aboutWho}
            </Typography>
            <Typography>
              <strong>{t("Date")}:</strong> {selectedFeedback?.date}
            </Typography>
            <Typography>
              <strong>{t("Comment")}:</strong> {selectedFeedback?.feedback}
            </Typography>
          </Box>
        </Drawer>
      </>
    );
  }

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}
    >
      <Table sx={{ "& td, & th": { padding: "10px 20px" } }}>
        <TableHead>
          <TableRow>
            {[
              t("Student name"),
              t("About who (teacher)"),
              t("Feedback"),
              t("Date"),
            ].map((label, i) => (
              <TableCell
                key={i}
                sx={{
                  color: "grey",
                  borderLeft: i === 0 ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                {label}
              </TableCell>
            ))}
            <TableCell
              sx={{
                color: "grey",
                borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              hover
              sx={{ cursor: "pointer" }}
              onClick={() => setSelectedFeedback(row)}
            >
              <TableCell>{row.studentName}</TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0,0,0,0.1)" }}>
                {row.aboutWho}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0,0,0,0.1)" }}>
                {row.feedback}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0,0,0,0.1)" }}>
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
                  onClick={(e) => handleMenuClick(e, row.studentName)}
                >
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeedbacksStudentTable;
