import { inputClasses, type InputProps, type Theme } from "@mui/joy";

const joyInput = {
  styleOverrides: {
    root: ({
      ownerState,
      theme,
    }: {
      ownerState: InputProps;
      theme: Theme;
    }) => ({
      ...(ownerState.variant === "solid" && {
        textTransform: "none" as any,
        padding: "8px 16px",
        backgroundColor: theme.palette.neutral[200],
        color: theme.palette.common["black"],
        border: "none",
        borderRadius: "16px",
        fontSize: "16px",
        lineHeight: "16px",
        boxShadow: "0px 0px 0px 0px #0000001A",
        fontFamily: "Montserrat-Regular",
        "--Input-focusedThickness": "0px",
        "&:hover": {
          boxShadow: "0px 0px 2px 0px #0000001A",
        },
        [`&.${inputClasses.disabled}`]: {
          backgroundColor: theme.palette.neutral[100],
          color: theme.palette.neutral[400],
        },
      }),
      ...(ownerState.variant === "soft" && {
        textTransform: "none",
        padding: "8px 16px",
        backgroundColor: theme.palette.neutral[100],
        color: "#232426",
        border: "none",
        borderRadius: "16px",
        fontSize: "16px",
        lineHeight: "16px",
        boxShadow: "0px 0px 0px 0px #0000001A",
        fontFamily: "Montserrat-Regular",
        "--Input-focusedThickness": "0px",
        "&:hover": {
          boxShadow: "0px 0px 2px 0px #0000001A",
        },
        [`&.${inputClasses.disabled}`]: {
          backgroundColor: theme.palette.neutral[100],
          color: theme.palette.neutral[400],
        },
      }),
      ...(ownerState.variant === "outlined" && {
        textTransform: "none",
        padding: "8px 16px",
        backgroundColor: "#FFFFFF",
        borderWidth: "2px",
        borderColor: theme.palette.success[500],
        color: theme.palette.neutral[600],
        borderRadius: "16px",
        fontSize: "16px",
        lineHeight: "16px",
        boxShadow: "0px 0px 0px 0px #0000001A",
        fontFamily: "Montserrat-Regular",
        "--Input-focusedThickness": "0px",
        [`&.${inputClasses.disabled}`]: {
          borderWidth: "1px",
          borderColor: theme.palette.neutral[300],
          color: theme.palette.neutral[400],
        },
      }),
      ...(ownerState.variant === "plain" && {
        textTransform: "none",
        padding: "8px 16px",
        backgroundColor: "#FFFFFF",
        color: "#232426",
        border: "none",
        borderRadius: "16px",
        fontSize: "16px",
        lineHeight: "16px",
        boxShadow: "0px 0px 0px 0px #0000001A",
        fontFamily: "Montserrat-Regular",
        "--Input-focusedThickness": "0px",
        "&:hover": {
          boxShadow: "0px 0px 2px 0px #0000001A",
        },
        [`&.${inputClasses.disabled}`]: {
          backgroundColor: theme.palette.neutral[100],
          color: theme.palette.neutral[400],
        },
      }),
    }),
  },
};

export default joyInput;
