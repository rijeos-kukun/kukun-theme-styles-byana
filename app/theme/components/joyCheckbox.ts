import { checkboxClasses, CheckboxOwnerState, Theme } from "@mui/joy";

const joyCheckbox = {
  styleOverrides: {
    checkbox: ({
      ownerState,
      theme,
    }: {
      ownerState: CheckboxOwnerState;
      theme: Theme;
    }) => ({
      ...(ownerState.size === "sm" && {
        borderWidth: "1px",
      }),
      ...(ownerState.size === "md" && {
        borderWidth: "2px",
      }),
      ...(ownerState.size === "lg" && {
        borderWidth: "1px",
      }),
      borderColor: theme.palette.primary[500],
      [`&.${checkboxClasses.checked}`]: {
        borderColor: theme.palette.primary[500],
        "& svg": {
          color: "#232426",
        },
      },
      [`&.${checkboxClasses.disabled}`]: {
        borderColor: theme.palette.neutral[300],
        backgroundColor: theme.palette.neutral[100],
      },
    }),
  },
};

export default joyCheckbox;
