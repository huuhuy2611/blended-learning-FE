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
      <Box sx={{ mr: 1 }} className="div-center">
        <ThumbUpTwoToneIcon
          color={isLiked ? "primary" : "action"}
          sx={{ cursor: "pointer", mr: 0.5 }}
        />
        <Typography variant="body1" sx={{}}>
          {numLiked}
        </Typography>
      </Box>
      <Box className="div-center">
        <ThumbDownOffAltTwoToneIcon
          color={isDisliked ? "primary" : "action"}
          sx={{ cursor: "pointer", mr: 0.5 }}
        />
        <Typography variant="body1" sx={{}}>
          {numDisliked}
        </Typography>
      </Box>
    </Box>
  );
};

export default LikeDislike;
