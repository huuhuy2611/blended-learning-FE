import CustomTable from "@/common/components/custom-table";
import {
  useAddClassroomsToUser,
  useClassroomsByUser,
  useRemoveClassroomFromUser,
} from "@/common/hooks/use-classrooms";
import { useUser } from "@/common/hooks/use-user";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
import { PrimaryButton } from "@/common/components/button";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import CustomSnackbar from "@/common/components/snackbar";
import { UserItem } from "@/common/types/user.type";
import ModalConfirmation from "@/feat/classroom/right-classroom/modal-confirmation";
import ModalClassroomToUser from "./modal-classroom-to-user";
import useLocalStorage from "@/common/hooks/use-local-storage";

const AdminUserDetails = () => {
  const theme = useTheme();
  const router = useRouter();
  const userId = router.query.id as string;
  const [userRole] = useLocalStorage("userRole", "");
  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();

  const { data: dataUser } = useUser(userId);
  const { data: dataClassroomsByUser, refetch: refetchDataClassroomsByUser } =
    useClassroomsByUser(userId);
  const { mutateAsync: handleAddClassroomsToUser } = useAddClassroomsToUser({
    config: {
      onSuccess: () => {
        setShowModalClassroomsByUser(false);
        refetchDataClassroomsByUser();
        setLabelSnackbar("Add classrooms by user successful!");
      },
    },
  });
  const { mutateAsync: handleRemoveClassroomFromUser } =
    useRemoveClassroomFromUser({
      config: {
        onSuccess: () => {
          refetchDataClassroomsByUser();
          setLabelSnackbar("Remove classroom from user successful!");
        },
      },
    });

  const [showModalClassroomsByUser, setShowModalClassroomsByUser] =
    useState(false);
  const [selectedClassroom, setSelectedClassroom] = useState<UserItem | null>(
    null
  );

  if (!dataUser) return null;

  return (
    <Card sx={{ p: 2 }}>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}
      {showModalClassroomsByUser && (
        <ModalClassroomToUser
          dataIgnore={dataClassroomsByUser}
          onSubmit={(classroomIds: string[]) => {
            handleAddClassroomsToUser({
              classroomIds,
              userId,
            });
          }}
          onClose={() => setShowModalClassroomsByUser(false)}
        />
      )}
      {selectedClassroom && (
        <ModalConfirmation
          message="Are you sure remove this classroom outside user?"
          onClose={() => setSelectedClassroom(null)}
          onDelete={async () => {
            try {
              await handleRemoveClassroomFromUser({
                classroomId: selectedClassroom.id,
                userId,
              });
            } catch (err) {
              setLabelSnackbar("Error delete classroom");
            }
            setSelectedClassroom(null);
          }}
        />
      )}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          User information
        </Typography>
        <Box sx={{ ml: 2 }}>
          <Typography variant="body1">
            <strong>ID:</strong> {dataUser?.id}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {dataUser?.email}
          </Typography>
          <Typography variant="body1">
            <strong>Name:</strong> {dataUser?.name}
          </Typography>
          <Typography variant="body1">
            <strong>Gender:</strong> {dataUser?.gender}
          </Typography>
          <Typography variant="body1">
            <strong>Role:</strong> {dataUser?.role}
          </Typography>
        </Box>
      </Box>
      {["TEACHER", "STUDENT"].includes(dataUser.role) && (
        <Box>
          <Box sx={{ mb: 1 }}>
            <Box
              className="div-center"
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                List classrooms of user
              </Typography>
              <PrimaryButton onClick={() => setShowModalClassroomsByUser(true)}>
                Add classroom
              </PrimaryButton>
            </Box>
          </Box>

          {dataClassroomsByUser?.length ? (
            <CustomTable
              columns={[
                { label: "ID", value: "id" },
                { label: "Title", value: "title" },
                { label: "Status", value: "status" },
              ]}
              rows={dataClassroomsByUser}
              onDelete={(user) => {
                setSelectedClassroom(user);
              }}
            />
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
      )}
    </Card>
  );
};

export default AdminUserDetails;
