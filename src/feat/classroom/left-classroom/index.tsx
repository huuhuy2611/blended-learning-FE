import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  useMemo,
} from "react";
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
  Select as MuiSelect,
  Typography,
  Chip,
} from "@mui/material";
import Select from "react-select";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { PrimaryButton } from "@/common/components/button";
import { AddPostPayload, PostItem } from "@/common/types/post.type";
import ModalAddPost, { ITagOption } from "../modal-add-post";
import { useAddPost } from "@/common/hooks/use-post";
import CustomSnackbar from "@/common/components/snackbar";
import { OrderApi, ORDER_ITEM, ORDER_LABEL } from "@/common/types/order.type";
import LikeDislike from "@/common/components/like-dislike";
import { format } from "date-fns";
import { convert } from "html-to-text";
import ReactHtmlParser from "react-html-parser";
import useDebounce, {
  SEARCH_DEBOUNCE_TIMEOUT,
} from "@/common/hooks/use-debounce";
import useLocalStorage from "@/common/hooks/use-local-storage";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import { useTagsByClassroom } from "@/common/hooks/use-tag";
import { cloneDeep, difference } from "lodash";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const classroomId = router.query.id as string;
  const theme = useTheme();
  const [userRole, setUserRole] = useLocalStorage("userRole", "");

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

  const { mutateAsync: handleAddPost } = useAddPost({
    config: {
      onSuccess: () => {
        setShowModalAddPost(false);
        refetchData?.();
        setLabelSnackbar("Add post successful!");
      },
    },
  });

  const { data: dataTags } = useTagsByClassroom(classroomId);

  const debounceKeySearch = useDebounce(keySearch, SEARCH_DEBOUNCE_TIMEOUT);

  const [showModalAddPost, setShowModalAddPost] = useState(false);
  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();
  const [selectedTags, setSelectedTags] = useState<ITagOption[]>([]);

  const tagOptions = useMemo(() => {
    if (!dataTags || !dataTags.length) return [];

    console.log(
      33333,
      dataTags.map((item) => ({
        value: item.id,
        label: item.tag,
        type: item.type,
      }))
    );

    return dataTags.map((item) => ({
      value: item.id,
      label: item.tag,
      type: item.type,
    }));
  }, [dataTags]);

  const customStyles = useMemo(
    () => ({
      multiValue: (styles: any, { data }: any) => {
        if (data.type === "SYLLABUS") {
          return {
            ...styles,
            backgroundColor: "rgba(0, 82, 204, 0.1)",
          };
        }
        return styles;
      },
      multiValueLabel: (styles: any, { data }: any) => {
        if (data.type === "SYLLABUS") {
          return {
            ...styles,
            color: "rgb(0, 82, 204)",
          };
        }

        return styles;
      },
      multiValueRemove: (styles: any, { data }: any) => {
        if (data.type === "SYLLABUS") {
          return {
            ...styles,
            color: "rgb(0, 82, 204)",
            ":hover": {
              backgroundColor: "rgb(0, 82, 204)",
              color: "white",
            },
          };
        }
        return styles;
      },
      menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
    }),
    []
  );

  const renderSnippetsContent = useCallback(
    (item: PostItem) => {
      const { content } = item;
      const _content = convert(content).toLowerCase();
      const lowerCaseKeySearch = debounceKeySearch.toLowerCase();

      const lengthKeySearch = debounceKeySearch.length;
      const indexKeySearch = _content.indexOf(lowerCaseKeySearch);
      const isFirstContent = indexKeySearch - 5 < 0;
      const isLastContent = indexKeySearch + 5 > _content.length;
      const snippets = _content
        .substring(
          isFirstContent ? 0 : indexKeySearch - 5,
          indexKeySearch + lengthKeySearch + 5
        )
        .replace(
          lowerCaseKeySearch,
          `<strong style="color: #3d0099">${lowerCaseKeySearch}</strong>`
        );

      if (!snippets) return null;

      return (
        <Typography variant="caption">
          {!isFirstContent && "..."}
          {ReactHtmlParser(snippets)}
          {!isLastContent && "..."}
        </Typography>
      );
    },
    [debounceKeySearch]
  );

  const renderTags = (item: PostItem) => {
    if (!item || !item?.tags) return null;

    return item?.tags.map(({ tag, type }, index) => (
      <Chip
        key={index}
        label={tag}
        color={type === "SYLLABUS" ? "info" : "default"}
        sx={{
          borderRadius: 0.5,
          mr: 1,
          mb: 0.5,
          fontSize: 12,
          height: "24px",
          // backgroundColor: type === "SYLLABUS" ? "#e5edfa" : "#e6e6e6",
          // color: type === "SYLLABUS" ? "#0052cc" : "#333",
          "& .MuiChip-label": {
            px: 1,
          },
        }}
        onClick={() => {}}
      />
    ));
  };

  const filteredData = useMemo(() => {
    if (!selectedTags.length) return data;

    const selectedTagIds = selectedTags.map(({ value }) => value);

    return data?.filter(
      (item) =>
        difference(selectedTagIds, item?.tags?.map(({ id }) => id) || [])
          .length === 0
    );
  }, [data, selectedTags]);

  return (
    <>
      {showModalAddPost && (
        <ModalAddPost
          onClose={() => setShowModalAddPost(false)}
          onSubmit={(dataSubmit: AddPostPayload) => handleAddPost(dataSubmit)}
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
          <Box className="div-center" sx={{ mb: 1 }}>
            <Typography variant="body1" sx={{ width: "120px" }}>
              Filter by tags:{" "}
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Select
                closeMenuOnSelect={false}
                isMulti
                options={tagOptions}
                styles={customStyles}
                isSearchable={false}
                onChange={(selectedOptions) => {
                  const _selectedOptions = cloneDeep(
                    selectedOptions
                  ) as ITagOption[];
                  setSelectedTags(_selectedOptions);
                }}
              />
            </Box>
          </Box>
          <Box className="div-center">
            <Typography variant="body1" sx={{ width: "80px" }}>
              Sort by:{" "}
            </Typography>
            <MuiSelect
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
            </MuiSelect>
          </Box>
        </Box>
        <Box sx={{ height: "80%", overflow: "auto" }}>
          {data ? (
            <List>
              {filteredData?.map((item, index) => (
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
                    <Box sx={{ width: "100%" }}>
                      <Box>
                        {item.title}
                        {item.createdAt !== item.createdAt && "(EDITED)"}
                      </Box>
                      <Box sx={{ mt: 0.5 }}>{renderTags(item)}</Box>
                      <Box
                        className="div-center"
                        sx={{ justifyContent: "space-between" }}
                      >
                        <LikeDislike
                          numLiked={item.numUpVote || 0}
                          numDisliked={item.numDownVote || 0}
                          isLiked={!!item.isUpVote}
                          isDisliked={!!item.isDownVote}
                          readOnly
                        />
                        <Typography variant="caption">
                          Created{" "}
                          <strong>
                            {format(new Date(item.createdAt), "dd/MM/yyyy")}
                          </strong>
                        </Typography>
                      </Box>
                      {debounceKeySearch && <>{renderSnippetsContent(item)}</>}
                    </Box>
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
        {userRole === "STUDENT" && (
          <Box>
            <PrimaryButton
              fullWidth
              size="large"
              onClick={() => setShowModalAddPost(true)}
            >
              <AddTwoToneIcon /> Add new post
            </PrimaryButton>
          </Box>
        )}
      </Card>
    </>
  );
};

export default LeftClass;
