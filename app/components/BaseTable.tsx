"use client";

import {
  Box,
  Typography,
  Table,
  Stack,
  Sheet,
  Card,
  Select,
  Option,
  IconButton,
  useTheme,
} from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { ReactNode, useMemo, useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { BaseTableMobile } from "./BaseTableMobile";

export type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => ReactNode;
};

interface BaseTableProps<T> {
  title?: string;
  columns: Column<T>[];
  rows: T[];
  filtersSelect?: ReactNode;
  filtersSearch?: ReactNode;
  extraHeaderContent?: ReactNode;
  pagination?: ReactNode;
  tabs?: ReactNode;
  onRowClick?: (row: T) => void;
  goBack?: React.ReactNode;
  whiteTable?: boolean;
  enableOverflow?: boolean;
  externalPagination?: {
    page: number;
    rowsPerPage: number;
    totalRows: number;
    onPageChange: (newPage: number) => void;
    onRowsPerPageChange: (newRowsPerPage: number) => void;
  };
}

export function BaseTable<T>({
  title,
  columns,
  rows,
  filtersSelect,
  filtersSearch,
  extraHeaderContent,
  tabs,
  onRowClick,
  goBack,
  whiteTable,
  enableOverflow = false,
  externalPagination,
}: BaseTableProps<T>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [internalPage, setInternalPage] = useState(1);
  const [internalRowsPerPage, setInternalRowsPerPage] = useState(10);

  const page = externalPagination?.page ?? internalPage;
  const rowsPerPage = externalPagination?.rowsPerPage ?? internalRowsPerPage;
  const totalRows = externalPagination?.totalRows ?? rows.length;

  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const paginatedRows = useMemo(
    () =>
      externalPagination
        ? rows
        : rows.slice((page - 1) * rowsPerPage, page * rowsPerPage),
    [rows, page, rowsPerPage, externalPagination]
  );

  const handleChangePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      if (externalPagination) {
        externalPagination.onPageChange(newPage);
      } else {
        setInternalPage(newPage);
      }
    }
  };

  const handleChangeRowsPerPage = (value: number) => {
    if (externalPagination) {
      externalPagination.onRowsPerPageChange(value);
    } else {
      setInternalRowsPerPage(value);
      setInternalPage(1);
    }
  };

  return (
    <>
      <Card
        variant="soft"
        sx={{
          mt: whiteTable ? 0 : 3,
          borderRadius: "24px 24px 0px 0px",
          backgroundColor: whiteTable ? "#fff" : "#f6f9fb",

          width: { xs: "none", md: enableOverflow ? 1000 : "100%", xl: "100%" },
          p: whiteTable ? 0 : 2,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={5}
          pt={1}
          px={1}
        >
          {(goBack || title || filtersSelect) && (
            <Box
              display="flex"
              alignItems="center"
              width="50%"
              flexDirection={{ xs: "column", md: "row" }}
            >
              {goBack && <Box mr="10px">{goBack}</Box>}
              {title && (
                <Typography
                  level="h4"
                  textColor="#232426"
                  fontFamily="Montserrat-Bold"
                  fontSize="24px"
                  mr="10px"
                >
                  {title}
                </Typography>
              )}
              {filtersSelect && <Box width="100%">{filtersSelect}</Box>}
            </Box>
          )}

          <Box
            display="flex"
            alignItems="center"
            justifyContent={
              goBack || title || filtersSelect ? "end" : "space-between"
            }
            gap={1}
            width={goBack || title || filtersSelect ? "50%" : "100%"}
          >
            {filtersSearch && (
              <Box width="100%" maxWidth="250px">
                {filtersSearch}
              </Box>
            )}
            {extraHeaderContent}
          </Box>
        </Stack>
        {tabs}
      </Card>

      {isMobile ? (
        // MOBILE VIEW
        <BaseTableMobile
          columns={columns}
          rows={paginatedRows}
          page={page}
          rowsPerPage={rowsPerPage}
          totalRows={rows.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      ) : (
        // DESKTOP VIEW
        <Sheet
          sx={{
            p: 0,
            borderRadius: "0px 0px 24px 24px",
            overflow: enableOverflow ? "auto" : "hidden",
            backgroundColor: "#fff",

            width: { md: enableOverflow ? 1000 : "100%", xl: "100%" },
          }}
        >
          <Table
            size="sm"
            stickyHeader
            style={{ tableLayout: "auto", width: "100%" }}
            sx={{
              "--TableCell-headBackground": whiteTable ? "#fff" : "#f6f9fb",
              "--TableCell-border": "none",
              borderCollapse: "separate",
              borderSpacing: 0,
              "& thead th": {
                backgroundColor: whiteTable ? "#fff" : "#f6f9fb",
                fontWeight: 600,
                fontFamily: "Montserrat-Bold",
                fontSize: 12,
                color: "#6d6e6f",
                paddingY: 1.5,
                paddingX: 2,
                verticalAlign: "middle",
                textAlign: "center",
                lineHeight: 1.2,
              },
              "& tbody tr:hover": {
                backgroundColor: "#eeeeee",
                cursor: "pointer",
              },
              "& tbody td": {
                borderTop: "0px solid #eee",
                fontFamily: "Montserrat-Regular",
                paddingX: 2,
                paddingY: 1,
                fontSize: 12,
                color: "#333",
                verticalAlign: "middle",
                textAlign: "center",
              },

              "& tbody tr": {
                height: 55,
              },
              ".col-name": {
                maxWidth: 200,
              },
              ".col-area": {
                maxWidth: 200,
              },
              ".col-email": {
                maxWidth: 210,
                minWidth: 90,
                whiteSpace: "normal",
                wordBreak: "break-word",
                textAlign: "center",
              },
              ".col-functions": {
                maxWidth: 310,
                minWidth: 90,
                whiteSpace: "normal",
                wordBreak: "break-word",
              },
              ".col-actions": {
                maxWidth: 70,
                textAlign: "center",
              },
              ".col-employee_num": {
                maxWidth: 90,
                textAlign: "center",
              },
              ".col-dependency": {
                maxWidth: 90,
                textAlign: "center",
              },
              ".col-status": {
                maxWidth: 70,
                textAlign: "center",
              },
              ".col-complex": {
                maxWidth: 70,
                textAlign: "center",
              },

              ".col-position": {
                maxWidth: 150,
              },
              ".col-dates": {
                maxWidth: 150,
                textAlign: "center",
              },
              ".col-positionAction": {
                maxWidth: 70,
                textAlign: "center",
              },
              ".col-percentage": {
                maxWidth: 70,
                textAlign: "center",
              },
              ".col-allListings": {
                maxWidth: 70,
                textAlign: "center",
              },
              ".col-adjustment": {
                maxWidth: 70,
                textAlign: "center",
              },
              ".col-amountOfReservations": {
                maxWidth: 70,
                minWidth: 40,

                wordBreak: "break-word",
                textAlign: "center",
              },
            }}
          >
            <thead>
              <tr>
                {columns.map((col) => (
                  <th
                    key={String(col.key)}
                    className={`col-${String(col.key)}`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    style={{
                      textAlign: "center",
                      padding: "2px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <Typography level="body-sm" sx={{ color: "#999" }}>
                      No data available
                    </Typography>
                  </td>
                </tr>
              ) : (
                paginatedRows.map((row, i) => (
                  <tr
                    key={i}
                    onClick={() => onRowClick?.(row)}
                    style={{ cursor: onRowClick ? "pointer" : "default" }}
                  >
                    {columns.map((col) => (
                      <td
                        key={String(col.key)}
                        className={`col-${String(col.key)}`}
                      >
                        {col.render
                          ? col.render(row)
                          : (row[col.key as keyof T] as ReactNode)}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </Table>

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
                onChange={(_, value) => handleChangeRowsPerPage(Number(value))}
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
                onClick={() => handleChangePage(page - 1)}
              >
                <KeyboardArrowLeft />
              </IconButton>
              <IconButton
                size="sm"
                variant="plain"
                disabled={page === totalPages}
                onClick={() => handleChangePage(page + 1)}
              >
                <KeyboardArrowRight />
              </IconButton>
            </Box>
          </Box>
        </Sheet>
      )}
    </>
  );
}
