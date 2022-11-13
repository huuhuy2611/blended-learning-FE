import ArticleEditor from "@/common/components/article-editor";
import CustomTable from "@/common/components/custom-table";
import { useClassroom } from "@/common/hooks/use-classrooms";
import {
  useAddUsersToClassroom,
  useRemoveUserFromClassroom,
  useUsersByClassroom,
} from "@/common/hooks/use-user";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
import { PrimaryButton } from "@/common/components/button";
import ModalUserToClassroom from "./modal-user-to-classroom";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import CustomSnackbar from "@/common/components/snackbar";
import { UserItem } from "@/common/types/user.type";
import ModalConfirmation from "@/feat/classroom/right-classroom/modal-confirmation";
import { ChapterPayload } from "@/common/types/tag.type";

const AdminClassroomDetails = () => {
  const theme = useTheme();
  const router = useRouter();
  const classroomId = router.query.id as string;

  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();

  const { data: dataClassroom } = useClassroom(classroomId);
  const { data: dataUsersByClassroom, refetch: refetchDataUsersByClassroom } =
    useUsersByClassroom(classroomId);
  const { mutateAsync: handleAddUsersToClassroom } = useAddUsersToClassroom({
    config: {
      onSuccess: () => {
        setShowModalUserToClassroom(false);
        refetchDataUsersByClassroom();
        setLabelSnackbar("Add users to classroom successful!");
      },
    },
  });
  const { mutateAsync: handleRemoveUserFromClassroom } =
    useRemoveUserFromClassroom({
      config: {
        onSuccess: () => {
          refetchDataUsersByClassroom();
          setLabelSnackbar("Remove user from classroom successful!");
        },
      },
    });

  const [showModalUserToClassroom, setShowModalUserToClassroom] =
    useState(false);
  const [selectedUser, setSelectedUser] = useState<UserItem | null>(null);

  if (!dataClassroom) return null;

  return (
    <Card sx={{ p: 2 }}>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}
      {showModalUserToClassroom && (
        <ModalUserToClassroom
          dataIgnore={dataUsersByClassroom}
          onSubmit={(userIds: string[]) => {
            handleAddUsersToClassroom({
              userIds,
              classroomId,
            });
          }}
          onClose={() => setShowModalUserToClassroom(false)}
        />
      )}
      {selectedUser && (
        <ModalConfirmation
          message="Are you sure remove this user outside classroom?"
          onClose={() => setSelectedUser(null)}
          onDelete={async () => {
            try {
              await handleRemoveUserFromClassroom({
                userId: selectedUser.id,
                classroomId,
              });
            } catch (err) {
              setLabelSnackbar("Error delete user");
            }
            setSelectedUser(null);
          }}
        />
      )}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Classroom information
        </Typography>
        <Box sx={{ ml: 2 }}>
          <Typography variant="body1">
            <strong>ID:</strong> {dataClassroom?.id}
          </Typography>
          <Typography variant="body1">
            <strong>Title:</strong> {dataClassroom?.title}
          </Typography>
          <Typography variant="body1">
            <strong>Status:</strong> {dataClassroom?.status}
          </Typography>
          <Typography variant="body1">
            <strong>Syllabus:</strong>
          </Typography>
          <Box
            sx={{
              py: 1,
              px: 3,
              border: `1px solid ${theme.palette.grey[50032]}`,
              borderRadius: 1,
              width: "100%",
            }}
          >
            {JSON.parse(dataClassroom?.resources || "").map(
              (chapter: ChapterPayload) => (
                <Box key={chapter.id}>
                  <Typography variant="subtitle1">{chapter.tag}</Typography>
                  {chapter?.children?.map((item) => (
                    <Box key={item.id} sx={{ ml: 2 }}>
                      <Typography variant="body1">{item.tag}</Typography>
                    </Box>
                  ))}
                </Box>
              )
            )}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ mb: 1 }}>
          <Box className="div-center" sx={{ justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              List Users in Classroom
            </Typography>
            <PrimaryButton onClick={() => setShowModalUserToClassroom(true)}>
              Add user
            </PrimaryButton>
          </Box>
        </Box>

        {dataUsersByClassroom?.length ? (
          <Box>
            <CustomTable
              columns={[
                { label: "ID", value: "id" },
                { label: "Email", value: "email" },
                { label: "Name", value: "name" },
                { label: "Gender", value: "gender" },
                { label: "Role", value: "role" },
              ]}
              rows={dataUsersByClassroom}
              // onView={() => {}}
              // onEdit={(user) => {
              //   setSelectedUser(user);
              //   setShowModalUser(true);
              // }}
              onDelete={(user) => {
                setSelectedUser(user);
              }}
            />
          </Box>
        ) : (
          <Box
            className="div-center"
            sx={{
              height: "200px",
              background: theme.palette.grey[50032],
              borderRadius: 1,
              flexDirection: "column",
            }}
          >
            <CancelPresentationTwoToneIcon sx={{ fontSize: 36 }} />
            <Typography variant="h5">No users yet</Typography>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default AdminClassroomDetails;
