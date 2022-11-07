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
} from "@mui/material";
import { useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { AddUserPayload, UserItem } from "@/common/types/user.type";
import { GenderType, RoleType } from "@/common/lib/enums";
import isEmail from "validator/lib/isEmail";

interface IProps {
  onClose: () => void;
  onSubmit: (payload: AddUserPayload) => void;
  data?: UserItem;
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
  const [isValidEmail, setIsValidEmail] = useState(true);

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
            onChange={(e) =>
              setDataUser((prev) => ({ ...prev, name: e.target.value }))
            }
            label="Name"
            fullWidth
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
              defaultValue={data?.profile?.gender || "MALE"}
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
              setIsValidEmail(true);
              setDataUser((prev) => ({ ...prev, email: e.target.value }));
            }}
            label="Email"
            fullWidth
            helperText={!isValidEmail && "Please enter a valid email"}
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
          <Typography variant="body1" sx={{ mb: 1 }}>
            *** Default password: "<strong>{dataUser.password}</strong>"
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        <PrimaryButton
          onClick={(e) => {
            e.preventDefault();
            const validEmail = isEmail(dataUser.email);
            if (!validEmail) {
              setIsValidEmail(false);
              return;
            }

            onSubmit(dataUser);
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
