"use client";

import { Select, Option, Chip, Checkbox } from "@mui/joy";
import DatePicker from "react-datepicker";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "react-datepicker/dist/react-datepicker.css";
import { ReactNode } from "react";

export type FilterValue =
  | string
  | string[]
  | Date
  | [Date | null, Date | null]
  | null
  | undefined;

export interface BaseFilterItemProps {
  placeholder: string;
  value: FilterValue;
  onChange: (value: any) => void;
  labelPrefix?: string;
  loading?: boolean;
  disabled?: boolean;
}

export interface SelectFilterProps extends BaseFilterItemProps {
  type: "select";
  options: FilterOption[];
  withChips?: boolean;
  showSelectAllOption?: never;
  dateRange?: never;
  minDate?: never;
}

export interface FilterOption {
  label: string;
  value: string;
  color?: string;
}

export interface MultipleFilterProps extends BaseFilterItemProps {
  type: "multiple";
  options: FilterOption[];
  withChips?: boolean;
  showSelectAllOption?: boolean;
  dateRange?: never;
  minDate?: never;
}

export interface DateFilterProps extends BaseFilterItemProps {
  type: "date";
  value: Date | [Date | null, Date | null] | null | undefined;
  options?: never;
  withChips?: never;
  showSelectAllOption?: never;
  dateRange?: boolean;
  minDate?: string;
}

export type FilterItemProps =
  | SelectFilterProps
  | MultipleFilterProps
  | DateFilterProps;

function isDateRange(value: FilterValue): value is [Date | null, Date | null] {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    (value[0] === null || value[0] instanceof Date) &&
    (value[1] === null || value[1] instanceof Date)
  );
}

function isStringArray(value: FilterValue): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

export default function FilterItem({
  type = "select",
  placeholder,
  options = [],
  value,
  onChange,
  labelPrefix = "",
  withChips = false,
  showSelectAllOption = false,
  dateRange = false,
  loading = false,
  disabled = false,
  minDate,
}: FilterItemProps) {
  const isMultiple = type === "multiple";
  const isDateRangeMode = type === "date" && dateRange;
  const datePickerWidth = isDateRangeMode ? 280 : 240;
  const minDateObj = minDate ? new Date(minDate) : undefined;
  const isDisabled = disabled || loading;
  const opacity = isDisabled ? 0.6 : 1;

  const renderValue = (): string => {
    if (isStringArray(value)) {
      if (value.length === 0) return placeholder;

      const prefix = labelPrefix ? `${labelPrefix}: ` : "";

      if (value.length === 1) {
        const option = options.find((opt) => opt.value === value[0]);
        const displayLabel = option ? option.label : value[0];
        return `${prefix}${displayLabel}`;
      }

      const firstOption = options.find((opt) => opt.value === value[0]);
      const first = firstOption ? firstOption.label : value[0];
      const restCount = value.length - 1;
      return `${prefix}${first} (+${restCount})`;
    }

    if (typeof value === "string") {
      const option = options.find((opt) => opt.value === value);
      const displayText = option ? option.label : value;
      const prefix = labelPrefix ? `${labelPrefix}: ` : "";
      return `${prefix}${displayText}`;
    }

    return placeholder;
  };

  const handleChange = (
    _event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null,
    val: string | string[] | (string | string[])[] | null
  ) => {
    if (Array.isArray(val)) {
      const flattenedArray = val.flat().filter((v) => v !== "__all__");
      onChange(flattenedArray);
    } else {
      onChange(val);
    }
  };

  const handleSelectAllClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const allValues = options.map((o) => o.value);
    const currentValue = isStringArray(value) ? value : [];
    const isAllSelected = currentValue.length === options.length;
    onChange(isAllSelected ? [] : allValues);
  };

  const handleDateRangeChange = (dates: [Date | null, Date | null]) => {
    onChange?.(dates);
  };

  const handleSingleDateChange = (newDate: Date | null) => {
    onChange?.(newDate);
  };

  const renderSafeValue = () => {
    try {
      return renderValue();
    } catch (error) {
      console.error("Error in renderValue:", error);
      return placeholder;
    }
  };

  const CustomPopperContainer = ({ children }: { children?: ReactNode }) => (
    <div style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }}>
      {children}
    </div>
  );

  const renderOptionContent = (option: {
    value: string;
    label: string;
    color?: string;
  }) => {
    if (isMultiple) {
      return (
        <Checkbox
          size="sm"
          label={option.label}
          checked={isStringArray(value) && value.includes(option.value)}
          variant="plain"
        />
      );
    }

    if (withChips) {
      if (option.value === "all") {
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Icon path={mdiMagnify} size={0.7} color="#666" />
            <span>{option.label}</span>
          </div>
        );
      }

      return (
        <Chip
          variant="solid"
          size="sm"
          sx={{
            backgroundColor: option.color || "#FB0C23",
            color: "#fff",
          }}
        >
          {option.label}
        </Chip>
      );
    }

    return option.label;
  };

  if (type === "date") {
    const datePickerContainerStyle = {
      width: `${datePickerWidth}px`,
      height: "45px",
      opacity,
    };

    const datePickerClassName =
      "w-full h-full text-start font-['Montserrat-Bold'] text-base py-3 px-4 border-2 rounded-[12px] appearance-none cursor-pointer bg-white border-[#FB0C23]";

    if (isDateRangeMode) {
      const dateValue: [Date | null, Date | null] = isDateRange(value)
        ? value
        : [null, null];

      return (
        <div className="relative inline-block" style={datePickerContainerStyle}>
          <DatePicker
            selected={dateValue[0]}
            onChange={handleDateRangeChange}
            startDate={dateValue[0]}
            endDate={dateValue[1]}
            selectsRange
            placeholderText={placeholder}
            dateFormat="dd MMM. yyyy"
            minDate={minDateObj}
            disabled={isDisabled}
            popperProps={{ strategy: "fixed" }}
            popperContainer={CustomPopperContainer}
            wrapperClassName="w-full h-full"
            className={datePickerClassName}
          />
        </div>
      );
    }

    const dateValue: Date | null = value instanceof Date ? value : null;

    return (
      <div className="relative inline-block" style={datePickerContainerStyle}>
        <DatePicker
          selected={dateValue}
          onChange={handleSingleDateChange}
          placeholderText={placeholder}
          dateFormat="dd MMM. yyyy"
          minDate={minDateObj}
          disabled={isDisabled}
          popperProps={{ strategy: "fixed" }}
          popperContainer={CustomPopperContainer}
          wrapperClassName="w-full h-full"
          className={datePickerClassName}
        />
      </div>
    );
  }

  const selectValue =
    isStringArray(value) || typeof value === "string" ? value : undefined;
  const selectColor =
    !value || (isStringArray(value) && value.length === 0)
      ? "#9e9e9e"
      : "#000000";

  return (
    <Select
      multiple={type === "multiple"}
      placeholder={placeholder}
      value={selectValue}
      onChange={handleChange}
      disabled={isDisabled}
      renderValue={renderSafeValue}
      sx={{
        border: "2px solid #fb0924",
        borderRadius: "12px",
        height: 45,
        width: "100%",
        fontFamily: "Montserrat-Bold",
        color: selectColor,
        opacity,
      }}
    >
      {isMultiple && showSelectAllOption && (
        <Option
          key="__all__"
          value="__all__"
          onClick={handleSelectAllClick}
          sx={{ fontFamily: "Montserrat-Regular", fontSize: 14 }}
        >
          <Checkbox
            size="sm"
            label="Todos"
            checked={isStringArray(value) && value.length === options.length}
            indeterminate={
              isStringArray(value) &&
              value.length > 0 &&
              value.length < options.length
            }
            variant="soft"
          />
        </Option>
      )}

      {options.map((option, i) => (
        <Option
          key={i}
          value={option.value}
          sx={{ fontFamily: "Montserrat-Regular", fontSize: 14 }}
        >
          {renderOptionContent(option)}
        </Option>
      ))}
    </Select>
  );
}
