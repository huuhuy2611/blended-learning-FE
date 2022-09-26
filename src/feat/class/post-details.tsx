import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";
import LikeDislike from "@/common/components/like-dislike";

interface IProps {
  data: { [key: string]: any };
}

const PostDetails = (props: IProps) => {
  const { data } = props;

  const mockDate = dayjs("01/01/2018", "DD/MM/YYYY");
  const liked = true;
  const disliked = false;

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 1 }}>
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="caption" sx={{ mr: 2 }}>
          Created{" "}
          <strong>{dayjs(new Date()).diff(mockDate, "weeks")} weeks</strong>
        </Typography>
        <Typography variant="caption" sx={{ mr: 2 }}>
          Modified{" "}
          <strong>{dayjs(new Date()).diff(mockDate, "weeks")} weeks</strong>
        </Typography>
        <Typography variant="caption" sx={{ mr: 2 }}>
          Viewed <strong>123</strong>
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />
      <Box sx={{ mb: 1 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          {data.content}
        </Typography>
        <LikeDislike
          isLiked={liked}
          isDisliked={disliked}
          numLiked={12}
          numDisliked={34}
        />
      </Box>
      <Divider sx={{ mb: 2 }} />

      <Typography variant="h5" sx={{ mb: 2 }}>
        {data.comments.length} Answers
      </Typography>
      {data.comments.map((item) => (
        <Box>
          <Typography variant="subtitle1">{item.content}</Typography>
          <LikeDislike
            isLiked={liked}
            isDisliked={disliked}
            numLiked={12}
            numDisliked={34}
          />
        </Box>
      ))}
    </Box>
  );
};

export default PostDetails;
