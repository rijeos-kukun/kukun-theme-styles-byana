import React from "react";
import { Typography, Card, Box } from "@mui/joy";
import type { SxProps } from "@mui/joy/styles/types";

interface SectionCardListProps {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  columns?: number;
  goBack?: React.ReactNode;
  sx?: SxProps;
}

export const SectionCardList: React.FC<SectionCardListProps> = ({
  title,
  children,
  action,
  columns,
  goBack,
  sx,
}) => {
  return (
    <>
      <Card
        variant="soft"
        sx={{
          borderRadius: "24px 24px 0px 0px",
          backgroundColor: "#f6f9fb",
          width: "100%",
          p: { xs: 2 },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            gap={1}
          >
            {goBack && <Box>{goBack}</Box>}
            <Typography
              level="h4"
              textColor="#232426"
              fontFamily="Montserrat-Bold"
              fontSize="24px"
            >
              {title}
            </Typography>
          </Box>
          {action && <Box>{action}</Box>}
        </Box>
      </Card>
      <Card
        sx={{
          borderRadius: "0px 0px 24px 24px",
          backgroundColor: "#fff",
          border: 0,
          p: { xs: 2 },
        }}
      >
        <Box
          display="grid"
          sx={sx}
          gridTemplateColumns={{
            xs: "1fr",
            md: `repeat(${columns}, 1fr)`,
          }}
          gap={2}
        >
          {children}
        </Box>
      </Card>
    </>
  );
};
