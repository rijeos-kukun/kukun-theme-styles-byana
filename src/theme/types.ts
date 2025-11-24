import type {
  ButtonProps,
  CardProps,
  SelectProps,
  TypographyProps,
} from "@mui/joy";

export interface ButtonOwnerState
  extends Omit<Partial<ButtonProps>, "variant"> {
  variant?:
    | "solid"
    | "soft"
    | "outlined"
    | "plain"
    | "text"
    | "solidWhite"
    | "softNeutral";
  active?: boolean;
  hovered?: boolean;
  focusVisible?: boolean;
}

export interface CardOwnerState extends Omit<Partial<CardProps>, "variant"> {
  variant?: "solid" | "plain" | "solidWhite" | "soft" | "outlined";
  active?: boolean;
  hovered?: boolean;
  focusVisible?: boolean;
}

export interface SelectOwnerState
  extends Omit<Partial<SelectProps<string, false>>, "variant"> {
  variant?: "outlined" | "soft" | "solid" | "plain" | "outlined_new";
}

export interface TypographyOwnerState
  extends Omit<
    Partial<TypographyProps>,
    "color" | "level" | "fontFamily" | "textTransform" | "fontWeight"
  > {
  fontFamily?:
    | "montserrat"
    | "montserrat-bold"
    | "montserrat-medium"
    | "walkester";
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  fontWeight?: "light" | "regular" | "medium" | "bold" | number;
  color?: "white" | "black" | "primary" | "secondary";
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "body3";
}
