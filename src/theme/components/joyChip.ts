import { type ChipProps, type Theme } from "@mui/joy";

const joyChip = {
  styleOverrides: {
    root: ({ ownerState, theme }: { ownerState: ChipProps; theme: Theme }) => ({
      ...(ownerState.variant === "soft" && {
        minHeight: "19px !important",
        height: "19px",
        width: "100%",
        padding: "0px 12px",
        fontFamily: "Montserrat-Regular",
        fontSize: "10px",
        lineHeight: "17px",
        borderRadius: "16px",

        ...(ownerState.color === "primary" && {
          backgroundColor: theme.palette.primary[100],
          color: theme.palette.primary[700],
        }),
        ...(ownerState.color === "success" && {
          backgroundColor: theme.palette.success[100],
          color: theme.palette.success[700],
        }),
        ...(ownerState.color === "danger" && {
          backgroundColor: theme.palette.danger[100],
          color: theme.palette.danger[700],
        }),
        ...(ownerState.color === "warning" && {
          backgroundColor: theme.palette.warning[100],
          color: theme.palette.warning[700],
        }),
        ...(ownerState.color === "neutral" && {
          backgroundColor: theme.palette.neutral[100],
          color: theme.palette.neutral[700],
        }),
        // Si no se especifica color, usar blanco/negro por defecto
        ...(!ownerState.color && {
          backgroundColor: theme.palette.common["white"],
          color: theme.palette.common["black"],
          "&:hover": {
            backgroundColor: theme.palette.common["white"],
          },
        }),
      }),
      ...(ownerState.variant === "solid" && {
        minHeight: "19px !important",
        height: "19px",
        width: "100%",
        padding: "0px 12px",
        fontFamily: "Montserrat-Regular",
        fontSize: "10px",
        lineHeight: "17px",
        borderRadius: "16px",
        color: theme.palette.common["white"],
      }),
    }),
  },
};

export default joyChip;
