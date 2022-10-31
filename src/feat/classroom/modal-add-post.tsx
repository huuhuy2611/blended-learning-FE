import { PrimaryButton, SecondaryButton } from "@/common/components/button";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { useEffect, useMemo, useState } from "react";
import ArticleEditor from "@/common/components/article-editor";
import { useRouter } from "next/router";
import { PostItem } from "@/common/types/post.type";
import Select, { MultiValue } from "react-select";
import {
  useAddTag,
  useSyllabusTagsByClassroom,
  useTags,
} from "@/common/hooks/use-tag";
import { TagItem } from "@/common/types/tag.type";
import useDebounce, {
  SEARCH_DEBOUNCE_TIMEOUT,
} from "@/common/hooks/use-debounce";
import { TagType } from "@/common/lib/enums";
import { cloneDeep } from "lodash";

export interface ITagOption {
  type: TagType;
  value: string;
  label: string;
}

export interface ISubmitPost {
  title: string;
  content: string;
  classroomId: string;
  tagIds: string[];
}

interface IProps {
  data?: PostItem;
  onClose: () => void;
  onSubmit: (dataSubmit: ISubmitPost) => void;
}

const ModalAddPost = (props: IProps) => {
  const router = useRouter();
  const classroomId = router.query.id as string;
  const { data, onClose, onSubmit } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [selectedTags, setSelectedTags] = useState<ITagOption[] | null>(null);
  const [queryTags, setQueryTags] = useState("");
  const debounceKeySearch = useDebounce(queryTags, SEARCH_DEBOUNCE_TIMEOUT);

  const [isLoading, setIsLoading] = useState(true);

  const {
    data: dataTags,
    isFetching: fetchingGetTags,
    refetch: refetchGetTags,
  } = useTags({
    keySearch: debounceKeySearch,
  });

  const { mutateAsync: handleAddTag } = useAddTag({
    config: {
      onSuccess: () => {
        refetchGetTags();
      },
    },
  });

  const { data: dataSyllabusTags } = useSyllabusTagsByClassroom({
    classroomId,
  });

  const syllabusTagsOptions = useMemo(() => {
    if (!dataSyllabusTags) return [];

    return dataSyllabusTags.map((item: TagItem) => ({
      value: item.id,
      label: item.tag,
      type: item.type,
    }));
  }, [dataSyllabusTags]);

  const tagsOptions = useMemo(() => {
    if (!dataTags) return [];

    return dataTags.map((item: TagItem) => ({
      value: item.id,
      label: item.tag,
      type: item.type,
    }));
  }, [dataTags]);

  const defaultOptions = useMemo(() => {
    if (!data?.tags) return [];

    return data.tags.map((item) => ({
      value: item.id,
      label: item.tag,
      type: item.type,
    }));
  }, [data]);

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

  useEffect(() => {
    if (!data) {
      setIsLoading(false);
      return;
    }

    setTitle(data.title);
    setContent(data.content);
    setIsLoading(false);
  }, [data]);

  if (isLoading) return null;

  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiPaper-root.MuiDialog-paper": {
          minWidth: "800px",
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <Box className="div-center" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4">Add new post</Typography>
          <IconButton onClick={onClose}>
            <CloseTwoToneIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Title
          </Typography>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="demo-helper-text-misaligned"
            label="Title"
            fullWidth
          />
        </Box>
        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Tags
          </Typography>
          <Select
            closeMenuOnSelect={false}
            isMulti
            defaultValue={defaultOptions}
            options={debounceKeySearch ? tagsOptions : syllabusTagsOptions}
            styles={customStyles}
            onChange={(selectedOptions) => {
              const _selectedOptions = cloneDeep(
                selectedOptions
              ) as ITagOption[];
              setSelectedTags(_selectedOptions);
            }}
            onInputChange={(value) => {
              setQueryTags(value);
            }}
            noOptionsMessage={({ inputValue }) => {
              if (fetchingGetTags || inputValue !== debounceKeySearch)
                return <>Loading...</>;

              return (
                <Button
                  onClick={() => {
                    handleAddTag(inputValue);
                  }}
                >
                  Add new tag
                </Button>
              );
            }}
          />
        </Box>
        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Description
          </Typography>
          <ArticleEditor
            value={content}
            onChange={(value) => setContent(value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        <PrimaryButton
          onClick={(e) => {
            e.preventDefault();
            onSubmit({
              title,
              content,
              classroomId,
              tagIds: selectedTags?.map(({ value }) => value) || [],
            });
          }}
          autoFocus
        >
          {data ? "Save change" : "Create"}
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAddPost;
