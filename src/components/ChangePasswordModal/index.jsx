import React, { useState, useTransition } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  ErrorOutline,
  CheckCircle,
} from "@mui/icons-material";
import "./changePasswordModal.scss";
import { useTranslation } from "react-i18next";
const ChangePasswordModal = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [form, setForm] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const toggleVisibility = (key) => {
    setShowPassword({ ...showPassword, [key]: !showPassword[key] });
  };

  const isValidLength = form.new.length >= 8;
  const hasUppercase = /[A-Z]/.test(form.new);
  const hasNumberOrSpecial = /[\d\W]/.test(form.new);
  const passwordsMatch = form.new === form.confirm;

  const getValidationIcon = (valid) =>
    valid ? (
      <CheckCircle color="success" fontSize="small" />
    ) : (
      <ErrorOutline color="error" fontSize="small" />
    );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle textAlign="center" fontWeight="bold">
        {t("Change password")}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Current Password */}
        <TextField
          label="Current password"
          sx={{ marginTop: 1 }}
          type={showPassword.current ? "text" : "password"}
          value={form.current}
          onChange={(e) => setForm({ ...form, current: e.target.value })}
          fullWidth
          error={form.current.length > 0}
          helperText={form.current.length > 0 && "Incorrect current password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => toggleVisibility("current")}>
                  {showPassword.current ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* New Password */}
        <TextField
          label="New password"
          type={showPassword.new ? "text" : "password"}
          value={form.new}
          onChange={(e) => setForm({ ...form, new: e.target.value })}
          fullWidth
          error={!isValidLength || !hasUppercase}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => toggleVisibility("new")}>
                  {showPassword.new ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box ml={1}>
          <Typography fontSize={13} display="flex" alignItems="center" gap={1}>
            {getValidationIcon(isValidLength)} At least 8 characters
          </Typography>
          <Typography fontSize={13} display="flex" alignItems="center" gap={1}>
            {getValidationIcon(hasUppercase)} At least 1 uppercase character
          </Typography>
          <Typography fontSize={13} display="flex" alignItems="center" gap={1}>
            {getValidationIcon(hasNumberOrSpecial)} At least 1 number or special
            character
          </Typography>
        </Box>

        {/* Confirm New Password */}
        <TextField
          label="Confirm new password"
          type={showPassword.confirm ? "text" : "password"}
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          fullWidth
          error={form.confirm.length > 0 && !passwordsMatch}
          helperText={
            form.confirm.length > 0 && !passwordsMatch
              ? "Hmm... these passwords don't match"
              : ""
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => toggleVisibility("confirm")}>
                  {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Submit Button */}
        <button
          className="change-button"
          disabled={
            !isValidLength ||
            !hasUppercase ||
            !hasNumberOrSpecial ||
            !passwordsMatch
          }
        >
          {t("Change password")}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
