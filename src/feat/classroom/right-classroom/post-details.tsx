import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";
import LikeDislike from "@/common/components/like-dislike";
import { PostItem } from "@/common/types/post.type";
import ReactHtmlParser from "react-html-parser";
import useLocalStorage from "@/common/hooks/use-local-storage";
import ModalAddPost, { ISubmitPost } from "../modal-add-post";
import { useState, useMemo } from "react";
import {
  useDeletePost,
  useUpdatePost,
  useVotePost,
} from "@/common/hooks/use-post";
import ModalConfirmation from "./modal-confirmation";
import { useAnswersByPost } from "@/common/hooks/use-comment";
import ListAnswers from "./list-answers";

interface IProps {
  data: PostItem;
  refetchData?: (label: string) => void;
}

const PostDetails = (props: IProps) => {
  const { data, refetchData } = props;
  const [userId] = useLocalStorage("userId", "");

  if (!data) return null;

  const createdAt = dayjs(data.createdAt).format("DD/MM/YYYY");
  const updatedAt = dayjs(data.updatedAt).format("DD/MM/YYYY");

  const [showEditPost, setShowEditPost] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const { mutateAsync: handleVotePost } = useVotePost({
    config: {
      onSuccess: () => {
        refetchData?.("");
      },
    },
  });

  const { mutateAsync: handleUpdatePost } = useUpdatePost({
    config: {
      onSuccess: () => {
        setShowEditPost(false);
        refetchData?.("Update post successful!");
      },
    },
  });

  const { mutateAsync: handleDeletePost } = useDeletePost({
    config: {
      onSuccess: () => {
        setShowEditPost(false);
        refetchData?.("Delete post successful!");
      },
    },
  });

  const renderTags = useMemo(() => {
    if (!data.tags?.length) return null;

    return data.tags.map((item) => (
      <>
        <Chip
          label={item.tag}
          color={item.type === "SYLLABUS" ? "info" : "default"}
          sx={{
            borderRadius: 0.5,
            mr: 1,
            height: "24px",
            "& .MuiChip-label": {
              px: 1,
            },
          }}
          onClick={() => {}}
        />
      </>
    ));
  }, [data]);

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
          message="Are you sure delete this post?"
          onClose={() => setShowConfirmDelete(false)}
          onDelete={() => {
            handleDeletePost(data.id);
            setShowConfirmDelete(false);
          }}
        />
      )}
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
          {renderTags}
          <LikeDislike
            isLiked={data.isUpVote}
            isDisliked={data.isDownVote}
            numLiked={data.numUpVote || 0}
            numDisliked={data.numDownVote || 0}
            onLike={() => {
              handleVotePost({
                postId: data.id,
                isUpVote: !data.isUpVote,
              });
            }}
            onDislike={() => {
              handleVotePost({
                postId: data.id,
                isDownVote: !data.isDownVote,
              });
            }}
          />
        </Box>

        <Divider sx={{ mb: 2 }} />

        <ListAnswers postId={data.id} />
      </Box>
    </>
  );
};

export default PostDetails;
