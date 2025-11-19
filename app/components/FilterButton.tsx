import React from "react";
import { Button } from "@mui/joy";

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
  size: "sm" | "md" | "lg";
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  active,
  onClick,
  disabled,
  size = "sm",
}) => {
  return (
    <Button
      size={size}
      disabled={disabled}
      onClick={onClick}
      variant="plain"
      sx={{
        px: 1,
        minHeight: 32,
        textTransform: "none",
        fontFamily: "Montserrat-Regular",
        fontSize: "16px",
        borderRadius: 8,
        ...(active
          ? {
              fontWeight: 600,
              backgroundColor: "#fff",
              color: "#fb0924",
            }
          : {
              color: "#656b6d",
              backgroundColor: "transparent",
              ":hover": { backgroundColor: "#e3e5e8" },
            }),
      }}
    >
      {label}
    </Button>
  );
};
