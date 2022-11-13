import { CommentItem } from "@/common/types/comment.type";
import { Box, Divider, MenuItem, Select, Typography } from "@mui/material";
import ArticleEditor from "@/common/components/article-editor";
import { useState } from "react";
import { PrimaryButton } from "@/common/components/button";
import { useAddComment, useComments } from "@/common/hooks/use-comment";
import CustomSnackbar from "@/common/components/snackbar";
import AnswerItem from "./answer-item";
import { OrderApi, ORDER_ITEM, ORDER_LABEL } from "@/common/types/order.type";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import { useRouter } from "next/router";

interface IProps {
  postId: string;
}

const ListAnswers = (props: IProps) => {
  const router = useRouter();
  const classroomId = router.query.id as string;
  const { postId } = props;

  if (!postId) return null;

  const [orderComments, setOrderComments] = useState<OrderApi>("DESC");
  const [inputAnswer, setInputAnswer] = useState<string | null>(null);
  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();

  const { data: dataComments, refetch: refetchDataComments } = useComments({
    postId,
    order: orderComments,
  });

  const { mutateAsync: handleAddComment } = useAddComment({
    config: {
      onSuccess: () => {
        refetchDataComments();
        setInputAnswer(null);
      },
    },
  });

  return (
    <Box>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}

      <Box
        className="div-center"
        sx={{ justifyContent: "space-between", mb: 3 }}
      >
        <Typography variant="h5">
          {dataComments?.length || 0} Answers
        </Typography>
        <Box className="div-center">
          <Typography variant="body1" sx={{ mr: 1 }}>
            Sort by:
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={orderComments}
            onChange={(e) => setOrderComments(e.target.value as OrderApi)}
            sx={{
              minWidth: "120px",
              "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
                p: 1,
              },
            }}
          >
            {ORDER_LABEL.map((item, index) => (
              <MenuItem key={index} value={ORDER_ITEM[item]}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      <Box>
        {dataComments?.map((item: CommentItem, index: number) => (
          <Box key={index} sx={{ mb: 3 }}>
            <AnswerItem
              data={item}
              refetchData={(label: string) => {
                if (label) {
                  setLabelSnackbar(label);
                }
                refetchDataComments();
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
          defaultValue={inputAnswer}
          onChange={(value) => setInputAnswer(value)}
        />
        <PrimaryButton
          sx={{ mt: 1 }}
          onClick={() => {
            if (!inputAnswer) return;

            handleAddComment({
              postId,
              classroomId,
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
