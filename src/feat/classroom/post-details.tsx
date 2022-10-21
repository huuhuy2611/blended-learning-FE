import { Box, Button, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";
import LikeDislike from "@/common/components/like-dislike";
import { PostItem } from "@/common/types/post.type";
import ReactHtmlParser from "react-html-parser";
import useLocalStorage from "@/common/hooks/use-local-storage";
import ModalAddPost, { ISubmitPost } from "./modal-add-post";
import { useState } from "react";
import { useUpdatePost } from "@/common/hooks/use-post";

interface IProps {
  data: PostItem;
  onUpdatePostSuccess?: () => void;
}

const PostDetails = (props: IProps) => {
  const { data, onUpdatePostSuccess } = props;
  const [userId] = useLocalStorage("userId", "");

  const createdAt = dayjs(data.createdAt).format("DD/MM/YYYY");
  const updatedAt = dayjs(data.updatedAt).format("DD/MM/YYYY");

  const [showEditPost, setShowEditPost] = useState(false);

  const liked = true;
  const disliked = false;

  const { mutateAsync: handleUpdatePost } = useUpdatePost({
    config: {
      onSuccess: () => {
        setShowEditPost(false);
        onUpdatePostSuccess?.();
      },
    },
  });

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
              <Button
                variant="text"
                sx={{
                  textDecoration: "underline",
                }}
                onClick={() => setShowEditPost(true)}
              >
                Edit
              </Button>
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

        <Typography variant="h5" sx={{ mb: 2 }}>
          {/* {data.comments.length} Answers */}
        </Typography>
        {/* {data.comments.map((item) => (
        <Box>
          <Typography variant="subtitle1">{item.content}</Typography>
          <LikeDislike
            isLiked={liked}
            isDisliked={disliked}
            numLiked={12}
            numDisliked={34}
          />
        </Box>
      ))} */}
      </Box>
    </>
  );
};

export default PostDetails;
