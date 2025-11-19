"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Divider,
  Card,
  Chip,
  Checkbox,
  Input,
  Select,
  Option,
  Switch,
  Snackbar,
} from "@mui/joy";
import { BaseTable, Column } from "@/app/components/BaseTable";
import { CircularCheckbox } from "@/app/components/CircularCheckbox";
import { ConfirmationModal } from "@/app/components/ConfirmationModal";
import { Container } from "@/app/components/Container";
import { CustomToggle } from "@/app/components/CustomToggle";
import { CustomToggle2 } from "@/app/components/CustomToggle2";
import FilterItem from "@/app/components/FilterItem";
import { FilterButton } from "@/app/components/FilterButton";
import { MultipleCard } from "@/app/components/MultipleCard";
import { DeleteConfirmationModal } from "@/app/components/DeleteConfirmationModal";
import { InfoCard } from "@/app/components/InfoCard";
import { SectionCardList } from "@/app/components/SectionCardList";
import { SectionTitle } from "@/app/components/SectionTitle";
import { TooltipButton } from "@/app/components/TooltipButton";
import {
  mdiAccount,
  mdiHome,
  mdiEmail,
  mdiPhone,
  mdiDelete,
  mdiPencil,
} from "@mdi/js";

interface ExampleUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function ExamplesPage() {
  // Solo mostrar en desarrollo
  // if (process.env.NODE_ENV !== "development") {
  //   return (
  //     <Container>
  //       <Box
  //         sx={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           minHeight: "50vh",
  //         }}
  //       >
  //         <Typography level="h2" sx={{ color: "#656B6D" }}>
  //           Esta página solo está disponible en modo desarrollo
  //         </Typography>
  //       </Box>
  //     </Container>
  //   );
  // }
  // Estados para ejemplos
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [toggleValue, setToggleValue] = useState("option1");
  const [toggle2Value, setToggle2Value] = useState("tab1");
  const [filterValue, setFilterValue] = useState("");
  const [filterActive, setFilterActive] = useState(false);
  const [dateFilter, setDateFilter] = useState<Date | null>(null);
  const [multipleFilterValue, setMultipleFilterValue] = useState<string[]>([]);
  const [dateRangeFilter, setDateRangeFilter] = useState<
    [Date | null, Date | null]
  >([null, null]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // Estados para componentes Joy UI
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState<"success" | "danger">(
    "success"
  );

  // Datos de ejemplo para la tabla
  const exampleUsers: ExampleUser[] = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "Admin" },
    { id: 2, name: "María García", email: "maria@example.com", role: "User" },
    { id: 3, name: "Carlos López", email: "carlos@example.com", role: "User" },
  ];

  const columns: Column<ExampleUser>[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Nombre" },
    { key: "email", label: "Email" },
    { key: "role", label: "Rol" },
  ];

  // Datos de ejemplo para MultipleCard
  const multipleCardData = [
    { title: "Total Usuarios", value: 1234 },
    { title: "Activos", value: 856 },
    { title: "Inactivos", value: 378 },
  ];

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography
          level="h2"
          sx={{ mb: 4, fontFamily: "Montserrat-Bold", color: "#232426" }}
        >
          Componentes de Kukun
        </Typography>

        <Typography level="body-md" sx={{ mb: 4, color: "#656B6D" }}>
          Esta página solo está disponible en modo desarrollo y muestra todos
          los componentes principales del proyecto.
        </Typography>

        {/* SectionTitle */}
        <Stack spacing={4}>
          <Box>
            <SectionTitle>SectionTitle Component</SectionTitle>
            <Typography level="body-sm" sx={{ color: "#656B6D", mt: 1 }}>
              Título de sección estilizado con tipografía Montserrat-Regular
            </Typography>
          </Box>

          <Divider />

          {/* CircularCheckbox */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              CircularCheckbox
            </Typography>
            <Stack spacing={2}>
              <CircularCheckbox
                checked={checked1}
                onChange={() => setChecked1(!checked1)}
                label="Checkbox normal"
              />
              <CircularCheckbox
                checked={checked2}
                onChange={() => setChecked2(!checked2)}
                label="Checkbox con otro color"
                color="#1653F0"
              />
              <CircularCheckbox
                checked={false}
                indeterminate={indeterminate}
                onChange={() => setIndeterminate(!indeterminate)}
                label="Checkbox indeterminado"
              />
            </Stack>
          </Box>

          <Divider />

          {/* CustomToggle */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              CustomToggle (2 opciones)
            </Typography>
            <CustomToggle
              value={toggleValue}
              option1={{
                label: "Opción 1",
                value: "option1",
                onClick: () => setToggleValue("option1"),
                textColor: "#fff",
                bgColor: "#FB0C23",
                inactiveTextColor: "#656B6D",
              }}
              option2={{
                label: "Opción 2",
                value: "option2",
                onClick: () => setToggleValue("option2"),
                textColor: "#fff",
                bgColor: "#FB0C23",
                inactiveTextColor: "#656B6D",
              }}
            />
          </Box>

          <Divider />

          {/* CustomToggle2 */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              CustomToggle2 (3 opciones)
            </Typography>
            <CustomToggle2
              value={toggle2Value}
              option1={{
                label: "Tab 1",
                value: "tab1",
                onClick: () => setToggle2Value("tab1"),
                textColor: "#fff",
                bgColor: "#FB0C23",
                inactiveTextColor: "#656B6D",
              }}
              option2={{
                label: "Tab 2",
                value: "tab2",
                onClick: () => setToggle2Value("tab2"),
                textColor: "#fff",
                bgColor: "#FB0C23",
                inactiveTextColor: "#656B6D",
              }}
              option3={{
                label: "Tab 3",
                value: "tab3",
                onClick: () => setToggle2Value("tab3"),
                textColor: "#fff",
                bgColor: "#FB0C23",
                inactiveTextColor: "#656B6D",
              }}
            />
          </Box>

          <Divider />

          {/* FilterButton */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              FilterButton
            </Typography>
            <Stack direction="row" spacing={1}>
              <FilterButton
                label="Todos"
                active={!filterActive}
                onClick={() => setFilterActive(false)}
                size="sm"
              />
              <FilterButton
                label="Activos"
                active={filterActive}
                onClick={() => setFilterActive(true)}
                size="sm"
              />
            </Stack>
          </Box>

          <Divider />

          {/* FilterItem */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              FilterItem
            </Typography>
            <Stack spacing={2} sx={{ maxWidth: 400 }}>
              <Box>
                <Typography level="body-sm" sx={{ mb: 1, color: "#656B6D" }}>
                  Select simple
                </Typography>
                <FilterItem
                  type="select"
                  placeholder="Selecciona una opción"
                  options={[
                    { label: "Opción 1", value: "opt1" },
                    { label: "Opción 2", value: "opt2" },
                    { label: "Opción 3", value: "opt3" },
                  ]}
                  value={filterValue}
                  onChange={(val) => setFilterValue(val as string)}
                />
              </Box>

              <Box>
                <Typography level="body-sm" sx={{ mb: 1, color: "#656B6D" }}>
                  Select múltiple con checkboxes
                </Typography>
                <FilterItem
                  type="multiple"
                  placeholder="Selecciona opciones"
                  options={[
                    { label: "Admin", value: "admin" },
                    { label: "Usuario", value: "user" },
                    { label: "Moderador", value: "moderator" },
                    { label: "Invitado", value: "guest" },
                  ]}
                  value={multipleFilterValue}
                  onChange={(val) => setMultipleFilterValue(val as string[])}
                  showSelectAllOption
                />
              </Box>

              <Box>
                <Typography level="body-sm" sx={{ mb: 1, color: "#656B6D" }}>
                  Select con chips de colores
                </Typography>
                <FilterItem
                  type="select"
                  placeholder="Selecciona estado"
                  options={[
                    { label: "Todos", value: "all" },
                    { label: "Activo", value: "active", color: "#4CAF50" },
                    { label: "Pendiente", value: "pending", color: "#FF9800" },
                    { label: "Inactivo", value: "inactive", color: "#F44336" },
                  ]}
                  value={filterValue}
                  onChange={(val) => setFilterValue(val as string)}
                  withChips
                />
              </Box>

              <Box>
                <Typography level="body-sm" sx={{ mb: 1, color: "#656B6D" }}>
                  Selector de fecha simple
                </Typography>
                <FilterItem
                  type="date"
                  placeholder="Selecciona una fecha"
                  value={dateFilter}
                  onChange={(val) => setDateFilter(val as Date | null)}
                />
              </Box>

              <Box>
                <Typography level="body-sm" sx={{ mb: 1, color: "#656B6D" }}>
                  Selector de rango de fechas
                </Typography>
                <FilterItem
                  type="date"
                  placeholder="Selecciona rango de fechas"
                  value={dateRangeFilter}
                  onChange={(val) =>
                    setDateRangeFilter(val as [Date | null, Date | null])
                  }
                  dateRange
                />
              </Box>
            </Stack>
          </Box>

          <Divider />

          {/* TooltipButton */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              TooltipButton
            </Typography>
            <Stack direction="row" spacing={2}>
              <TooltipButton
                icon={mdiPencil}
                title="Editar"
                tooltipText="Editar elemento"
                onClick={() => alert("Editar clicked")}
                disablePermissionCheck
              />
              <TooltipButton
                icon={mdiDelete}
                iconColor="#FB0C23"
                title="Eliminar"
                tooltipText="Eliminar elemento"
                onClick={() => alert("Eliminar clicked")}
                disablePermissionCheck
              />
            </Stack>
          </Box>

          <Divider />

          {/* InfoCard */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              InfoCard
            </Typography>
            <InfoCard
              icon={mdiAccount}
              title="Información del Usuario"
              action={
                <Button size="sm" variant="soft" color="primary">
                  Acción
                </Button>
              }
            >
              <Stack spacing={1}>
                <Typography level="body-sm">
                  <strong>Nombre:</strong> Juan Pérez
                </Typography>
                <Typography level="body-sm">
                  <strong>Email:</strong> juan@example.com
                </Typography>
                <Typography level="body-sm">
                  <strong>Teléfono:</strong> +52 123 456 7890
                </Typography>
              </Stack>
            </InfoCard>
          </Box>

          <Divider />

          {/* SectionCardList */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              SectionCardList
            </Typography>
            <SectionCardList title="Lista de Tarjetas">
              <InfoCard icon={mdiHome} title="Tarjeta 1">
                <Typography level="body-sm">
                  Contenido de la tarjeta 1
                </Typography>
              </InfoCard>
              <InfoCard icon={mdiEmail} title="Tarjeta 2">
                <Typography level="body-sm">
                  Contenido de la tarjeta 2
                </Typography>
              </InfoCard>
              <InfoCard icon={mdiPhone} title="Tarjeta 3">
                <Typography level="body-sm">
                  Contenido de la tarjeta 3
                </Typography>
              </InfoCard>
            </SectionCardList>
          </Box>

          <Divider />

          {/* BaseTable */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              BaseTable
            </Typography>
            <BaseTable
              title="Tabla de Usuarios"
              columns={columns}
              rows={exampleUsers}
              onRowClick={(row) => alert(`Clicked: ${row.name}`)}
            />
          </Box>

          <Divider />

          {/* MultipleCard */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              MultipleCard
            </Typography>
            <Typography level="body-sm" sx={{ mb: 2, color: "#656B6D" }}>
              Tarjeta que muestra múltiples métricas en un grid responsivo
            </Typography>
            <MultipleCard data={multipleCardData} />
          </Box>

          <Divider />

          {/* ConfirmationModal */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              ConfirmationModal
            </Typography>
            <Button onClick={() => setConfirmModalOpen(true)}>
              Abrir Modal de Confirmación
            </Button>
            <ConfirmationModal
              open={confirmModalOpen}
              onCancel={() => setConfirmModalOpen(false)}
              onConfirm={() => {
                alert("Confirmado!");
                setConfirmModalOpen(false);
              }}
              title="¿Estás seguro?"
              description="Esta acción no se puede deshacer."
              confirmText="Confirmar"
              cancelText="Cancelar"
            />
          </Box>

          <Divider />

          {/* DeleteConfirmationModal */}
          <Box>
            <Typography
              level="h3"
              sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
            >
              DeleteConfirmationModal
            </Typography>
            <Typography level="body-sm" sx={{ mb: 2, color: "#656B6D" }}>
              Modal específico para confirmación de eliminación con i18n
            </Typography>
            <Button
              color="danger"
              variant="soft"
              onClick={() => setDeleteModalOpen(true)}
            >
              Abrir Modal de Eliminación
            </Button>
            <DeleteConfirmationModal
              open={deleteModalOpen}
              onCancel={() => setDeleteModalOpen(false)}
              onConfirm={() => {
                alert("¡Elemento eliminado!");
                setDeleteModalOpen(false);
              }}
            />
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* COMPONENTES JOY UI CUSTOMIZADOS DEL TEMA */}
          <Box>
            <Typography
              level="h2"
              sx={{ mb: 3, fontFamily: "Montserrat-Bold", color: "#FB0C23" }}
            >
              Componentes Joy UI del Tema Kukun
            </Typography>
            <Typography level="body-md" sx={{ mb: 4, color: "#656B6D" }}>
              Componentes de MUI Joy UI con los estilos customizados del tema
              Kukun
            </Typography>

            {/* Button Variants */}
            <Box sx={{ mb: 4 }}>
              <Typography
                level="h3"
                sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
              >
                Button (JoyButton)
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button variant="solid">Solid (Primary)</Button>
                  <Button variant="soft">Soft</Button>
                  <Button variant="outlined">Outlined</Button>
                  <Button variant="plain">Plain</Button>
                </Stack>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button variant="solid" size="sm">
                    Small
                  </Button>
                  <Button variant="solid">Medium</Button>
                  <Button variant="solid" size="lg">
                    Large
                  </Button>
                </Stack>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button variant="solid" disabled>
                    Disabled
                  </Button>
                  <Button variant="solid" loading>
                    Loading
                  </Button>
                </Stack>
              </Stack>
            </Box>

            <Divider />

            {/* Card Variants */}
            <Box sx={{ mb: 4, mt: 4 }}>
              <Typography
                level="h3"
                sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
              >
                Card (JoyCard)
              </Typography>
              <Stack spacing={2}>
                <Card variant="solid">
                  <Typography level="title-md" textColor="black">
                    Card Solid
                  </Typography>
                  <Typography level="body-sm" textColor="black">
                    Tarjeta con fondo neutral.100 y border radius 24px
                  </Typography>
                </Card>
                <Card variant="plain">
                  <Typography level="title-md">Card Plain</Typography>
                  <Typography level="body-sm">
                    Tarjeta con fondo blanco y border radius 24px
                  </Typography>
                </Card>
              </Stack>
            </Box>

            <Divider />

            {/* Typography */}
            <Box sx={{ mb: 4, mt: 4 }}>
              <Typography
                level="h3"
                sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
              >
                Typography (JoyTypography)
              </Typography>
              <Stack spacing={1}>
                <Typography level="h1">Heading 1 (h1) - 80px</Typography>
                <Typography level="h2">Heading 2 (h2) - 50px</Typography>
                <Typography level="h3">Heading 3 (h3) - 40px</Typography>
                <Typography level="h4">Heading 4 (h4) - 30px</Typography>
                <Typography level="title-lg">Title Large - 20px</Typography>
                <Typography level="title-md">Title Medium - 16px</Typography>
                <Typography level="title-sm">Title Small - 14px</Typography>
                <Typography level="body-lg">Body Large</Typography>
                <Typography level="body-md">
                  Body Medium - Montserrat Regular
                </Typography>
                <Typography level="body-sm">
                  Body Small - Montserrat Regular
                </Typography>
                <Typography level="body-xs">Body Extra Small</Typography>
                <Typography
                  level="body-md"
                  sx={{ fontFamily: "Montserrat-Bold" }}
                >
                  Body con Montserrat-Bold
                </Typography>
              </Stack>
            </Box>

            <Divider />

            {/* Input */}
            <Box sx={{ mb: 4, mt: 4 }}>
              <Typography
                level="h3"
                sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
              >
                Input (JoyInput)
              </Typography>
              <Stack spacing={2} sx={{ maxWidth: 400 }}>
                <Input
                  placeholder="Input básico"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input placeholder="Input deshabilitado" disabled />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
              </Stack>
            </Box>

            <Divider />

            {/* Select */}
            <Box sx={{ mb: 4, mt: 4 }}>
              <Typography
                level="h3"
                sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
              >
                Select (JoySelect)
              </Typography>
              <Stack spacing={2} sx={{ maxWidth: 400 }}>
                <Select
                  placeholder="Selecciona una opción"
                  value={selectValue}
                  onChange={(_, value) => setSelectValue(value as string)}
                >
                  <Option value="1">Opción 1</Option>
                  <Option value="2">Opción 2</Option>
                  <Option value="3">Opción 3</Option>
                </Select>
              </Stack>
            </Box>

            <Divider />

            {/* Checkbox */}
            <Box sx={{ mb: 4, mt: 4 }}>
              <Typography
                level="h3"
                sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
              >
                Checkbox (JoyCheckbox)
              </Typography>
              <Stack spacing={2}>
                <Checkbox
                  label="Checkbox normal"
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                />
                <Checkbox label="Checkbox deshabilitado" disabled />
                <Checkbox label="Checkbox checked" checked disabled />
              </Stack>
            </Box>

            <Divider />

            {/* Switch */}
            <Box sx={{ mb: 4, mt: 4 }}>
              <Typography
                level="h3"
                sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
              >
                Switch (JoySwitch)
              </Typography>
              <Stack spacing={2}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography level="body-sm">
                    Estado: {switchChecked ? "Activado" : "Desactivado"}
                  </Typography>
                  <Switch
                    checked={switchChecked}
                    onChange={(e) => setSwitchChecked(e.target.checked)}
                  />
                </Box>
              </Stack>
            </Box>

            <Divider />

            {/* Chip */}
            <Box sx={{ mb: 4, mt: 4 }}>
              <Typography
                level="h3"
                sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
              >
                Chip (JoyChip)
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip variant="soft">Default</Chip>
                <Chip variant="soft" color="primary">
                  Primary
                </Chip>
                <Chip variant="soft" color="success">
                  Success
                </Chip>
                <Chip variant="soft" color="danger">
                  Danger
                </Chip>
              </Stack>
            </Box>

            <Divider />

            {/* Snackbar */}
            <Box sx={{ mb: 4, mt: 4 }}>
              <Typography
                level="h3"
                sx={{ mb: 2, fontFamily: "Montserrat-Bold" }}
              >
                Snackbar (JoySnackbar)
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={() => {
                    setSnackbarType("success");
                    setSnackbarOpen(true);
                  }}
                  variant="soft"
                  color="success"
                >
                  Mostrar Success
                </Button>
                <Button
                  onClick={() => {
                    setSnackbarType("danger");
                    setSnackbarOpen(true);
                  }}
                  variant="soft"
                  color="danger"
                >
                  Mostrar Danger
                </Button>
              </Stack>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                color={snackbarType}
              >
                {snackbarType === "success"
                  ? "¡Operación exitosa!"
                  : "¡Error en la operación!"}
              </Snackbar>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
