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

const TeachersTable = ({ rows, t, setOpenMore, handleMenuClick }) => {
  const isMobile = useMediaQuery("(max-width:900px)");

  if (isMobile) {
    return (
      <Box display="flex" flexDirection="column">
        {rows.map((row) => (
          <Box
            key={row.teacherName}
            p={2}
            border="1px solid rgba(0, 0, 0, 0.1)"
            bgcolor="white"
          >
            {[
              { label: t("Teacher name"), value: row.teacherName },
              { label: t("Class"), value: row.className },
              { label: t("Email"), value: row.email },
              { label: t("Mobile number"), value: row.mobileNumber },
              { label: t("Salary"), value: row.salary },
            ].map(({ label, value }) => (
              <Box key={label}>
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
              <IconButton onClick={(e) => handleMenuClick(e, row.teacherName)}>
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
            <TableCell sx={{ color: "grey" }}>{t("Teacher name")}</TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {t("Class")}
            </TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {t("Email")}
            </TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {t("Mobile number")}
            </TableCell>
            <TableCell
              sx={{ color: "grey", borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              {t("Salary")}
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
            <TableRow key={row.teacherName}>
              <TableCell>{row.teacherName}</TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.className}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.email}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
                {row.mobileNumber}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.1)" }}>
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
  );
};

export default TeachersTable;
