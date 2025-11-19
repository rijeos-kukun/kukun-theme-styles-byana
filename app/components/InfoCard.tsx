import React from "react";
import { Box, Typography, Card } from "@mui/joy";
import Icon from "@mdi/react";

interface InfoCardProps {
  icon: string;
  title: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  children,
  action,
}) => {
  return (
    <Card
      variant="soft"
      sx={{
        mb: 1,
        borderRadius: "24px",
        backgroundColor: "#f6f9fb",
        p: 2.5,
        gap: 0,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          {icon && <Icon path={icon} size={1} color="black" />}
          <Typography
            ml={1}
            fontWeight="bold"
            fontSize="1.2rem"
            textColor="black"
          >
            {title}
          </Typography>
        </Box>
        {action && <Box>{action}</Box>}
      </Box>

      {children}
    </Card>
  );
};
