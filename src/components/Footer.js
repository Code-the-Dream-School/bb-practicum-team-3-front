import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import {
  CREATE_BY_LINKS,
  CLIENT_CODEBASE,
  SERVER_CODEBASE,
} from "../variables/footerLinks";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 1,
        position: "fixed ",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 10,

        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="xl" align="center">
        <Typography>
          Created by:{" "}
          {CREATE_BY_LINKS.map(({ name, link }, index) => {
            return (
              <React.Fragment key={link}>
                <Link
                  href={link}
                  target="_blank"
                  underline="none"
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    "&:hover": { color: "#ff8c00" },
                  }}
                >
                  {name}
                </Link>
                {index !== CREATE_BY_LINKS.length - 1 ? ", " : ""}
              </React.Fragment>
            );
          })}
        </Typography>
        <Typography>
          CodeBase:{" "}
          <Link
            href={CLIENT_CODEBASE}
            target="_blank"
            underline="none"
            sx={{
              color: "black",
              fontStyle: "italic",
              "&:hover": { color: "#ff8c00" },
            }}
          >
            Frontend
          </Link>
          {", "}
          <Link
            href={SERVER_CODEBASE}
            target="_blank"
            underline="none"
            sx={{
              color: "black",
              fontStyle: "italic",
              "&:hover": { color: "#ff8c00" },
            }}
          >
            Backend
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
