import { Box, IconButton, Typography } from "@mui/material";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import ThumbDownOffAltTwoToneIcon from "@mui/icons-material/ThumbDownOffAltTwoTone";

interface IProps {
  isLiked?: boolean;
  isDisliked?: boolean;
  numLiked: number;
  numDisliked: number;
  onLike?: () => void;
  onDislike?: () => void;
  readOnly?: boolean;
}

const LikeDislike = (props: IProps) => {
  const {
    isLiked,
    isDisliked,
    numLiked,
    numDisliked,
    onLike,
    onDislike,
    readOnly,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        "& .MuiButtonBase-root.MuiIconButton-root": {
          pointerEvents: readOnly ? "none" : "visible",
        },
      }}
    >
      <IconButton onClick={onLike} className="div-center">
        <ThumbUpTwoToneIcon
          color={isLiked ? "primary" : "action"}
          sx={{ cursor: "pointer", mr: 0.5 }}
        />
        <Typography variant="body1" sx={{}}>
          {numLiked}
        </Typography>
      </IconButton>
      <IconButton onClick={onDislike} className="div-center">
        <ThumbDownOffAltTwoToneIcon
          color={isDisliked ? "primary" : "action"}
          sx={{ cursor: "pointer", mr: 0.5 }}
        />
        <Typography variant="body1" sx={{}}>
          {numDisliked}
        </Typography>
      </IconButton>
    </Box>
  );
};

export default LikeDislike;
