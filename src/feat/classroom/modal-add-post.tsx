import { PrimaryButton, SecondaryButton } from "@/common/components/button";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { useEffect, useMemo, useState } from "react";
import ArticleEditor from "@/common/components/article-editor";
import { useRouter } from "next/router";
import { AddPostPayload, PostItem } from "@/common/types/post.type";
import Select from "react-select";
import { useAddFreeTags, useTagsByClassroom } from "@/common/hooks/use-tag";
import { TagItem } from "@/common/types/tag.type";
import { TagType } from "@/common/lib/enums";
import { cloneDeep } from "lodash";

export interface ITagOption {
  type: TagType;
  value: string;
  label: string;
}

interface IProps {
  data?: PostItem;
  onClose: () => void;
  onSubmit: (dataSubmit: AddPostPayload) => void;
}

const ModalAddPost = (props: IProps) => {
  const router = useRouter();
  const classroomId = router.query.id as string;
  const theme = useTheme();
  const { data, onClose, onSubmit } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [selectedSyllabusTags, setSelectedSyllabusTags] = useState<
    ITagOption[] | null
  >(null);
  const [selectedFreeTags, setSelectedFreeTags] = useState<ITagOption[] | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(true);

  const { data: dataTags, refetch: refetchDataTags } =
    useTagsByClassroom(classroomId);

  const { mutateAsync: handleAddFreeTags } = useAddFreeTags({
    config: {
      onSuccess: () => {
        refetchDataTags();
      },
    },
  });

  const freeTags = useMemo(() => {
    if (!dataTags || !dataTags.length) return [];

    return dataTags.filter((item) => item.type === "FREE");
  }, [dataTags]);

  const syllabusTags = useMemo(() => {
    if (!dataTags || !dataTags.length) return [];

    return dataTags.filter((item) => item.type === "SYLLABUS");
  }, [dataTags]);

  const syllabusTagsOptions = useMemo(() => {
    if (!syllabusTags) return [];

    return syllabusTags.map((item: TagItem) => ({
      value: item.id,
      label: item.tag,
      type: item.type,
    }));
  }, [syllabusTags]);

  const freeTagsOptions = useMemo(() => {
    if (!freeTags) return [];

    return freeTags.map((item: TagItem) => ({
      value: item.id,
      label: item.tag,
      type: item.type,
    }));
  }, [freeTags]);

  const defaultFreeOptions = useMemo(() => {
    if (!data?.tags) return [];

    return data.tags
      .filter((item) => item.type === "FREE")
      .map((item) => ({
        value: item.id,
        label: item.tag,
        type: item.type,
      }));
  }, [data]);

  const defaultSyllabusOptions = useMemo(() => {
    if (!data?.tags) return [];

    return data.tags
      .filter((item) => item.type === "SYLLABUS")
      .map((item) => ({
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

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    onSubmit({
      title,
      content,
      classroomId,
      tagIds: [
        ...(selectedSyllabusTags || []),
        ...(selectedFreeTags || []),
      ]?.map(({ value }) => value),
    });
  };

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
          <Typography variant="h4">
            {data ? "Update post" : "Add new post"}
          </Typography>
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
            Syllabus tags
          </Typography>
          <Select
            closeMenuOnSelect={false}
            isMulti
            defaultValue={defaultSyllabusOptions}
            options={syllabusTagsOptions}
            styles={customStyles}
            isSearchable={false}
            onChange={(selectedOptions) => {
              const _selectedOptions = cloneDeep(
                selectedOptions
              ) as ITagOption[];
              setSelectedSyllabusTags(_selectedOptions);
            }}
          />
        </Box>

        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Free tags
          </Typography>
          <Select
            closeMenuOnSelect={false}
            isMulti
            defaultValue={defaultFreeOptions}
            options={freeTagsOptions}
            styles={customStyles}
            isSearchable
            onChange={(selectedOptions) => {
              const _selectedOptions = cloneDeep(
                selectedOptions
              ) as ITagOption[];
              setSelectedFreeTags(_selectedOptions);
            }}
            noOptionsMessage={({ inputValue }) => {
              if (!inputValue) return;

              return (
                <PrimaryButton
                  onClick={() => {
                    handleAddFreeTags({
                      classroomId,
                      tags: [inputValue],
                    });
                  }}
                >
                  Add new tag
                </PrimaryButton>
              );
            }}
          />
        </Box>

        <Box sx={{ p: 1, mb: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Description
          </Typography>
          <ArticleEditor
            defaultValue={content}
            onChange={(value) => setContent(value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        <PrimaryButton onClick={handleSubmit} autoFocus>
          {data ? "Save change" : "Create"}
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAddPost;
