import {
  Alert,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import LikeDislike from "@/common/components/like-dislike";
import { PostItem } from "@/common/types/post.type";
import ReactHtmlParser from "react-html-parser";
import useLocalStorage from "@/common/hooks/use-local-storage";
import ModalAddPost, { ISubmitPost } from "../modal-add-post";
import { useEffect, useState } from "react";
import { useDeletePost, useUpdatePost } from "@/common/hooks/use-post";
import ModalConfirmation from "./modal-confirmation";
import CustomSnackbar from "@/common/components/snackbar";
import { useAnswersByPost } from "@/common/hooks/use-comment";
import ListAnswers from "./list-answers";

interface IProps {
  data: PostItem;
  onUpdatePostSuccess?: () => void;
}

const PostDetails = (props: IProps) => {
  const { data, onUpdatePostSuccess } = props;
  const [userId] = useLocalStorage("userId", "");

  if (!data) return null;

  const createdAt = dayjs(data.createdAt).format("DD/MM/YYYY");
  const updatedAt = dayjs(data.updatedAt).format("DD/MM/YYYY");

  const [showEditPost, setShowEditPost] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [labelSnackbar, setLabelSnackbar] = useState("");

  const liked = true;
  const disliked = false;

  const { data: dataComments, refetch } = useAnswersByPost({
    postId: data.id,
  });

  const { mutateAsync: handleUpdatePost } = useUpdatePost({
    config: {
      onSuccess: () => {
        setShowEditPost(false);
        onUpdatePostSuccess?.();
        setLabelSnackbar("Update post successful!");
      },
    },
  });

  const { mutateAsync: handleDeletePost } = useDeletePost({
    config: {
      onSuccess: () => {
        setShowEditPost(false);
        onUpdatePostSuccess?.();
        setLabelSnackbar("Delete post successful!");
      },
    },
  });

  useEffect(() => {
    if (!labelSnackbar) return;

    const funcInterval = setInterval(() => {
      setLabelSnackbar("");
    }, 2000);
    return () => {
      clearInterval(funcInterval);
    };
  }, [labelSnackbar]);

  return (
    <>
      {showEditPost && (
        <ModalAddPost
          data={data}
          onClose={() => setShowEditPost(false)}
          onSubmit={(dataSubmit: ISubmitPost) => {
            handleUpdatePost({ postId: data.id, ...dataSubmit });
          }}
        />
      )}
      {showConfirmDelete && (
        <ModalConfirmation
          onClose={() => setShowConfirmDelete(false)}
          onDelete={() => {
            handleDeletePost(data.id);
            setShowConfirmDelete(false);
          }}
        />
      )}
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}
      <Box sx={{ p: 2 }}>
        <Box sx={{ mb: 1 }}>
          <Typography variant="h4">{data.title}</Typography>
          <Box className="div-center" sx={{ justifyContent: "space-between" }}>
            <Box>
              <Typography variant="caption" sx={{ mr: 2 }}>
                Created <strong>{createdAt}</strong>
              </Typography>
              <Typography variant="caption" sx={{ mr: 2 }}>
                Modified <strong>{updatedAt}</strong>
              </Typography>
            </Box>
            {userId === data.user.id && (
              <Box>
                <Button
                  variant="text"
                  sx={{
                    textDecoration: "underline",
                    minWidth: "50px",
                  }}
                  onClick={() => setShowEditPost(true)}
                >
                  Edit
                </Button>
                <Button
                  variant="text"
                  color="error"
                  sx={{
                    textDecoration: "underline",
                    minWidth: "50px",
                  }}
                  onClick={() => setShowConfirmDelete(true)}
                >
                  Delete
                </Button>
              </Box>
            )}
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />
        <Box sx={{ mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {ReactHtmlParser(data.content)}
          </Typography>
          <LikeDislike
            isLiked={liked}
            isDisliked={disliked}
            numLiked={data.numUpVote || 0}
            numDisliked={data.numDownVote || 0}
          />
        </Box>

        <Divider sx={{ mb: 2 }} />

        <ListAnswers
          data={dataComments}
          postId={data.id}
          refetchData={refetch}
        />
      </Box>
    </>
  );
};

export default PostDetails;
