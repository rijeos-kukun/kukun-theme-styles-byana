import { Theme } from "@mui/joy";
import { CardOwnerState } from "../types";

const joyCard = {
  styleOverrides: {
    root: ({
      ownerState,
      theme,
    }: {
      ownerState: CardOwnerState;
      theme: Theme;
    }) => ({
      ...(ownerState.variant === "solid" && {
        padding: "16px",
        backgroundColor: theme.palette.neutral[100],
        border: "none",
        borderRadius: "24px",
        gap: "4px",
        "&:hover": {
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.25)",
          border: "none",
        },
      }),
      ...(ownerState.variant === "plain" && {
        padding: "16px",
        backgroundColor: theme.palette.common["white"],
        border: "none",
        borderRadius: "24px",
        gap: "4px",
        "&:hover": {
          cursor: "default",
        },
      }),
      ...(ownerState.variant === "solidWhite" && {
        padding: "16px",
        backgroundColor: theme.palette.common["white"],
        border: "none",
        borderRadius: "16px",
        gap: "4px",
        "&:hover": {
          cursor: "default",
        },
      }),
    }),
  },
};

export default joyCard;
