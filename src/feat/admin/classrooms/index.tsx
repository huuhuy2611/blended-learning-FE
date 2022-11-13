import { PrimaryButton } from "@/common/components/button";
import {
  useAddClassroom,
  useClassrooms,
  useDeleteClassroom,
  useUpdateClassroom,
} from "@/common/hooks/use-classrooms";
import { Card, Box, Typography } from "@mui/material";
import CustomTable from "@/common/components/custom-table";
import { useState } from "react";
import ModalAddClassroom from "./modal-add-classroom";
import CustomSnackbar from "@/common/components/snackbar";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import ModalConfirmation from "@/feat/classroom/right-classroom/modal-confirmation";
import { ClassroomItem } from "@/common/types/classroom.type";
import { useRouter } from "next/router";
import { sortBy } from "lodash";

const AdminClassrooms = () => {
  const router = useRouter();

  const { data: dataClassrooms, refetch: refetchDataClassrooms } =
    useClassrooms();

  const [showAddClassroom, setShowAddClassroom] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [selectedClassroom, setSelectedClassroom] =
    useState<ClassroomItem | null>(null);
  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();

  const { mutateAsync: handleAddClassroom } = useAddClassroom({
    config: {
      onSuccess: () => {
        refetchDataClassrooms();
        setShowAddClassroom(false);
        setLabelSnackbar("Create classroom successful!");
      },
    },
  });

  const { mutateAsync: handleUpdateClassroom } = useUpdateClassroom({
    config: {
      onSuccess: () => {
        refetchDataClassrooms();
        setShowAddClassroom(false);
        setLabelSnackbar("Update classroom successful!");
      },
    },
  });

  const { mutateAsync: handleDeleteClassroom } = useDeleteClassroom({
    config: {
      onSuccess: () => {
        refetchDataClassrooms();
        setSelectedClassroom(null);
        setLabelSnackbar("Delete classrooms successful!");
      },
    },
  });

  if (!dataClassrooms) return null;

  return (
    <Card sx={{ p: 2 }}>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}
      {showAddClassroom && (
        <ModalAddClassroom
          data={selectedClassroom}
          onClose={() => {
            setShowAddClassroom(false);
            setSelectedClassroom(null);
          }}
          onSubmit={(payload) => {
            if (selectedClassroom) {
              handleUpdateClassroom({
                ...payload,
                classroomId: selectedClassroom.id,
              });
              return;
            }

            handleAddClassroom(payload);
          }}
        />
      )}
      {showConfirmDelete && selectedClassroom && (
        <ModalConfirmation
          message="Are you sure delete this classroom?"
          onClose={() => setSelectedClassroom(null)}
          onDelete={async () => {
            try {
              await handleDeleteClassroom(selectedClassroom.id);
            } catch (err) {
              setLabelSnackbar("Error delete classroom");
            }
            setSelectedClassroom(null);
          }}
        />
      )}
      <Box
        className="div-center"
        sx={{ justifyContent: "space-between", mb: 2 }}
      >
        <Typography variant="h3">List classrooms</Typography>
        <PrimaryButton onClick={() => setShowAddClassroom(true)}>
          Add Classroom
        </PrimaryButton>
      </Box>

      <CustomTable
        columns={[
          { label: "ID", value: "id" },
          { label: "Title", value: "title" },
          { label: "Status", value: "status" },
        ]}
        rows={sortBy(dataClassrooms, ["title"])}
        onView={(item) => router.push(`/admin/classrooms/${item.id}`)}
        onEdit={(classroom) => {
          setSelectedClassroom(classroom);
          setShowAddClassroom(true);
        }}
        onDelete={(classroom) => {
          setSelectedClassroom(classroom);
          setShowConfirmDelete(true);
        }}
      />
    </Card>
  );
};

export default AdminClassrooms;
