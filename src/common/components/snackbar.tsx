import { Snackbar, Alert, SnackbarOrigin } from "@mui/material";

interface IProps {
  message: string;
}

const CustomSnackbar = (props: IProps) => {
  const { message } = props;

  return (
    <Snackbar
      open
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
