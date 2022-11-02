import ArticleEditor from "@/common/components/article-editor";
import { SecondaryButton, PrimaryButton } from "@/common/components/button";
import {
  AddClassroomPayload,
  ClassroomItem,
} from "@/common/types/classroom.type";
import {
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  DialogContent,
  TextField,
  DialogActions,
  Box,
} from "@mui/material";
import { useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

interface IProps {
  onClose: () => void;
  onSubmit: (payload: AddClassroomPayload) => void;
  data?: ClassroomItem;
}

const ModalAddClassroom = (props: IProps) => {
  const { onClose, onSubmit, data } = props;

  const [title, setTitle] = useState("");
  const [resources, setResources] = useState("");

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
            {data ? "Update classroom" : "Add new classroom"}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseTwoToneIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Title
          </Typography>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="demo-helper-text-misaligned"
            label="Title"
            fullWidth
          />
        </Box>
        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Resouces
          </Typography>
          <ArticleEditor
            value={resources}
            onChange={(value) => setResources(value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        <PrimaryButton
          onClick={(e) => {
            e.preventDefault();
            onSubmit({
              title,
              resources,
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

export default ModalAddClassroom;
