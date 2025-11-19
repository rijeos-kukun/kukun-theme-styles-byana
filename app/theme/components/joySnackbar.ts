const joySnackbar = {
  styleOverrides: {
    root: ({ ownerState, theme }: any) => ({
      ...(ownerState.color === "success" && {
        backgroundColor: "#4daf4f",
        color: theme.palette.common.white,
        fontFamily: "Montserrat-Regular",
        fontSize: "14px",
        fontWeight: "400",
      }),
      ...(ownerState.color === "danger" && {
        backgroundColor: "#ff5252",
        color: theme.palette.common.white,
        fontFamily: "Montserrat-Regular",
        fontSize: "14px",
        fontWeight: "400",
      }),
      borderRadius: "12px",
      padding: "12px 16px",
      minWidth: "300px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      display: "flex" as const,
      justifyContent: "center" as const,
      alignItems: "center" as const,
      textAlign: "center" as const,
      position: "fixed" as const,
      bottom: 24,
      left: "35%",
      right: "35%",
    }),
  },
};

export default joySnackbar;
