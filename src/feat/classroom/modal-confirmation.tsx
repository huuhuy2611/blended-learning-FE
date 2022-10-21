import { SecondaryButton, PrimaryButton } from "@/common/components/button";
import {
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

interface IProps {
  onClose: () => void;
  onDelete: () => void;
}

const ModalConfirmation = (props: IProps) => {
  const { onClose, onDelete } = props;

  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiPaper-root.MuiDialog-paper": {
          minWidth: "500px",
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <Box className="div-center" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4">Delete post</Typography>
          <IconButton onClick={onClose}>
            <CloseTwoToneIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">Are you sure delete this post?</Typography>
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        <PrimaryButton
          color="error"
          onClick={(e) => {
            e.preventDefault();
            onDelete();
          }}
          autoFocus
        >
          Delete
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirmation;
