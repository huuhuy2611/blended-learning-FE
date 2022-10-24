import LikeDislike from "@/common/components/like-dislike";
import { CommentItem } from "@/common/types/comment.type";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useLocalStorage from "@/common/hooks/use-local-storage";
import ArticleEditor from "@/common/components/article-editor";
import { useEffect, useState } from "react";
import { PrimaryButton } from "@/common/components/button";
import { useAddComment } from "@/common/hooks/use-comment";
import ReactHtmlParser from "react-html-parser";
import CustomSnackbar from "@/common/components/snackbar";

interface IProps {
  data: CommentItem[];
  postId: string;
  refetchData?: () => void;
}

const ListAnswers = (props: IProps) => {
  const { data, postId, refetchData } = props;
  const [userId] = useLocalStorage("userId", "");

  const [inputAnswer, setInputAnswer] = useState("");
  const [labelSnackbar, setLabelSnackbar] = useState("");

  const liked = true;
  const disliked = false;

  const { mutateAsync: handleAddComment } = useAddComment({
    config: {
      onSuccess: () => {
        setInputAnswer("");
        refetchData?.();
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
    <Box>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}

      <Box
        className="div-center"
        sx={{ justifyContent: "space-between", mb: 3 }}
      >
        <Typography variant="h5">{data?.length || 0} Answers</Typography>
        <Box className="div-center">
          <Typography variant="body1" sx={{ mr: 1 }}>
            Sort by
          </Typography>
          <TextField
            sx={{
              "& .MuiInputBase-input.MuiOutlinedInput-input": {
                p: 1,
              },
            }}
          />
        </Box>
      </Box>

      <Box>
        {data?.map((item: CommentItem) => (
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon sx={{ fontSize: "32px", mr: 1 }} />
              <Typography variant="subtitle1">{item.user.email}</Typography>
            </Box>
            <Box sx={{ ml: 5 }}>
              <Typography variant="body1">
                {ReactHtmlParser(item.content)}
              </Typography>
              <Box className="div-center" sx={{ justifyContent: "flex-start" }}>
                <Box sx={{ mr: 3 }}>
                  <LikeDislike
                    isLiked={liked}
                    isDisliked={disliked}
                    numLiked={item.numUpVote || 0}
                    numDisliked={item.numDownVote || 0}
                  />
                </Box>

                {userId === item.user.id && (
                  <Box>
                    <Button
                      variant="text"
                      sx={{
                        textDecoration: "underline",
                        minWidth: "50px",
                      }}
                      onClick={() => {}}
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
                      onClick={() => {}}
                    >
                      Delete
                    </Button>
                  </Box>
                )}
              </Box>
              <TextField
                placeholder="Add comment..."
                sx={{
                  mt: 1,
                  "& .MuiInputBase-input.MuiOutlinedInput-input": {
                    p: 1,
                  },
                }}
              />
            </Box>

            {/* <Divider sx={{ width: "90%", mb: 2, margin: 'auto' }} /> */}
          </Box>
        ))}
      </Box>

      <Divider />

      <Box>
        <Typography variant="subtitle1" sx={{ my: 1 }}>
          Your Answer
        </Typography>
        <ArticleEditor
          value={inputAnswer}
          onChange={(value) => setInputAnswer(value)}
        />
        <PrimaryButton
          sx={{ mt: 1 }}
          onClick={() => {
            if (!inputAnswer) return;

            handleAddComment({
              postId,
              content: inputAnswer,
            });
          }}
        >
          Post your answer
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default ListAnswers;
