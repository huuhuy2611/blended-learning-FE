import { CommentItem } from "@/common/types/comment.type";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import useLocalStorage from "@/common/hooks/use-local-storage";
import ArticleEditor from "@/common/components/article-editor";
import { useEffect, useState } from "react";
import { PrimaryButton } from "@/common/components/button";
import { useAddComment, useDeleteComment } from "@/common/hooks/use-comment";
import CustomSnackbar from "@/common/components/snackbar";
import ModalConfirmation from "../modal-confirmation";
import AnswerItem from "./answer-item";

interface IProps {
  data: CommentItem[];
  postId: string;
  refetchData?: () => void;
}

const ListAnswers = (props: IProps) => {
  const { data, postId, refetchData } = props;

  const [inputAnswer, setInputAnswer] = useState<string | null>(null);
  const [labelSnackbar, setLabelSnackbar] = useState("");

  const { mutateAsync: handleAddComment } = useAddComment({
    config: {
      onSuccess: () => {
        refetchData?.();
        setInputAnswer(null);
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
        {data?.map((item: CommentItem, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <AnswerItem
              data={item}
              refetchData={(label: string) => {
                setLabelSnackbar(label);
                refetchData?.();
              }}
            />
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
            console.log("inputAnswer", inputAnswer);
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
