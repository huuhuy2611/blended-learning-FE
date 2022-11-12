import ArticleEditor from "@/common/components/article-editor";
import {
  Box,
  Button,
  Fab,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { cloneDeep, range } from "lodash";
import { useAddSyllabusTags } from "@/common/hooks/use-tag";
import { useRouter } from "next/router";
import {
  useClassroom,
  useUpdateClassroom,
} from "@/common/hooks/use-classrooms";
import useLocalStorage from "@/common/hooks/use-local-storage";
import { PrimaryButton, SecondaryButton } from "@/common/components/button";
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
import CustomSnackbar from "@/common/components/snackbar";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import {
  DragDropContext,
  DropResult,
  Droppable,
  Draggable,
  ResponderProvided,
} from "react-beautiful-dnd";
import ModalChapterDetails from "./modal-chapter-details";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { ChapterPayload } from "@/common/types/tag.type";

const Syllabus = () => {
  const theme = useTheme();
  const router = useRouter();
  const classroomId = router.query.id as string;

  const [userRole, setUserRole] = useLocalStorage("userRole", "");
  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();
  const [errorSnackbar, setErrorSnackbar] = useLabelSnackbar();

  const {
    data: dataClassroom,
    refetch: refetchDataClassroom,
    isFetching: isFetchingDataClassroom,
  } = useClassroom(classroomId);
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
        refetchDataClassroom();
      },
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showModalChapterDetails, setShowModalChapterDetails] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<ChapterPayload | null>(
    null
  );

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
      {userRole === "TEACHER" && (
        <Box
          className="div-center"
          sx={{ justifyContent: "flex-end", mb: 1.5, width: "100%" }}
        >
          {isEditing ? (
            <>
              <Button
                color="error"
                onClick={() => {
                  setIsEditing(false);
                }}
                sx={{ mr: 1 }}
              >
                Cancel
              </Button>
              <PrimaryButton onClick={handleSaveSyllabus}>Save</PrimaryButton>
            </>
          ) : (
            <>
              <PrimaryButton
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Edit
              </PrimaryButton>
            </>
          )}
        </Box>
      )}

      {dataSyllabus?.length ? (
        <>
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
                      {dataSyllabus.map((item, index) => (
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
                              onClick={() => {
                                setSelectedChapter(item);
                                setShowModalChapterDetails(true);
                              }}
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
                                sx={{
                                  px: 2,
                                  py: 1,
                                  border: `1px solid ${theme.palette.grey[50032]}`,
                                  borderRadius: 1,
                                  my: 1,
                                  width: "100%",
                                }}
                              >
                                <Typography variant="body1">
                                  {item.tag}
                                </Typography>

                                {item?.children?.map((subItem) => (
                                  <Box key={subItem.id} sx={{ ml: 3 }}>
                                    <Typography variant="body2">
                                      {subItem.tag}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
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
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default Syllabus;
