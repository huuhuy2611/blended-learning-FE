import { PrimaryButton, SecondaryButton } from "@/common/components/button";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { useEffect, useState } from "react";
import ArticleEditor from "@/common/components/article-editor";
import { useRouter } from "next/router";
import { PostItem } from "@/common/types/post.type";

export interface ISubmitPost {
  title: string;
  content: string;
  classroomId: string;
}

interface IProps {
  data?: PostItem;
  onClose: () => void;
  onSubmit: (dataSubmit: ISubmitPost) => void;
}

const ModalAddPost = (props: IProps) => {
  const router = useRouter();
  const classroomId = router.query.id as string;
  const { data, onClose, onSubmit } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!data) {
      setIsLoading(false);
      return;
    }

    setTitle(data.title);
    setContent(data.content);
    setIsLoading(false);
  }, [data]);

  if (isLoading) return null;

  return (
    <Dialog
      open
      onClose={onClose}
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
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        <PrimaryButton
          onClick={(e) => {
            e.preventDefault();
            onSubmit({ title, content, classroomId });
          }}
          autoFocus
        >
          {data ? "Save change" : "Create"}
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAddPost;
