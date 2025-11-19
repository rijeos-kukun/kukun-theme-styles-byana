import { Box } from "@mui/joy";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", pl: 15, pr: 8, py: 4 }}
    >
      <Box sx={{ width: "100%", maxWidth: "1700px" }}>{children}</Box>
    </Box>
  );
};
