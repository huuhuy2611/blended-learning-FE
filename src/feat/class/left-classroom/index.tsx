import React, { useState } from "react";
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
} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { PrimaryButton } from "@/common/components/button";
import { PostItem } from "@/common/types/post.type";
import ModalAddPost from "../modal-add-post";

interface IProps {
  data: PostItem[] | undefined;
  keySearch: string;
  onSearch: (value: string) => void;
  onClick: (id: string) => void;
}

const LeftClass = (props: IProps) => {
  const theme = useTheme();
  const { data, onClick, keySearch, onSearch } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showModalAddPost, setShowModalAddPost] = useState(false);

  return (
    <>
      {showModalAddPost && (
        <ModalAddPost handleClose={() => setShowModalAddPost(false)} />
      )}
      <Card
        sx={{
          height: "100%",
          boxShadow: 6,
          borderRadius: 1,
          border: `1px solid ${theme.palette.primary.main_12}`,
        }}
      >
        <Box sx={{ p: 2, boxShadow: 1 }}>
          <TextField
            sx={{
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
        </Box>
        <Box sx={{ height: "84%", overflow: "auto" }}>
          {data ? (
            <List>
              {data.map((item, index) => (
                <Box key={index}>
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      "&:hover": { background: "#8080800d" },
                    }}
                    selected={selectedIndex === index}
                    key={index}
                    onClick={() => {
                      onClick(item.id);
                      setSelectedIndex(index);
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
