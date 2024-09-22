import { Autocomplete, Chip, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import styles from "./AutoCompleteMultiMui.module.css";

const AutoCompleteMultiMui: any = ({
  name,
  errors,
  control,
  label,
  required = false,
  onChange,
  options,
}: any) => {
  if (!options || options.length === 0) return;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }: any) => {
        return (
          <div className={styles.formGroup}>
            <Autocomplete
              className={styles.formField}
              disableCloseOnSelect
              multiple
              value={field.value || []}
              onChange={(event: any, newValue: any) => {
                field.onChange(newValue);
                if (onChange) onChange(newValue);
              }}
              getOptionLabel={(option) => {
                return option;
              }}
              isOptionEqualToValue={(option, value) => {
                return option === value;
              }}
              options={options}
              renderTags={(value: any[]) =>
                value.map((option: any, index: number) => {
                  return <Chip key={index} variant="outlined" label={option} />;
                })
              }
              renderInput={(params) => (
                <TextField {...params} placeholder="Please choose" />
              )}
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  color: "black !important",
                  paddingBottom: "4px",
                  paddingTop: "4px",
                  paddingLeft: 0,
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "3px",
                  background: "white",
                },
                "& .MuiOutlinedInput-root fieldset": {
                  border: "none !important",
                  height: "40px",
                },
                "& .MuiInputBase-root input": {
                  padding: "4px 4px 4px 4px",
                },
              }}
            />
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

export default AutoCompleteMultiMui;
