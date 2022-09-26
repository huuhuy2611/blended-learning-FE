import { Box, Typography } from "@mui/material";
import React from "react";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import ThumbDownOffAltTwoToneIcon from "@mui/icons-material/ThumbDownOffAltTwoTone";

interface IProps {
  isLiked?: boolean;
  isDisliked?: boolean;
  numLiked: number;
  numDisliked: number;
}

const LikeDislike = (props: IProps) => {
  const { isLiked, isDisliked, numLiked, numDisliked } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ mr: 2 }} className="div-center">
        <Typography variant="caption" sx={{ mt: 1, mr: 0.4 }}>
          {numLiked}
        </Typography>
        <ThumbUpTwoToneIcon
          color={isLiked ? "primary" : "action"}
          sx={{ cursor: "pointer" }}
        />
      </Box>
      <Box className="div-center">
        <Typography variant="caption" sx={{ mt: 1, mr: 0.4 }}>
          {numDisliked}
        </Typography>
        <ThumbDownOffAltTwoToneIcon
          color={isDisliked ? "primary" : "action"}
          sx={{ cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default LikeDislike;
