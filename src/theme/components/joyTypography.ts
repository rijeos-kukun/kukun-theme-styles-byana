const joyTypography = {
  defaultProps: {
    fontFamily: "Montserrat-Regular",
    fontWeight: "400",
    color: "neutral.800" as any,
  },
  styleOverrides: {
    root: ({ ownerState, theme }: any) => ({
      letterSpacing: "normal",
      fontStretch: "100%",
      fontKerning: "normal",
      textRendering: "optimizeLegibility",
      ...(ownerState.level === "h1" && {
        fontSize: "80px",
        lineHeight: "80px",
      }),
      ...(ownerState.level === "h2" && {
        fontSize: "50px",
        lineHeight: "50px",
      }),
      ...(ownerState.level === "h3" && {
        fontSize: "40px",
        lineHeight: "40px",
      }),
      ...(ownerState.level === "h4" && {
        fontSize: "30px",
        lineHeight: "30px",
      }),
      ...(ownerState.level === "h5" && {
        fontSize: "24px",
        lineHeight: "30px",
      }),
      ...(ownerState.level === "h6" && {
        fontSize: "20px",
        lineHeight: "25px",
      }),
      ...(ownerState.level === "body1" && {
        fontSize: "16px",
        lineHeight: "20px",
      }),
      ...(ownerState.level === "body2" && {
        fontSize: "14px",
        lineHeight: "18px",
      }),
      ...(ownerState.level === "body3" && {
        fontSize: "12px",
        lineHeight: "16px",
      }),
      ...(ownerState.fontSize === "xl" && {
        fontSize: "20px",
        lineHeight: "25px",
      }),

      ...(ownerState.textTransform === "uppercase" && {
        textTransform: "uppercase",
      }),

      ...(ownerState.fontFamily === "walkester" && {
        fontFamily: "walkester",
        letterSpacing: "normal",
        fontStretch: "100%",
        fontKerning: "normal",
      }),
      ...(ownerState.fontFamily === "montserrat" && {
        fontFamily: "Montserrat-Regular",
      }),
      ...(ownerState.fontFamily === "montserrat-bold" && {
        fontFamily: "Montserrat-Bold",
      }),
      ...(ownerState.fontFamily === "montserrat-medium" && {
        fontFamily: "Montserrat-Medium",
      }),

      // Configuraciones de peso de fuente basadas en nivel (si no se proporciona explícitamente)
      ...(!ownerState.fontWeight &&
        ownerState.level?.match(/^h[1-4]$/) && {
          fontWeight: "400",
        }),
      ...(!ownerState.fontWeight &&
        ownerState.level === "h5" && {
          fontWeight: "600",
        }),
      ...(!ownerState.fontWeight &&
        ownerState.level === "h6" && {
          fontWeight: "500",
        }),
      ...(!ownerState.fontWeight &&
        ownerState.level?.match(/^body[1-3]$/) && {
          fontWeight: "400",
        }),

      // Atajos para pesos de fuente comunes (cuando se proporcionan explícitamente)
      ...(ownerState.fontWeight === "light" && {
        fontWeight: theme.typography.fontWeightLight,
      }),
      ...(ownerState.fontWeight === "regular" && {
        fontWeight: theme.typography.fontWeightRegular,
      }),
      ...(ownerState.fontWeight === "medium" && {
        fontWeight: theme.typography.fontWeightMedium,
      }),
      ...(ownerState.fontWeight === "bold" && {
        fontWeight: theme.typography.fontWeightBold,
      }),

      // Atajos para colores comunes
      ...(ownerState.color === "white" && {
        color: theme.palette.common.white,
      }),
      ...(ownerState.color === "black" && {
        color: theme.palette.common.black,
      }),
      ...(ownerState.color === "primary" && {
        color: theme.palette.primary[500],
      }),
      ...(ownerState.color === "secondary" && {
        color: theme.palette.secondary[500],
      }),
    }),
  },
};

export default joyTypography;
