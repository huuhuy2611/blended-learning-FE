import { PrimaryButton, SecondaryButton } from "@/common/components/button";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import React, { useState } from "react";
import ArticleEditor from "@/common/components/article-editor";
import { useAddPost } from "@/common/hooks/use-post";
import { useRouter } from "next/router";

interface IProps {
  handleClose: () => void;
}

const ModalAddPost = (props: IProps) => {
  const router = useRouter();
  const classroomId = router.query.id as string;
  const { handleClose } = props;

  const { mutateAsync: handleAddPost } = useAddPost();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiPaper-root.MuiDialog-paper": {
          minWidth: "800px",
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <Box className="div-center" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4">Add new post</Typography>
          <IconButton onClick={handleClose}>
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
        <Box sx={{ p: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Description
          </Typography>
          <ArticleEditor
            value={content}
            onChange={(value) => setContent(value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={handleClose}>Cancel</SecondaryButton>
        <PrimaryButton
          onClick={(e) => {
            e.preventDefault();
            handleAddPost({ title, content, classroomId });
          }}
          autoFocus
        >
          Save
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAddPost;
