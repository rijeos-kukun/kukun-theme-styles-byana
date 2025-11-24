
import {
  Modal,
  ModalDialog,
  Typography,
  Button,
  Box,
  ModalClose,
} from "@mui/joy";
import Icon from "@mdi/react";

interface ConfirmationModalProps<T> {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  confirmColor?: "primary" | "danger" | "success" | "warning";
  data?: T | null;
  loading?: boolean;
  icon?: string;
}

export const ConfirmationModal = <T,>({
  open,
  onCancel,
  onConfirm,
  title,
  description,
  cancelText = "Cancelar",
  confirmText = "Confirmar",
  confirmColor = "danger",
  loading,
  icon,
}: ConfirmationModalProps<T>) => {
  return (
    <Modal open={open} onClose={onCancel}>
      <ModalDialog
        variant="plain"
        sx={{
          borderRadius: "25px",
          width: { xs: "80%", md: "100%" },
          maxWidth: 640,
          py: 4,
          px: 3,
          textAlign: "center",
        }}
      >
        <ModalClose />
        <Typography level="title-lg" fontFamily="Montserrat-Bold" mb={1}>
          {title}
        </Typography>
        <Typography level="body-md" mb={3}>
          {description}
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
          justifyContent="center"
          width="100%"
        >
          <Button
            variant="soft"
            color="neutral"
            onClick={onCancel}
            sx={{ minWidth: 120, width: "100%" }}
          >
            {cancelText}
          </Button>
          <Button
            variant="solid"
            loading={loading}
            color={confirmColor}
            onClick={onConfirm}
            sx={{ minWidth: 120, width: "100%", gap: 2 }}
          >
            {icon && <Icon path={icon} size={1} color="white" />}
            {confirmText}
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
};
