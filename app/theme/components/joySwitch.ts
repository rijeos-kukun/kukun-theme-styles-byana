const joySwitch = {
  styleOverrides: {
    root: {
      "--Switch-trackBackground": "#e4e4e4",
      "--Switch-trackBorderColor": "transparent",
      "--Switch-thumbBackground": "#fff",
      transform: "scale(1.3)",
      transformOrigin: "center",

      '&[aria-checked="true"]': {
        "--Switch-trackBackground": "#fb0c23",
      },
    } as const,
  },
};

export default joySwitch;
