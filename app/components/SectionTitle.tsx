import React from "react";
import { Typography } from "@mui/joy";

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <Typography
      level="h2"
      sx={{
        color: "#656B6D",
        fontFamily: "Montserrat-Regular",
        fontSize: "30px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "30px",
        letterSpacing: "0px",
      }}
    >
      {children}
    </Typography>
  );
};
