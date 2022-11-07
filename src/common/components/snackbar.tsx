import { Snackbar, Alert, AlertColor } from "@mui/material";

interface IProps {
  message: string;
  type?: AlertColor;
}

const CustomSnackbar = (props: IProps) => {
  const { message, type } = props;

  return (
    <Snackbar
      open
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={type || "success"} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
