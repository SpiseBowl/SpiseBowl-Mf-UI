import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormLabel,
  Box,
  useTheme,
  styled,
  Typography,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import { useDropzone } from "react-dropzone";

import "react-phone-input-2/lib/material.css";

function FormInput({
  name,
  control,
  label,
  inputType = "text",
  options = [],
  multiple = false,
  rowHeight = 1,
  ...rest
}) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const StyledPhoneInputWrapper = styled("div")(({ theme }) => ({
    ".react-tel-input": {
      width: "100%",

      ".form-control": {
        height: 45,
        fontSize: 16,
        border: `1px solid inherit`,
        paddingLeft: 48,
        color: theme.palette.text.primary,
        backgroundColor: "transparent",
        fontFamily: theme.typography.fontFamily,
        outline: "none",
        "&:hover": {
          borderColor: "inherit",
        },
        "&:focus": {
          borderColor: theme.palette.primary.main,
          boxShadow: `0 0 0 2px ${theme.palette.primary.main}44`,
        },
      },

      ".flag-dropdown": {
        border: `1px solid inherit`,
        backgroundColor: "transparent",
        boxShadow: "none",
      },
      ".flag-dropdown.open .selected-flag": { backgroundColor: "transparent" },
      ".flag-dropdown .selected-flag": {
        backgroundColor: "transparent",
      },

      ".country-list": {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        maxHeight: 250,
        overflowY: "auto",
        border: `1px solid ${theme.palette.divider}`,
        fontFamily: theme.typography.fontFamily,
        zIndex: 1300,
      },
      ".country-list .country": {
        padding: "8px 12px 8px 46px",
        cursor: "pointer",
      },
      ".country-list .country:hover, .country-list .country.highlight": {
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
      },
    },
  }));

  const StyledDropzone = styled("div")(
    ({ theme, isDragActive, rowHeight }) => ({
      border: `2px dashed ${
        isDragActive ? theme.palette.primary.main : theme.palette.divider
      }`,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(2),
      textAlign: "center",
      cursor: "pointer",
      color: isDragActive
        ? theme.palette.primary.main
        : theme.palette.text.secondary,
      backgroundColor: isDragActive
        ? theme.palette.text.primary
        : "transparent",
      transition: "border-color 0.2s, background-color 0.2s",
      height: `${rowHeight * 60}px`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    })
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { error } = fieldState;

        // 🔘 SELECT
        if (inputType === "select") {
          return (
            <FormControl fullWidth error={!!error} sx={{ mb: 2 }}>
              <InputLabel>{label}</InputLabel>
              <Select label={label} {...field} {...rest}>
                {options.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
          );
        }

        // 🎯 RADIO
        if (inputType === "radio") {
          return (
            <Box>
              <FormLabel component="legend">{label}</FormLabel>
              <FormControl component="fieldset" error={!!error} sx={{ mb: 2 }}>
                <RadioGroup {...field} row>
                  {options.map((opt) => (
                    <FormControlLabel
                      key={opt.value}
                      value={opt.value}
                      control={<Radio />}
                      label={opt.label}
                    />
                  ))}
                </RadioGroup>
                <FormHelperText>{error?.message}</FormHelperText>
              </FormControl>
            </Box>
          );
        }

        // ☑️ CHECKBOX
        if (inputType === "checkbox") {
          return (
            <FormControl error={!!error} sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    {...rest}
                  />
                }
                label={label}
              />
              <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
          );
        }

        // 🔄 SWITCH
        if (inputType === "switch") {
          return (
            <FormControl error={!!error} sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    {...rest}
                  />
                }
                label={label}
              />
              <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
          );
        }

        // 📝 TEXT AREA
        if (inputType === "textarea") {
          return (
            <TextField
              fullWidth
              label={label}
              multiline
              rows={rest.rows || 4}
              error={!!error}
              helperText={error?.message}
              {...field}
              {...rest}
              sx={{ mb: 2 }}
            />
          );
        }

        // 📞 PHONE INPUT (react-phone-input-2)
        if (inputType === "phone") {
          return (
            <FormControl fullWidth error={!!error} sx={{ mb: 2 }}>
              <InputLabel shrink>{label}</InputLabel>
              <StyledPhoneInputWrapper theme={theme}>
                <PhoneInput
                  country="us"
                  value={field.value || ""}
                  onChange={field.onChange}
                  inputProps={{
                    name: field.name,
                    required: rest.required || false,
                    autoFocus: rest.autoFocus || false,
                  }}
                  inputStyle={{
                    width: "100%",
                  }}
                  specialLabel=""
                />
              </StyledPhoneInputWrapper>
              <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
          );
        }

        // 🔒 PASSWORD INPUT
        if (inputType === "password") {
          return (
            <TextField
              fullWidth
              label={label}
              type={showPassword ? "text" : "password"}
              error={!!error}
              helperText={error?.message}
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                },
              }}
              {...field}
              {...rest}
              sx={{ mb: 2 }}
            />
          );
        }

        // 📂 FILE INPUT (react-dropzone)
        if (inputType === "file") {
          const onDrop = (acceptedFiles) => {
            // Support multiple or single file(s)
            if (multiple) {
              field.onChange(acceptedFiles);
            } else {
              field.onChange(acceptedFiles[0] || null);
            }
          };

          const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
            useDropzone({
              onDrop,
              multiple,
              accept: rest.accept || "*/*",
            });

          const files = field.value
            ? Array.isArray(field.value)
              ? field.value
              : [field.value]
            : [];

          return (
            <FormControl fullWidth error={!!error} sx={{ mb: 2 }}>
              <InputLabel shrink>{label}</InputLabel>
              <StyledDropzone
                {...getRootProps()}
                isDragActive={isDragActive ? 1 : 0}
                rowHeight={rowHeight}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <Typography>Drop files here...</Typography>
                ) : (
                  <Typography>
                    Drag & drop files here, or click to select files
                  </Typography>
                )}
              </StyledDropzone>

              {files.length > 0 && (
                <Box mt={1}>
                  <Typography variant="body2">Selected file(s):</Typography>
                  <ul>
                    {files.map((file, idx) => (
                      <li key={idx + 1}>{file.name}</li>
                    ))}
                  </ul>
                </Box>
              )}

              <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
          );
        }

        // 🔤 TEXT FIELD
        return (
          <TextField
            fullWidth
            label={label}
            type={inputType}
            error={!!error}
            helperText={error?.message}
            {...field}
            {...rest}
            sx={{ mb: 2 }}
          />
        );
      }}
    />
  );
}

// props validation
FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "number",
    "select",
    "radio",
    "checkbox",
    "switch",
    "textarea",
    "phone",
    "file",
  ]),
  options: PropTypes.array,
  multiple: PropTypes.bool,
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default FormInput;
