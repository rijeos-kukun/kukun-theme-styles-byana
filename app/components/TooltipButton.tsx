import React from "react";
import { Button, Tooltip, Typography } from "@mui/joy";
import Icon from "@mdi/react";
import { SxProps } from "@mui/joy/styles/types";

interface TooltipButtonProps {
  allowedRoles?: string[];
  userRole?: string;
  onClick: () => void;
  title?: string;
  icon: string;
  iconColor?: string;
  iconSize?: number;
  tooltipText?: string;
  disablePermissionCheck?: boolean;
  disabled?: boolean;
  loading?: boolean;
  sx?: SxProps;
}

export const TooltipButton: React.FC<TooltipButtonProps> = ({
  allowedRoles,
  userRole,
  onClick,
  title,
  icon,
  iconColor,
  iconSize,
  tooltipText,
  disablePermissionCheck = false,
  disabled,
  loading,
  sx = {},
}) => {
  const hasPermission =
    !disablePermissionCheck ||
    !allowedRoles ||
    allowedRoles.includes(userRole || "");

  if (!hasPermission) return null;
  return (
    <Tooltip
      title={
        <span
          style={{
            fontSize: "12px",
            fontWeight: 400,
            fontFamily: "Montserrat-Regular",
            color: "#949494",
          }}
        >
          {tooltipText}
        </span>
      }
      placement="bottom"
      variant="plain"
      sx={{
        backgroundColor: "#F6F6F7",
        fontSize: "12px",
        color: "#8b8b8b",
        boxShadow: "none",
        "--Tooltip-radius": "8px",
        "--Tooltip-offset": "6px",
        "--Tooltip-delay": "200ms",
        "& .MuiTooltip-tooltip": {
          transformOrigin: "center",
        },
      }}
    >
      <Button
        loading={loading}
        onClick={onClick}
        disabled={disabled}
        sx={{
          borderRadius: "20px",
          backgroundColor: "#ECEFF1",
          color: "#232426",
          px: 2,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#dddfe1",
          },
          ...sx,
        }}
      >
        <Icon path={icon} size={iconSize ?? 1} color={iconColor ?? "#232426"} />
        <Typography level="title-lg">{title}</Typography>
      </Button>
    </Tooltip>
  );
};
