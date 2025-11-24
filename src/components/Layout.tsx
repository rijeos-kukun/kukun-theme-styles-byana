import React from "react";
import { Box } from "@mui/joy";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          paddingTop: "70px",
          backgroundColor: "#edeff1",
          minHeight: "100vh",
          flex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
