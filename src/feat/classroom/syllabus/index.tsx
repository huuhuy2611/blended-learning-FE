import ArticleEditor from "@/common/components/article-editor";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { cloneDeep } from "lodash";
import { useAddSyllabusTags } from "@/common/hooks/use-tag";
import { useRouter } from "next/router";
import {
  useClassroom,
  useUpdateClassroom,
} from "@/common/hooks/use-classrooms";
import useLocalStorage from "@/common/hooks/use-local-storage";
import { PrimaryButton } from "@/common/components/button";
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
import CustomSnackbar from "@/common/components/snackbar";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";

const Syllabus = () => {
  const theme = useTheme();
  const router = useRouter();
  const classroomId = router.query.id as string;
  const [userRole, setUserRole] = useLocalStorage("userRole", "");

  const [isEditing, setIsEditing] = useState(false);
  const [syllabusEditor, setSyllabusEditor] = useState("");
  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();

  const {
    data: dataClassroom,
    refetch: refetchDataClassroom,
    isFetching: isFetchingDataClassroom,
  } = useClassroom(classroomId);

  const { mutateAsync: handleAddSyllabusTags } = useAddSyllabusTags({
    config: {
      onSuccess: () => {
        setIsEditing(false);
        setSyllabusEditor("");
        setLabelSnackbar("Update syllabus successful!");
        refetchDataClassroom();
      },
    },
  });

  const { mutateAsync: handleUpdateClassroom } = useUpdateClassroom();

  const handleSyllabus = () => {
    if (!classroomId) return;

    const _syllabus = cloneDeep(syllabusEditor)
      .replace(/\n/g, "")
      .replace(/<ul>/g, "")
      .replace(/<\/ul>/g, "")
      .replace(/<li>/g, "")
      .replace(/<\/li>/g, ",");

    const syllabusTags = _syllabus
      .substring(0, _syllabus.length - 1)
      .split(",");

    handleUpdateClassroom({
      classroomId,
      resources: syllabusEditor,
    });
    handleAddSyllabusTags({ tags: syllabusTags, classroomId });
  };

  return (
    <Box sx={{ width: "100%" }}>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}

      {isEditing ? (
        <>
          <ArticleEditor
            defaultValue={dataClassroom?.resources || ""}
            onChange={(value) => setSyllabusEditor(value)}
          />
          <Box className="div-center" sx={{ mt: 3 }}>
            <Button
              fullWidth
              sx={{ mr: 2 }}
              color="error"
              onClick={() => {
                setSyllabusEditor("");
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
            <PrimaryButton fullWidth onClick={handleSyllabus}>
              Save
            </PrimaryButton>
          </Box>
        </>
      ) : (
        <>
          {dataClassroom?.resources ? (
            <>
              {userRole === "TEACHER" && (
                <Box
                  className="div-center"
                  sx={{ justifyContent: "flex-end", mb: 1 }}
                >
                  <PrimaryButton
                    onClick={() => {
                      setIsEditing(true);
                      setSyllabusEditor(dataClassroom?.resources || "");
                    }}
                  >
                    Edit
                  </PrimaryButton>
                </Box>
              )}
              <Box
                sx={{
                  "& .public-DraftStyleDefault-listLTR": {
                    listStyleType: "none !important",
                  },
                }}
              >
                {!isFetchingDataClassroom && (
                  <ArticleEditor
                    defaultValue={dataClassroom?.resources}
                    EditorProps={{ readOnly: true }}
                  />
                )}
              </Box>
            </>
          ) : (
            <>
              {userRole === "TEACHER" && (
                <Box
                  className="div-center"
                  sx={{ justifyContent: "flex-end", mb: 1 }}
                >
                  <PrimaryButton
                    onClick={() => {
                      setIsEditing(true);
                    }}
                  >
                    Create
                  </PrimaryButton>
                </Box>
              )}
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
      )}
    </Box>
  );
};

export default Syllabus;
