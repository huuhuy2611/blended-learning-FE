import LikeDislike from "@/common/components/like-dislike";
import { CommentItem } from "@/common/types/comment.type";
import { Box, Button, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useLocalStorage from "@/common/hooks/use-local-storage";

interface IProps {
  data: CommentItem[];
}

const ListAnswers = (props: IProps) => {
  const [userId] = useLocalStorage("userId", "");

  const { data } = props;

  const liked = true;
  const disliked = false;

  return (
    <Box>
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

      {data?.map((item: CommentItem) => (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon sx={{ fontSize: "32px", mr: 1 }} />
            <Typography variant="subtitle1">{item.user.email}</Typography>
          </Box>
          <Box sx={{ ml: 5 }}>
            <Typography variant="body1">{item.content}</Typography>
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
  );
};

export default ListAnswers;
