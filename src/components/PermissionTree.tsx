import React, { useState } from "react";
import { Box, Typography } from "@mui/joy";
import Icon from "@mdi/react";
import {
  mdiFolder,
  mdiFolderOpen,
  mdiChevronRight,
  mdiChevronDown,
} from "@mdi/js";
import { CircularCheckbox } from "./CircularCheckbox";

/**
 * Representa una característica o permiso individual
 */
type Feature = {
  _id: number;
  name: string;
};

/**
 * Representa una sección con múltiples características/permisos
 */
type SectionNode = {
  section: string;
  features: Feature[];
};

/**
 * Props del componente PermissionTree
 * @property data - Array de secciones con sus características
 * @property selected - Array de IDs de características seleccionadas
 * @property onChange - Callback cuando cambia la selección
 */
interface PermissionTreeProps {
  data: SectionNode[];
  selected: string[];
  onChange: (newSelected: string[]) => void;
}

/**
 * PermissionTree - Componente de árbol expandible para gestionar permisos por sección
 *
 * Permite seleccionar características individuales o secciones completas.
 * Cada sección puede expandirse/colapsarse y tiene un checkbox que permite
 * seleccionar/deseleccionar todos los items de esa sección.
 *
 * @example
 * ```tsx
 * const data = [
 *   {
 *     section: "Usuarios",
 *     features: [
 *       { _id: 1, name: "Ver usuarios" },
 *       { _id: 2, name: "Crear usuarios" }
 *     ]
 *   }
 * ];
 *
 * <PermissionTree
 *   data={data}
 *   selected={["feature-1"]}
 *   onChange={(newSelected) => console.log(newSelected)}
 * />
 * ```
 */
export const PermissionTree: React.FC<PermissionTreeProps> = ({
  data,
  selected,
  onChange,
}) => {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  /**
   * Alterna la selección de una característica individual
   */
  const toggleFeature = (id: string) => {
    const isSelected = selected.includes(id);
    const newSelected = isSelected
      ? selected.filter((s) => s !== id)
      : [...selected, id];
    onChange(newSelected);
  };

  /**
   * Alterna la selección de todas las características de una sección
   */
  const toggleAllInSection = (featureIds: string[]) => {
    const allSelected = featureIds.every((id) => selected.includes(id));
    const newSelected = allSelected
      ? selected.filter((id) => !featureIds.includes(id))
      : [...selected, ...featureIds.filter((id) => !selected.includes(id))];
    onChange(newSelected);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
    >
      {data.map((section) => {
        const sectionId = section.section;
        const featureIds = section.features.map((f) => `feature-${f._id}`);
        const allSelected = featureIds.every((id) => selected.includes(id));
        const someSelected = featureIds.some((id) => selected.includes(id));
        const expanded = expandedMap[sectionId] || false;

        return (
          <Box
            key={sectionId}
            sx={{ width: "100%" }}
            display="flex"
            flexDirection="column"
            gap={2}
          >
            {/* Header de la sección */}
            <Box
              onClick={() =>
                setExpandedMap((prev) => ({
                  ...prev,
                  [sectionId]: !expanded,
                }))
              }
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                py: 1,
              }}
            >
              {/* Icono de expansión */}
              <Box sx={{ width: 24 }}>
                <Icon
                  path={expanded ? mdiChevronDown : mdiChevronRight}
                  size={0.9}
                />
              </Box>

              {/* Checkbox de la sección */}
              <Box
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAllInSection(featureIds);
                }}
              >
                <CircularCheckbox
                  color="#fb1024"
                  checked={allSelected}
                  indeterminate={!allSelected && someSelected}
                  onChange={() => {}}
                  size={20}
                />
              </Box>

              {/* Icono de carpeta */}
              <Icon
                path={expanded ? mdiFolderOpen : mdiFolder}
                size={0.9}
                color="#616161"
              />

              {/* Nombre de la sección */}
              <Typography fontWeight="md" level="title-sm" textColor="#2b2b2c">
                {section.section}
              </Typography>
            </Box>

            {/* Lista de características (solo visible cuando está expandido) */}
            {expanded && (
              <Box sx={{ pl: 4 }} display="flex" flexDirection="column" gap={2}>
                {section.features.map((feature) => {
                  const id = `feature-${feature._id}`;

                  return (
                    <Box key={id} sx={{ mb: 1 }}>
                      <CircularCheckbox
                        color="#fb1024"
                        checked={selected.includes(id)}
                        onChange={() => toggleFeature(id)}
                        label={feature.name}
                        size={20}
                        pl={3}
                      />
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};
