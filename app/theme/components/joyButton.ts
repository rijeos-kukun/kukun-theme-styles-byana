import { Theme } from "@mui/joy/styles";
import { buttonClasses } from "@mui/joy/Button";
import { ButtonOwnerState } from "../types";

const joyButton = {
  styleOverrides: {
    root: ({
      ownerState,
      theme,
    }: {
      ownerState: ButtonOwnerState;
      theme: Theme;
    }) => ({
      ...(ownerState.variant === "solid" && {
        textTransform: "none" as any,
        // padding: '8px 16px',
        backgroundColor: theme.palette.primary[500],
        color: "white",
        border: "none",
        borderRadius: "16px",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "Montserrat-Bold",
        fontWeight: "400",
        "&:hover": {
          backgroundColor: theme.palette.primary[300],
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.palette.primary[100],
          color: theme.palette.primary[50],
        },
      }),
      ...(ownerState.variant === "solidWhite" && {
        textTransform: "none",
        padding: "8px 16px",
        backgroundColor: "white",
        color: theme.palette.primary[500],
        border: "none",
        borderRadius: "16px",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "Montserrat-Bold",
        fontWeight: "400",
        "&:hover": {
          backgroundColor: theme.palette.neutral[50],
        },
        "&:active": {
          backgroundColor: theme.palette.neutral[50],
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.palette.primary[100],
          color: theme.palette.primary[50],
        },
      }),
      ...(ownerState.variant === "soft" && {
        textTransform: "none",
        padding: "8px 16px",
        backgroundColor: theme.palette.neutral[200],
        color: "#232426",
        border: "none",
        borderRadius: "16px",
        lineHeight: "24px",
        fontSize: "16px",
        fontFamily: "Montserrat-Regular",
        fontWeight: "400",
        "&:hover": {
          backgroundColor: theme.palette.neutral[300],
          boxShadow: "0px 0px 2px 0px #0000001A",
        },
        "&:active": {
          backgroundColor: theme.palette.neutral[300],
          color: "#232426",
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.palette.neutral[100],
          color: theme.palette.neutral[400],
        },
      }),
      ...(ownerState.variant === "softNeutral" && {
        textTransform: "none",
        padding: "8px 16px",
        backgroundColor: theme.palette.neutral[100],
        color: theme.palette.primary[500],
        border: "none",
        borderRadius: "12px",
        lineHeight: "24px",
        fontSize: "16px",
        fontFamily: "Montserrat-Bold",
        fontWeight: "400",
        "&:hover": {
          backgroundColor: theme.palette.neutral[200],
          boxShadow: "0px 0px 2px 0px #0000001A",
        },
        "&:active": {
          backgroundColor: theme.palette.neutral[200],
          color: theme.palette.primary[500],
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.palette.neutral[100],
          color: theme.palette.primary[100],
          border: "none",
          boxShadow: "none",
        },
      }),
      ...(ownerState.variant === "text" && {
        textTransform: "none",
        padding: "8px 16px",
        backgroundColor: "transparent",
        color: "#232426",
        border: "none",
        borderRadius: "16px",
        lineHeight: "24px",
        fontSize: "16px",
        fontFamily: "Montserrat-Regular",
        fontWeight: "400",
        "&:hover": {
          backgroundColor: "#FAFAFA",
          boxShadow: "0px 0px 2px 0px #0000001A",
        },
        "&:active": {
          backgroundColor: theme.palette.neutral[300],
          color: "#232426",
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.palette.neutral[100],
          color: theme.palette.neutral[400],
        },
      }),
      ...(ownerState.variant === "outlined" && {
        textTransform: "none",
        padding: "8px 16px",
        backgroundColor: theme.palette.neutral[100],
        borderWidth: "2px",
        borderColor: "#DAE0E4",
        color: "#232426",
        borderRadius: "16px",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "Montserrat-Regular",
        fontWeight: "400",
        "&:hover": {
          borderColor: "#DAE0E4",
          color: theme.palette.neutral[600],
          backgroundColor: theme.palette.neutral[100],
        },
        "&:active": {
          borderColor: "#DAE0E4",
          color: theme.palette.neutral[600],
          backgroundColor: theme.palette.neutral[100],
        },
        [`&.${buttonClasses.disabled}`]: {
          borderColor: theme.palette.neutral[100],
          color: theme.palette.neutral[300],
          backgroundColor: "#FFFFFF",
        },
      }),
      ...(ownerState.variant === "plain" && {
        textTransform: "none",
        padding: "8px 16px",
        backgroundColor: "#FFFFFF",
        border: "none",
        color: "#232426",
        borderRadius: "16px",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "Montserrat-Bold",
        fontWeight: "400",
        "&:hover": {
          backgroundColor: theme.palette.neutral[100],
        },
        "&:active": {
          backgroundColor: theme.palette.neutral[100],
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: "#FFFFFF",
          color: theme.palette.neutral[400],
        },
      }),
      ...(ownerState.size === "sm" && {
        padding: "4px 8px",
        fontSize: "14px",
        lineHeight: "14px",
      }),
      ...(ownerState.size === "lg" && {
        padding: "14px 16px",
      }),
    }),
  },
};

export default joyButton;
