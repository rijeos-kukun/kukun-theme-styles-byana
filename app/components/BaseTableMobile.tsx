"use client";

import {
  Box,
  Card,
  IconButton,
  Option,
  Select,
  Stack,
  Typography,
} from "@mui/joy";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { ReactNode } from "react";

export type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => ReactNode;
};

interface BaseTableMobileProps<T> {
  columns: Column<T>[];
  rows: T[];
  page: number;
  rowsPerPage: number;
  totalRows: number;
  onChangePage: (newPage: number) => void;
  onChangeRowsPerPage: (newValue: number) => void;
}

export const BaseTableMobile = <T,>({
  columns,
  rows,
  page,
  rowsPerPage,
  totalRows,
  onChangePage,
  onChangeRowsPerPage,
}: BaseTableMobileProps<T>) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  return (
    <>
      <Stack spacing={0} p={0}>
        {rows.map((row, i) => (
          <Card key={i} variant="outlined" sx={{ borderRadius: 3, p: 2 }}>
            {columns.map((col) => (
              <Box
                key={String(col.key)}
                display="flex"
                flexDirection="row"
                mb={1}
              >
                <Typography
                  level="body-sm"
                  sx={{ fontWeight: 600, minWidth: 100, mr: 1 }}
                >
                  {col.label}:
                </Typography>
                <Box>
                  {col.render
                    ? col.render(row)
                    : String(row[col.key as keyof T])}
                </Box>
              </Box>
            ))}
          </Card>
        ))}
      </Stack>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        py={1.5}
        sx={{ backgroundColor: "#fff", borderTop: "1px solid #eee" }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Typography fontSize="10px">Rows per page:</Typography>
          <Select
            sx={{ fontSize: "12px", height: "20px", border: "none" }}
            size="sm"
            value={rowsPerPage}
            onChange={(_, value) => onChangeRowsPerPage(Number(value))}
          >
            {[5, 10, 20].map((value) => (
              <Option key={value} value={value} sx={{ fontSize: "12px" }}>
                {value}
              </Option>
            ))}
          </Select>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography fontSize="10px">
            {`${(page - 1) * rowsPerPage + 1}-${Math.min(
              page * rowsPerPage,
              totalRows
            )} of ${totalRows}`}
          </Typography>

          <IconButton
            size="sm"
            variant="plain"
            disabled={page === 1}
            onClick={() => onChangePage(page - 1)}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            size="sm"
            variant="plain"
            disabled={page === totalPages}
            onClick={() => onChangePage(page + 1)}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
