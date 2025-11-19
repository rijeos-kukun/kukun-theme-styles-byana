import { Card, Grid, Typography } from "@mui/joy";
import React from "react";

interface CardData {
  title: string;
  value: number | string;
}
interface MultipleCardProps {
  data: CardData[];
}

export const MultipleCard: React.FC<MultipleCardProps> = ({ data }) => {
  return (
    <Card sx={{ border: "none", borderRadius: "18px", minHeight: "90px" }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid key={index} xs={12} sm={4}>
            <Card variant="soft">
              <Typography level="body-md">{item.title}</Typography>
              <Typography fontFamily="Montserrat-Bold" fontSize={24}>
                {item.value}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
