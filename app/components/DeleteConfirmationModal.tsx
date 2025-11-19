"use client";

import React from "react";
import {
  Modal,
  ModalDialog,
  Typography,
  Button,
  Box,
  ModalClose,
} from "@mui/joy";
import { useTranslation } from "react-i18next";

interface DeleteConfirmationModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmationModal: React.FC<
  DeleteConfirmationModalProps
> = ({ open, onCancel, onConfirm }) => {
  const { t } = useTranslation();
  return (
    <Modal open={open} onClose={onCancel}>
      <ModalDialog
        variant="plain"
        sx={{
          borderRadius: "25px",
          width: "100%",
          maxWidth: 640,
          py: 4,
          px: 3,
          textAlign: "center",
        }}
      >
        <ModalClose />
        <Typography level="title-lg" fontFamily="Montserrat-Bold" mb={1}>
          {t("confirmDeleteGroup")}
        </Typography>
        <Typography level="body-md" mb={3}>
          {t("deleteAllPermissionsWarning")}
        </Typography>
        <Box display="flex" gap={2} justifyContent="center" width="100%">
          <Button
            variant="soft"
            color="neutral"
            onClick={onCancel}
            sx={{ minWidth: 120, width: "100%" }}
          >
            {t("cancel")}
          </Button>
          <Button
            variant="solid"
            color="danger"
            onClick={onConfirm}
            sx={{ minWidth: 120, width: "100%" }}
          >
            Borrar
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
};
