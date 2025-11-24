import React from "react";
import { Button, ButtonGroup } from "@mui/joy";

type ToggleOption = {
  label: string;
  value: string;
  onClick: () => void;
  textColor: string;
  bgColor: string;
  hoverBgColor?: string;
  inactiveTextColor?: string;
};

interface CustomToggle2Props {
  value?: string;
  option1: ToggleOption;
  option2: ToggleOption;
  option3: ToggleOption;
  containerBgColor?: string;
}

export const CustomToggle2: React.FC<CustomToggle2Props> = ({
  value,
  option1,
  option2,
  option3,
  containerBgColor = "#f0f0f0",
}) => {
  const isOption1Selected = value === option1.value;
  const isOption2Selected = value === option2.value;
  const isOption3Selected = option3 && value === option3.value;

  return (
    <ButtonGroup
      variant="solid"
      sx={{
        bgcolor: containerBgColor,
        borderRadius: "12px",
        p: "1px",
        height: "36px",
        alignItems: "center",
        gap: 0,
      }}
    >
      <Button
        onClick={option1.onClick}
        sx={{
          borderRadius: option3 ? "12px 0px 0px 12px" : "12px 0px 0px 12px",
          bgcolor: isOption1Selected ? option1.bgColor : "transparent",
          color: isOption1Selected
            ? option1.textColor
            : option1.inactiveTextColor || "#555",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: isOption1Selected
              ? option1.hoverBgColor || option1.bgColor
              : "#e2e2e2",
          },
        }}
      >
        {option1.label}
      </Button>

      <Button
        onClick={option2.onClick}
        sx={{
          borderRadius: option3 ? "0px" : "0px 12px 12px 0px",
          bgcolor: isOption2Selected ? option2.bgColor : "transparent",
          color: isOption2Selected
            ? option2.textColor
            : option2.inactiveTextColor || "#555",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: isOption2Selected
              ? option2.hoverBgColor || option2.bgColor
              : "#e2e2e2",
          },
        }}
      >
        {option2.label}
      </Button>

      {option3 && (
        <Button
          onClick={option3.onClick}
          sx={{
            borderRadius: "0px 12px 12px 0px",
            bgcolor: isOption3Selected ? option3.bgColor : "transparent",
            color: isOption3Selected
              ? option3.textColor
              : option3.inactiveTextColor || "#555",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: isOption3Selected
                ? option3.hoverBgColor || option3.bgColor
                : "#e2e2e2",
            },
          }}
        >
          {option3.label}
        </Button>
      )}
    </ButtonGroup>
  );
};
