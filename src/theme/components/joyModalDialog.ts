import { type Theme } from "@mui/joy";

const joyModalDialog = {
  defaultProps: { variant: "plain" as const },
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      borderRadius: "25px",
      backgroundColor: "#fff",
      maxWidth: 640,
      paddingTop: 32,
      paddingBottom: 32,
      paddingLeft: 24,
      paddingRight: 24,
      width: "85vw",
      [theme.breakpoints.up("sm")]: { width: "75vw" },
      [theme.breakpoints.up("md")]: { width: "65vw" },
      [theme.breakpoints.up("lg")]: { width: "55vw" },
      [theme.breakpoints.up("xl")]: { width: "45vw" },
      gap: 12,
      boxShadow: "0 12px 32px rgba(16,24,40,0.18)",
    }),
  },
};

export default joyModalDialog;
