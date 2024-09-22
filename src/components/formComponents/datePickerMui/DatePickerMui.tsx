import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Controller } from "react-hook-form";
import styles from "./DatePickerMui.module.css";

const DatePickerMui = ({
  name,
  errors,
  control,
  label,
  required = false,
}: any) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }: any) => {
        return (
          <div className={styles.formGroup}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                onChange={(newValue: any) => {
                  field.onChange(newValue);
                }}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    color: "black !important",
                    borderBottom: "3px solid",
                    borderImage:
                      "linear-gradient(to right, var(--primary-color), var(--secondary-color))",
                    borderImageSlice: "1",
                    paddingLeft: 0,
                    padding: "0px !important",
                  },
                  "& .MuiInputBase-input ": {
                    padding: "7px",
                  },
                  "& .MuiOutlinedInput-root": {
                    background: "white",
                    borderRadius: "0px",
                  },

                  "& .MuiOutlinedInput-root fieldset": {
                    border: "none !important",
                    borderRadius: "0px",
                  },
                }}
                format="DD/MM/YYYY"
                value={field.value ? dayjs(field.value) : null}
              />
            </LocalizationProvider>
            <label htmlFor={name} className={styles.formLabel}>
              {label}
              {required && "*"}
            </label>
            {errors && errors && errors[name] && (
              <div style={{ color: "red" }}>
                {errors && errors[name]?.message}
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

export default DatePickerMui;
