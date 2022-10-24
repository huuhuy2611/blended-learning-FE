import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  Card,
  Divider,
  TextField,
  InputAdornment,
  useTheme,
  CircularProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { PrimaryButton } from "@/common/components/button";
import { PostItem } from "@/common/types/post.type";
import ModalAddPost, { ISubmitPost } from "../modal-add-post";
import { useAddPost } from "@/common/hooks/use-post";
import CustomSnackbar from "@/common/components/snackbar";
import { OrderApi, ORDER_ITEM, ORDER_LABEL } from "@/common/types/order.type";

interface IProps {
  data: PostItem[] | undefined;
  selectedPostIndex: number;
  keySearch: string;
  onSearch: (value: string) => void;
  order: OrderApi;
  setOrder: Dispatch<SetStateAction<OrderApi>>;
  onClick: (id: string) => void;
  refetchData?: () => void;
}

const LeftClass = (props: IProps) => {
  const theme = useTheme();
  const {
    data,
    onClick,
    keySearch,
    onSearch,
    refetchData,
    selectedPostIndex,
    order,
    setOrder,
  } = props;

  const [showModalAddPost, setShowModalAddPost] = useState(false);
  const [labelSnackbar, setLabelSnackbar] = useState("");

  const { mutateAsync: handleAddPost } = useAddPost({
    config: {
      onSuccess: () => {
        setShowModalAddPost(false);
        refetchData?.();
        setLabelSnackbar("Add post successful!");
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
    <>
      {showModalAddPost && (
        <ModalAddPost
          onClose={() => setShowModalAddPost(false)}
          onSubmit={(dataSubmit: ISubmitPost) => handleAddPost(dataSubmit)}
        />
      )}
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}

      <Card
        sx={{
          height: "100%",
          boxShadow: 6,
          borderRadius: 1,
          border: `1px solid ${theme.palette.primary.main_12}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ p: 2, boxShadow: 1 }}>
          <TextField
            sx={{
              mb: 1,
              "& .MuiInputBase-input.MuiOutlinedInput-input": {
                p: 1,
              },
            }}
            value={keySearch}
            onChange={(e) => onSearch(e.target.value)}
            fullWidth
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box className="div-center">
            <Typography variant="body1" sx={{ width: "80px" }}>
              Sort by:{" "}
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order}
              onChange={(e) => setOrder(e.target.value as OrderApi)}
              fullWidth
              sx={{
                "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input":
                  {
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
        <Box sx={{ height: "80%", overflow: "auto" }}>
          {data ? (
            <List>
              {data.map((item, index) => (
                <Box key={index}>
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      "&:hover": { background: "#8080800d" },
                    }}
                    selected={selectedPostIndex === index}
                    key={index}
                    onClick={() => {
                      onClick(item.id);
                    }}
                  >
                    {item.title}
                  </ListItem>
                  <Divider />
                </Box>
              ))}
            </List>
          ) : (
            <Box className="div-center">
              <CircularProgress />
            </Box>
          )}
        </Box>
        <Box>
          <PrimaryButton
            fullWidth
            size="large"
            onClick={() => setShowModalAddPost(true)}
          >
            <AddTwoToneIcon /> Add new post
          </PrimaryButton>
        </Box>
      </Card>
    </>
  );
};

export default LeftClass;
