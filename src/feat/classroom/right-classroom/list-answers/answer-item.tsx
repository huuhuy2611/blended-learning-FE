import LikeDislike from "@/common/components/like-dislike";
import { Box, Button, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReactHtmlParser from "react-html-parser";
import { CommentItem } from "@/common/types/comment.type";
import useLocalStorage from "@/common/hooks/use-local-storage";
import ModalConfirmation from "../modal-confirmation";
import {
  useDeleteComment,
  useUpdateComment,
  useVoteComment,
} from "@/common/hooks/use-comment";
import { useState } from "react";
import ArticleEditor from "@/common/components/article-editor";
import { PrimaryButton } from "@/common/components/button";
import { format } from "date-fns";

interface IProps {
  data: CommentItem;
  refetchData?: (labelSuccess: string) => void;
}

const AnswerItem = (props: IProps) => {
  const { data, refetchData } = props;
  const isEdited = data.createdAt !== data.updatedAt;
  const formatCreatedAt = format(
    new Date(data.createdAt),
    "hh:mma (dd/MM/yyyy)"
  );
  const formatUpdatedAt = format(
    new Date(data.updatedAt),
    "hh:mma (dd/MM/yyyy)"
  );

  if (!data) return null;

  const [userId] = useLocalStorage("userId", "");

  const [isEditing, setIsEditing] = useState(false);
  const [contentAnswer, setContentAnswer] = useState(data.content);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const { mutateAsync: handleVoteComment } = useVoteComment({
    config: {
      onSuccess: () => {
        refetchData?.("");
      },
    },
  });

  const { mutateAsync: handleUpdateComment } = useUpdateComment({
    config: {
      onSuccess: () => {
        refetchData?.("Update comment successful!");
        setIsEditing(false);
      },
    },
  });

  const { mutateAsync: handleDeleteComment } = useDeleteComment({
    config: {
      onSuccess: () => {
        setShowConfirmDelete(false);
        refetchData?.("Delete comment successful!");
      },
    },
  });

  return (
    <>
      {showConfirmDelete && (
        <ModalConfirmation
          message="Are you sure delete this comment?"
          onClose={() => setShowConfirmDelete(false)}
          onDelete={() => {
            handleDeleteComment(data.id);
            setShowConfirmDelete(false);
          }}
        />
      )}
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <AccountCircleIcon sx={{ fontSize: "32px", mr: 1 }} />

        <Typography variant="subtitle1">{data.user.email} </Typography>
        <Typography variant="caption" sx={{ ml: 2 }}>
          {!isEdited
            ? `Created: ${formatCreatedAt}`
            : `Modified: ${formatUpdatedAt}`}
        </Typography>
        {isEditing && (
          <Typography variant="caption" sx={{ color: "red", ml: 1 }}>
            [ EDITING ]
          </Typography>
        )}
      </Box>
      {isEditing ? (
        <>
          <ArticleEditor
            defaultValue={contentAnswer}
            onChange={(value) => setContentAnswer(value)}
          />
          <PrimaryButton
            sx={{ mt: 1 }}
            onClick={() => {
              if (!contentAnswer) return;

              handleUpdateComment({
                commentId: data.id,
                content: contentAnswer,
              });
            }}
          >
            Update Your Answer
          </PrimaryButton>
        </>
      ) : (
        <>
          <Box sx={{ ml: 5 }}>
            <Typography variant="body1">
              {ReactHtmlParser(data.content)}
              {isEdited && <>(EDITED)</>}
            </Typography>

            <Box className="div-center" sx={{ justifyContent: "flex-start" }}>
              <Box sx={{ mr: 3 }}>
                <LikeDislike
                  isLiked={data.isUpVote}
                  isDisliked={data.isDownVote}
                  numLiked={data.numUpVote || 0}
                  numDisliked={data.numDownVote || 0}
                  onLike={() => {
                    handleVoteComment({
                      commentId: data.id,
                      isUpVote: !data.isUpVote,
                    });
                  }}
                  onDislike={() => {
                    handleVoteComment({
                      commentId: data.id,
                      isDownVote: !data.isDownVote,
                    });
                  }}
                />
              </Box>

              {userId === data.user.id && (
                <Box
                  sx={{
                    "& .MuiButtonBase-root.MuiButton-root": {
                      color: "#7b7b7b",
                      "&:hover": {
                        background: "#eee",
                      },
                    },
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      textDecoration: "underline",
                      minWidth: "50px",
                    }}
                    onClick={() => setIsEditing(true)}
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
            {/* <Button variant="text" sx={{ color: "rgba(0,0,0,0.18)", ml: 1 }}>
              Add comment...
            </Button> */}
          </Box>
        </>
      )}
    </>
  );
};

export default AnswerItem;
