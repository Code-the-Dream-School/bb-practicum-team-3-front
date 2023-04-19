import { LinearProgress, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack sx={{ width: "100%", mt: "20px" }} spacing={2}>
      <LinearProgress />
      <LinearProgress />
      <LinearProgress />
      <LinearProgress />
    </Stack>
  );
}
