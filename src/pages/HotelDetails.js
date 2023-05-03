import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import fetchConfirmHotel from "../api/fetchConfirmHotel";

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
  createData(6, "Location:", "some address"),
  createData(7, "Total price:", "$567.90"),
];

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
};

export default function HotelDetails() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () =>
    fetchConfirmHotel({
      checkin: "2023-04-19",
      checkout: "2023-04-22",
      total_days: 3,
      total_guests: 2,
      total_rooms: 1,
      total_price: 270,
      address: "some address",
      date_received: "2023-04-05",
    });

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Reserve
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: "90%",
              maxWidth: "500px",
              bgcolor: "background.paper",
              p: "40px",
              m: "20px",
              border: "2px solid #000",
              borderRadius: "3%",
            }}
          >
            <Typography
              id="modal-title"
              variant="h5"
              component="h2"
              align="center"
            >
              Booking confirmation
            </Typography>
            <Table size="medium" sx={{ mb: 3 }}>
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
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
                variant="contained"
                onClick={handleConfirm}
                sx={{ m: "auto" }}
              >
                Confirm
              </Button>

              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{ m: "auto" }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
