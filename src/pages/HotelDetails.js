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
  Container,
} from "@mui/material";

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
  createData(7, "Total price:", "567.90"),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  //display: "flex",
  //alignItems: "center",
  //justifyContent: "center",
};

export default function HotelDetails() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" flexDirection="column" sx={{ width: "100px" }}>
      <Button variant="contained" onClick={handleOpen}>
        Reserve
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Reservation form
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
          <Button variant="contained">Confirm</Button>
          <Button variant="contained" onClick={handleClose} sx={{ ml: 12 }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
