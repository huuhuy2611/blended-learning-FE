import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { PrimaryButton, SecondaryButton } from "@/common/components/button";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import { v4 as uuidv4 } from "uuid";
import { ChapterItem, ChapterPayload } from "@/common/types/tag.type";

interface IProps {
  data?: ChapterPayload | null;
  onClose: () => void;
  onSubmit: (dataSubmit: ChapterPayload) => void;
}

const ModalChapterDetails = (props: IProps) => {
  const theme = useTheme();
  const { data: dataChapter, onClose, onSubmit } = props;

  const [data, setData] = useState<ChapterPayload | null>(null);
  const [selectedItem, setSelectedItem] = useState<ChapterItem | null>(null);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [inputItem, setInputItem] = useState("");

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination || !data || !data.children) return;

    const items = Array.from(data.children);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result?.destination?.index || 0, 0, reorderedItem);

    const _data = {
      id: data.id,
      tag: data.tag,
      children: items,
    };

    setData(_data);
  };

  const renderEditItem = useCallback(
    ({
      value,
      onChange,
      onSubmit,
      onClose,
    }: {
      value: string;
      onChange: (value: string) => void;
      onSubmit: () => void;
      onClose: () => void;
    }) => {
      return (
        <>
          <TextField
            sx={{
              width: "84%",
              "& .MuiInputBase-input.MuiOutlinedInput-input": {
                p: 1,
              },
            }}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
          <IconButton onClick={onClose}>
            <CloseTwoToneIcon />
          </IconButton>
          <IconButton
            onClick={async () => {
              await onSubmit();
              onClose();
            }}
          >
            <CheckTwoToneIcon />
          </IconButton>
        </>
      );
    },
    []
  );

  useEffect(() => {
    if (!dataChapter) return;

    setData(dataChapter);
  }, [dataChapter]);

  return (
    <Dialog
      open
      sx={{
        "& .MuiPaper-root.MuiDialog-paper": {
          minWidth: "600px",
        },
      }}
    >
      <DialogTitle>
        <Box className="div-center" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4">
            {data ? "Update chapter" : "Create new chapter"}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseTwoToneIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ py: 0 }}>
        <Divider sx={{ mb: 2 }} />
        <Box>
          {data ? (
            <>
              <Box className="div-center" sx={{ justifyContent: "flex-start" }}>
                {isEditingItem && selectedItem?.id === data.id ? (
                  <>
                    {renderEditItem({
                      value: selectedItem?.tag || "",
                      onChange: (value: string) => {
                        setSelectedItem({
                          id: selectedItem?.id || "",
                          tag: value,
                        });
                      },
                      onSubmit: () => {
                        const newData = {
                          id: data.id,
                          tag: selectedItem?.tag,
                          children: data.children,
                        };

                        setData(newData);
                      },
                      onClose: () => {
                        setIsEditingItem(false);
                        setSelectedItem(null);
                      },
                    })}
                  </>
                ) : (
                  <>
                    <Typography variant="body1">{data.tag}</Typography>
                    <IconButton
                      sx={{ p: 1 }}
                      onClick={() => {
                        setIsEditingItem(true);
                        setSelectedItem({
                          id: data.id,
                          tag: data.tag,
                        });
                      }}
                    >
                      <EditTwoToneIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </>
                )}
              </Box>

              <Box sx={{ ml: 3 }}>
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId="droppableChapterItems">
                    {(provided) => (
                      <Box {...provided.droppableProps} ref={provided.innerRef}>
                        {data?.children?.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided) => (
                              <Box
                                className="div-center"
                                sx={{ justifyContent: "flex-start" }}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <DragIndicatorIcon
                                  sx={{
                                    fontSize: 12,
                                    color: "grey.500",
                                    mr: 1,
                                  }}
                                />
                                {isEditingItem &&
                                selectedItem?.id === item.id ? (
                                  <>
                                    {renderEditItem({
                                      value: selectedItem?.tag || "",
                                      onChange: (value: string) => {
                                        setSelectedItem({
                                          id: selectedItem?.id || "",
                                          tag: value,
                                          parentId: selectedItem?.parentId,
                                        });
                                      },
                                      onSubmit: () => {
                                        const newDataChildren =
                                          data?.children?.map((child) => {
                                            if (child.id === selectedItem?.id) {
                                              return selectedItem;
                                            }
                                            return child;
                                          });

                                        const newData = {
                                          id: data.id,
                                          tag: data.tag,
                                          children: newDataChildren,
                                        };

                                        setData(newData);
                                      },
                                      onClose: () => {
                                        setIsEditingItem(false);
                                        setSelectedItem(null);
                                      },
                                    })}
                                  </>
                                ) : (
                                  <>
                                    <Typography variant="body2">
                                      {item.tag}
                                    </Typography>
                                    <IconButton
                                      sx={{ p: 1 }}
                                      onClick={() => {
                                        setIsEditingItem(true);
                                        setSelectedItem(item);
                                      }}
                                    >
                                      <EditTwoToneIcon sx={{ fontSize: 16 }} />
                                    </IconButton>
                                  </>
                                )}
                              </Box>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Box>
                    )}
                  </Droppable>
                </DragDropContext>
                {isAddingItem ? (
                  <>
                    {renderEditItem({
                      value: inputItem,
                      onChange: (value: string) => {
                        setInputItem(value);
                      },
                      onSubmit: () => {
                        const newChapterItem = {
                          id: uuidv4(),
                          tag: inputItem,
                          parentId: data.id,
                        };
                        const newData = {
                          tag: data.tag,
                          id: data.id,
                          children: [...(data.children || []), newChapterItem],
                        };
                        setData(newData);
                      },
                      onClose: () => {
                        setIsAddingItem(false);
                        setInputItem("");
                      },
                    })}
                  </>
                ) : (
                  <Button
                    variant="text"
                    sx={{ textDecoration: "underline" }}
                    onClick={() => setIsAddingItem(true)}
                  >
                    Add new item
                  </Button>
                )}
              </Box>
            </>
          ) : (
            <>
              {isAddingItem ? (
                <>
                  {renderEditItem({
                    value: inputItem,
                    onChange: (value: string) => {
                      setInputItem(value);
                    },
                    onSubmit: () => {
                      const newChapterItem = {
                        id: uuidv4(),
                        tag: inputItem,
                      };
                      const newData = {
                        ...newChapterItem,
                        children: [],
                      };
                      setData(newData);
                    },
                    onClose: () => {
                      setIsAddingItem(false);
                      setInputItem("");
                    },
                  })}
                </>
              ) : (
                <Box
                  className="div-center"
                  sx={{
                    backgroundColor: theme.palette.grey[50032],
                    p: 5,
                    borderRadius: 1,
                  }}
                >
                  <PrimaryButton
                    onClick={() => {
                      setIsAddingItem(true);
                    }}
                  >
                    Add new chapter
                  </PrimaryButton>
                </Box>
              )}
            </>
          )}
        </Box>
        <Divider sx={{ mt: 2 }} />
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
        <PrimaryButton
          disabled={!data}
          onClick={(e) => {
            e.preventDefault();
            if (!data) return;

            onSubmit(data);
            onClose();
          }}
          autoFocus
        >
          {data ? "Save changes" : "Save"}
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalChapterDetails;
