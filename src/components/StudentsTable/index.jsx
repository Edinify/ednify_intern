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
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StudentsTable = ({ rows, t, setOpenMore, handleMenuClick }) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  if (isMobile) {
    return (
      <Box display="flex" flexDirection="column">
        {rows.map((row) => (
          <Box
            key={row.studentName}
            p={2}
            border="1px solid rgba(0, 0, 0, 0.1)"
            bgcolor="white"
          >
            {[
              { label: t("Student name"), value: row.studentName },
              { label: t("Mother name"), value: row.motherName },
              { label: t("Father name"), value: row.fatherName },
              { label: t("Class"), value: row.className },
              {
                label: t("Mother mobile number"),
                value: row.motherMobileNumber,
              },
              {
                label: t("Father mobile number"),
                value: row.fatherMobileNumber,
              },
            ].map(({ label, value }) => (
              <Box key={label} mb={1}>
                <Typography variant="body2" color="gray">
                  {label}
                </Typography>
                <Typography variant="body1">{value}</Typography>
              </Box>
            ))}

            <Box
              mt={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => setOpenMore(true)}
              >
                More
              </Typography>
              <IconButton onClick={(e) => handleMenuClick(e, row.studentName)}>
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ "& td, & th": { padding: "10px 20px" } }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "grey" }}>{t("Student name")}</TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {t("Mother name")}
            </TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {t("Father name")}
            </TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {t("Class")}
            </TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {t("Mother mobile number")}
            </TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {t("Father mobile number")}
            </TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            ></TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.studentName}>
              <TableCell>{row.studentName}</TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.motherName}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.fatherName}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.className}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.motherMobileNumber}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.fatherMobileNumber}
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
                  padding: "5px !important",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                align="center"
                onClick={() => setOpenMore(true)}
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

export default StudentsTable;
