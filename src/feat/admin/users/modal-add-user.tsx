import { SecondaryButton, PrimaryButton } from "@/common/components/button";
import {
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  DialogContent,
  TextField,
  DialogActions,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { AddUserPayload, UserItem } from "@/common/types/user.type";
import { GenderType, RoleType } from "@/common/lib/enums";
import isEmail from "validator/lib/isEmail";

interface IProps {
  onClose: () => void;
  onSubmit: (payload: AddUserPayload) => void;
  data?: UserItem | null;
}

const ModalAddUser = (props: IProps) => {
  const { onClose, onSubmit, data } = props;

  const [dataUser, setDataUser] = useState<AddUserPayload>({
    name: "",
    gender: "MALE",
    email: "",
    role: "STUDENT",
    password: "12345678",
  });
  const [isInvalid, setIsInvalid] = useState<{ email: boolean; name: boolean }>(
    {
      name: false,
      email: false,
    }
  );
  const [checkboxResetPassword, setCheckboxResetPassword] = useState(false);

  const checkValidDataSubmit = () => {
    let isValid = true;

    const validEmail = isEmail(dataUser.email);
    if (!validEmail) {
      setIsInvalid((prev) => ({ ...prev, email: true }));
      isValid = false;
    }

    if (!dataUser.name) {
      setIsInvalid((prev) => ({ ...prev, name: true }));
      isValid = false;
    }

    return isValid;
  };

  useEffect(() => {
    if (!data) return;

    const { role, email, name, gender } = data;

    setDataUser((prev) => ({
      ...prev,
      role,
      email,
      name: name || "",
      gender: gender || "MALE",
      password: "",
    }));
  }, [data]);

  return (
    <Dialog
      open
      onClose={onClose}
      sx={{
        "& .MuiPaper-root.MuiDialog-paper": {
          minWidth: "800px",
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <Box className="div-center" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4">
            {data ? "Update user" : "Add new user"}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseTwoToneIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Name
          </Typography>
          <TextField
            value={dataUser.name}
            onChange={(e) => {
              setDataUser((prev) => ({ ...prev, name: e.target.value }));
              setIsInvalid((prev) => ({ ...prev, name: false }));
            }}
            label="Name"
            fullWidth
            helperText={isInvalid.name && "Please enter a name"}
            error={isInvalid.name}
          />
        </Box>
        <Box sx={{ p: 1, mb: 1 }}>
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{ color: "#000" }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) =>
                setDataUser((prev) => ({
                  ...prev,
                  gender: e.target.value as GenderType,
                }))
              }
              defaultValue={data?.gender || "MALE"}
            >
              <FormControlLabel value="MALE" control={<Radio />} label="Male" />
              <FormControlLabel
                value="FEMALE"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Email
          </Typography>
          <TextField
            sx={{
              "& .MuiFormHelperText-root": {
                color: "error.main",
              },
            }}
            value={dataUser.email}
            onChange={(e) => {
              setIsInvalid((prev) => ({ ...prev, email: false }));
              setDataUser((prev) => ({ ...prev, email: e.target.value }));
            }}
            label="Email"
            fullWidth
            helperText={
              isInvalid.email &&
              `Please enter a ${dataUser.email ? "valid" : ""} email`
            }
            error={isInvalid.email}
          />
        </Box>
        <Box sx={{ p: 1, mb: 1 }}>
          <FormControl>
            <FormLabel
              id="radio-buttons-group-label-role"
              sx={{ color: "#000" }}
            >
              Role
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group-label-role"
              onChange={(e) =>
                setDataUser((prev) => ({
                  ...prev,
                  role: e.target.value as RoleType,
                }))
              }
              defaultValue={data?.role || "STUDENT"}
            >
              <FormControlLabel
                value="STUDENT"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="TEACHER"
                control={<Radio />}
                label="Teacher"
              />
              <FormControlLabel
                value="ADMIN"
                control={<Radio />}
                label="Admin"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ px: 1 }}>
          {data ? (
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxResetPassword}
                  onChange={(e) => setCheckboxResetPassword(e.target.checked)}
                />
              }
              label="Reset password to default (12345678)"
            />
          ) : (
            <Typography variant="body1" sx={{ mb: 1 }}>
              *** Default password: "<strong>{dataUser.password}</strong>"
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        <PrimaryButton
          onClick={(e) => {
            e.preventDefault();
            const isValid = checkValidDataSubmit();

            if (!isValid) return;

            onSubmit({
              ...dataUser,
              password: data && !checkboxResetPassword ? "" : "12345678",
            });
          }}
          autoFocus
        >
          {data ? "Save change" : "Create"}
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAddUser;
