import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import {
  useAddSyllabusTags,
  useRemoveChapterTags,
} from "@/common/hooks/use-tag";
import { useRouter } from "next/router";
import { useUpdateClassroom } from "@/common/hooks/use-classrooms";
import useLocalStorage from "@/common/hooks/use-local-storage";
import { PrimaryButton } from "@/common/components/button";
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
import CustomSnackbar from "@/common/components/snackbar";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import {
  DragDropContext,
  DropResult,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import ModalChapterDetails from "./modal-chapter-details";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { ChapterPayload } from "@/common/types/tag.type";
import { ClassroomItem } from "@/common/types/classroom.type";
import ModalConfirmation from "../right-classroom/modal-confirmation";

interface IProps {
  dataClassroom: ClassroomItem | undefined;
  refetchData: () => void;
}

const Syllabus = (props: IProps) => {
  const theme = useTheme();
  const router = useRouter();
  const classroomId = router.query.id as string;

  const { dataClassroom, refetchData } = props;

  const [userRole] = useLocalStorage("userRole", "");
  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();
  const [errorSnackbar, setErrorSnackbar] = useLabelSnackbar();

  const { mutateAsync: handleAddSyllabusTags } = useAddSyllabusTags({
    config: {
      onSuccess: () => {
        setLabelSnackbar("Update syllabus successful!");
      },
    },
  });
  const { mutateAsync: handleUpdateClassroom } = useUpdateClassroom({
    config: {
      onSuccess: () => {
        refetchData();
      },
    },
  });
  const { mutateAsync: handleRemoveChapterTags } = useRemoveChapterTags({
    config: {
      onSuccess: () => {
        setLabelSnackbar("Delete chapter successful!");
      },
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showModalChapterDetails, setShowModalChapterDetails] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<ChapterPayload | null>(
    null
  );
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const [dataSyllabus, setDataSyllabus] = useState<ChapterPayload[] | null>(
    null
  );

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination || !dataSyllabus?.length) return;

    const items = cloneDeep(dataSyllabus);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result?.destination?.index || 0, 0, reorderedItem);

    setDataSyllabus(items);
  };

  const handleSubmitChapter = async (dataSubmit: ChapterPayload) => {
    try {
      await handleAddSyllabusTags({ tags: dataSubmit, classroomId });
    } catch (err) {
      setErrorSnackbar("Error when call POST syllabus tags");
      return;
    }

    // create new resources
    if (!dataSyllabus) {
      handleUpdateClassroom({
        classroomId,
        resources: JSON.stringify([dataSubmit]),
      });
      return;
    }

    // create new chapter
    if (!selectedChapter) {
      handleUpdateClassroom({
        classroomId,
        resources: JSON.stringify([...dataSyllabus, dataSubmit]),
      });
      return;
    }

    // update chapter
    const updateDataSyllabus = dataSyllabus.map((item) => {
      if (item.id === dataSubmit.id) return dataSubmit;
      return item;
    });

    handleUpdateClassroom({
      classroomId,
      resources: JSON.stringify(updateDataSyllabus),
    });
  };

  const handleSaveSyllabus = async () => {
    await handleUpdateClassroom({
      classroomId,
      resources: JSON.stringify(dataSyllabus),
    });

    setIsEditing(false);
  };

  useEffect(() => {
    if (!dataClassroom?.resources) return;

    setDataSyllabus(JSON.parse(dataClassroom.resources) || []);
  }, [dataClassroom]);

  return (
    <>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}
      {errorSnackbar && <CustomSnackbar message={errorSnackbar} type="error" />}

      {showModalChapterDetails && (
        <ModalChapterDetails
          data={selectedChapter}
          onClose={() => {
            setShowModalChapterDetails(false);
            setSelectedChapter(null);
          }}
          onSubmit={(dataSubmit) => {
            handleSubmitChapter(dataSubmit);
          }}
        />
      )}

      {showConfirmDelete && selectedChapter && (
        <ModalConfirmation
          message="Are you sure delete this chapter?"
          onClose={() => setSelectedChapter(null)}
          onDelete={async () => {
            if (!selectedChapter.id) {
              setErrorSnackbar("Error when delete chapter");
              return;
            }

            try {
              await handleRemoveChapterTags(selectedChapter.id);
              const filterDataSyllabus =
                dataSyllabus?.filter(
                  (item) => item.id !== selectedChapter.id
                ) || [];
              setDataSyllabus(filterDataSyllabus);
            } catch (err) {
              setErrorSnackbar("Error when delete chapter");
            }
            setSelectedChapter(null);
          }}
        />
      )}
      {userRole === "TEACHER" && (
        <Box
          className="div-center"
          sx={{ justifyContent: "flex-end", mb: 1.5, width: "100%" }}
        >
          {isEditing ? (
            <>
              {/* <Button
                color="error"
                onClick={() => {
                  setIsEditing(false);
                }}
                sx={{ mr: 1 }}
              >
                Cancel
              </Button> */}
              <PrimaryButton onClick={handleSaveSyllabus}>Save</PrimaryButton>
            </>
          ) : (
            <>
              <PrimaryButton
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                {!!dataSyllabus?.length ? "Edit" : "Create"}
              </PrimaryButton>
            </>
          )}
        </Box>
      )}

      {isEditing ? (
        <>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <Box
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  sx={{ width: "100%" }}
                >
                  {dataSyllabus?.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="div-center"
                          sx={{ ml: 1, width: "100%" }}
                        >
                          <DragIndicatorIcon
                            sx={{
                              fontSize: 20,
                              color: "grey.500",
                              mr: 1,
                            }}
                          />
                          <Box
                            onClick={() => {
                              setSelectedChapter(item);
                              setShowModalChapterDetails(true);
                            }}
                            sx={{
                              px: 2,
                              py: 1,
                              border: `1px solid ${theme.palette.grey[50032]}`,
                              borderRadius: 1,
                              my: 1,
                              width: "100%",
                            }}
                          >
                            <Typography variant="body1">{item.tag}</Typography>

                            {item?.children?.map((subItem) => (
                              <Box key={subItem.id} sx={{ ml: 3 }}>
                                <Typography variant="body2">
                                  {subItem.tag}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                          <IconButton
                            sx={{ p: 1 }}
                            onClick={() => {
                              setSelectedChapter(item);
                              setShowConfirmDelete(true);
                            }}
                          >
                            <DeleteTwoToneIcon sx={{ fontSize: 20 }} />
                          </IconButton>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </DragDropContext>
          <Box className="div-center" sx={{ width: "100%", mt: 1 }}>
            <PrimaryButton
              onClick={() => {
                setShowModalChapterDetails(true);
              }}
            >
              <AddTwoToneIcon sx={{ fontSize: 16 }} />
              Add New Chapter
            </PrimaryButton>
          </Box>
        </>
      ) : (
        <>
          {dataSyllabus?.length ? (
            <Box
              sx={{
                py: 1,
                px: 3,
                border: `1px solid ${theme.palette.grey[50032]}`,
                borderRadius: 1,
                width: "100%",
              }}
            >
              {dataSyllabus.map((chapter) => (
                <Box key={chapter.id}>
                  <Typography variant="subtitle1">{chapter.tag}</Typography>
                  {chapter?.children?.map((item) => (
                    <Box key={item.id} sx={{ ml: 2 }}>
                      <Typography variant="body1">{item.tag}</Typography>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          ) : (
            <Box
              className="div-center"
              sx={{
                flexDirection: "column",
                width: "100%",
                height: "500px",
                background: theme.palette.grey[500_8],
                borderRadius: 1,
              }}
            >
              <CancelPresentationTwoToneIcon
                sx={{ color: "grey.500", fontSize: 40 }}
              />
              <Typography variant="h4" sx={{ color: "grey.500" }}>
                No syllabus yet
              </Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Syllabus;
