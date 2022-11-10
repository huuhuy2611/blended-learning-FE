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
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { ClassroomStatus } from "@/common/lib/enums";

interface IProps {
  onClose: () => void;
  onSubmit: (payload: AddClassroomPayload) => void;
  data?: ClassroomItem | null;
}

const ModalAddClassroom = (props: IProps) => {
  const { onClose, onSubmit, data } = props;

  const [title, setTitle] = useState("");
  const [resources, setResources] = useState<string>("");
  const [status, setStatus] = useState<ClassroomStatus>("ACTIVE");

  useEffect(() => {
    if (!data) return;

    setTitle(data.title || "");
    setStatus(data.status || "ACTIVE");
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
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{ color: "#000" }}
            >
              Status
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => setStatus(e.target.value as ClassroomStatus)}
              defaultValue={data?.status || status}
            >
              <FormControlLabel
                value="ACTIVE"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="INACTIVE"
                control={<Radio />}
                label="Inactive"
              />
              <FormControlLabel value="DONE" control={<Radio />} label="Done" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Resources
          </Typography>
          <ArticleEditor
            defaultValue={data?.resources || ""}
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
              resources: resources || "",
              status,
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
