import React from "react";
import { Box, Typography } from "@mui/joy";
import Icon from "@mdi/react";
import { mdiCheck, mdiMinus } from "@mdi/js";

interface CircularCheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  label?: string;
  onChange: () => void;
  size?: number;
  color?: string;
  pl?: number;
}

export const CircularCheckbox: React.FC<CircularCheckboxProps> = ({
  checked,
  indeterminate = false,
  label,
  onChange,
  size = 20,
  color = "#d32f2f",
  pl,
}) => {
  const iconSize = size * 0.8;

  return (
    <Box
      onClick={onChange}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        userSelect: "none",
        pl: pl,
      }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: `2px solid ${checked || indeterminate ? color : "#2b2b2c"}`,
          backgroundColor: checked || indeterminate ? color : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease-in-out",
        }}
      >
        {checked && !indeterminate && (
          <Icon path={mdiCheck} size={iconSize / 20} color="#fff" />
        )}
        {indeterminate && (
          <Icon path={mdiMinus} size={iconSize / 20} color="#fff" />
        )}
      </Box>
      {label && (
        <Typography level="title-sm" textColor="#2b2b2c">
          {label}
        </Typography>
      )}
    </Box>
  );
};
