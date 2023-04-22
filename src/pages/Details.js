import Grid from "@mui/material/Grid";
import {
  Container,
  Box,
  Typography,
  Button,
  TableContainer,
  Paper,
} from "@mui/material";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

function createData(id, item, details) {
  return { id, item, details };
}

const rows = [
  createData(0, "Check-in:", "2023-09-30"),
  createData(1, "Check-out:", "2023-10-01"),
  createData(2, "Length of stay:", "3"),
  createData(3, "Total guests:", "2"),
  createData(4, "Total units:", "1"),
  createData(5, "Hotel:", "Hilton"),
  createData(6, "Location:", ""),
  createData(7, "Booking number:", "1234567"),
  createData(7, "Total price:", "567.90"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function PersonalDetails() {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="sm">
      <Button
        color="primary"
        variant="outlined"
        href="#"
        onClick={() => navigate(-1)}
        sx={{ mt: 3 }}
      >
        Return to reservation overview
      </Button>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "100px",
          marginBottom: "50px",
          display: "inline-block",
        }}
      >
        <Typography component="h1" variant="h3" color="primary" gutterBottom>
          Reservation details
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>

                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.item}</TableCell>
                  <TableCell>{row.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Button
            color="primary"
            variant="contained"
            href="#"
            onClick={preventDefault}
            sx={{ mt: 6 }}
          >
            Cancel reservation
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
