"use client";

import { extendTheme } from "@mui/joy/styles";
import joyButton from "./components/joyButton";
import joyCard from "./components/joyCard";
import joyCheckbox from "./components/joyCheckbox";
import joyChip from "./components/joyChip";
import joyInput from "./components/joyInput";
import joySelect from "./components/joySelect";
import typography from "./typography";
import joyTypography from "./components/joyTypography";
import joySwitch from "./components/joySwitch";
import joyModal from "./components/joyModal";
import joyModalDialog from "./components/joyModalDialog";
import joyModalClose from "./components/joyModalClose";
import joySnackbar from "./components/joySnackbar";

export const kukunTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        common: {
          white: "#FFFFFF",
          black: "#232426",
        },
        primary: {
          50: "#FFFDFD",
          100: "#FECDD1",
          200: "#FD9CA6",
          300: "#FD6C7A",
          400: "#FC3C4F",
          500: "#FB0C23",
          // 500: '#4f0bb0',
          600: "#C3091B",
          700: "#8A0713",
          800: "#52040B",
          900: "#001A1A",
        },
        secondary: {
          50: "#FFFFFE",
          100: "#F5F9F4",
          200: "#EBF3E9",
          300: "#E1EEDE",
          400: "#D7E8D3",
          500: "#CDE2C8",
          600: "#9FAF9B",
          700: "#717C6E",
          800: "#434941",
          900: "#151714",
        },
        neutral: {
          50: "#FCFCFC",
          100: "#F6F9FB",
          150: "#F0E8D8",
          200: "#ECEFF1",
          300: "#DAE0E4",
          400: "#CDD2D9",
          500: "#9A9DA3",
          600: "#66686B",
          700: "#424242",
          800: "#3A3A3B",
          900: "#232426",
        },
        warning: {
          50: "#FFFEFD",
          100: "#FAF2CF",
          200: "#F6E5A0",
          300: "#F2D872",
          400: "#EDCC44",
          500: "#E9BF16",
          600: "#B59411",
          700: "#80690C",
          800: "#4C3E07",
          900: "#171302",
        },
        danger: {
          50: "#FFFDFD",
          100: "#FECDD1",
          200: "#FD9CA6",
          300: "#FD6C7A",
          400: "#FC3C4F",
          500: "#FB0C23",
          600: "#C3091B",
          700: "#8A0713",
          800: "#52040B",
          900: "#001A1A",
        },
        success: {
          50: "#FFFFFE",
          100: "#F5F9F4",
          200: "#EBF3E9",
          300: "#E1EEDE",
          400: "#D7E8D3",
          500: "#CDE2C8",
          600: "#9FAF9B",
          700: "#717C6E",
          800: "#434941",
          900: "#151714",
        },
        accent: {
          500: "#1653F0",
        },
      },
    },
  },
  typography,
  components: {
    JoyButton: joyButton,
    JoyCard: joyCard,
    JoyCheckbox: joyCheckbox,
    JoyChip: joyChip,
    JoyInput: joyInput,
    JoySelect: joySelect,
    JoyTypography: joyTypography,
    JoySwitch: joySwitch,
    JoyModal: joyModal,
    JoyModalDialog: joyModalDialog,
    JoyModalClose: joyModalClose,
    JoySnackbar: joySnackbar,
  },
});
