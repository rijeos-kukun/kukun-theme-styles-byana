import { inputClasses, type Theme } from "@mui/joy";
import { type SelectOwnerState } from "../types";

const joySelect = {
  styleOverrides: {
    root: ({
      ownerState,
      theme,
    }: {
      ownerState: SelectOwnerState;
      theme: Theme;
    }) => ({
      ...(ownerState.variant === "outlined" && {
        textTransform: "none" as any,
        padding: "8px 16px",
        backgroundColor: "#FFFFFF",
        borderWidth: "1px",
        borderColor: theme.palette.primary[500],
        color: "#232426",
        borderRadius: "12px",
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "Montserrat-Medium",
        "--Input-focusedThickness": "0px",
        [`&.${inputClasses.disabled}`]: {
          borderWidth: "1px",
          borderColor: theme.palette.primary[300],
          color: theme.palette.neutral[400],
        },
      }),
      ...(ownerState.variant === "outlined_new" && {
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
    }),
  },
};

export default joySelect;
