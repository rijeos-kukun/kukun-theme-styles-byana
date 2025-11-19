import "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    secondary: true;
    accent: true;
  }
  interface Palette {
    secondary?: PaletteRange;
    accent?: PaletteRange;
  }

  interface PaletteVars {
    secondary?: PaletteRange;
    accent?: PaletteRange;
  }

  interface PaletteNeutral {
    150?: string;
  }

  interface TypographySystem {
    fontWeightLight?: number;
    fontWeightRegular?: number;
    fontWeightMedium?: number;
    fontWeightBold?: number;
  }

  interface ColorSystemOverride {
    secondary: true;
    accent: true;
  }
}
