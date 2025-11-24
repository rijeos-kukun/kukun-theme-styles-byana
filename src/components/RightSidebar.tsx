import React from "react";
import { Drawer, Box, IconButton, Typography, Divider } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import Icon from "@mdi/react";
import { mdiPower } from "@mdi/js";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const RightSidebar: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        content: {
          sx: {
            width: 220,
            maxWidth: "80vw",
            p: 2,
          },
        },
      }}
    >
      <Box>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
        >
          <Icon path={mdiPower} size={1} />
          <Typography fontWeight={600}>Log out</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
      </Box>
    </Drawer>
  );
};
