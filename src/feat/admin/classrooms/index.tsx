import { PrimaryButton } from "@/common/components/button";
import {
  useAddClassroom,
  useClassrooms,
  useDeleteClassroom,
} from "@/common/hooks/use-classrooms";
import { Card, Box, Typography } from "@mui/material";
import CustomTable from "@/common/components/custom-table";
import { useState } from "react";
import ModalAddClassroom from "./modal-add-classroom";
import CustomSnackbar from "@/common/components/snackbar";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import ModalConfirmation from "@/feat/classroom/right-classroom/modal-confirmation";
import { ClassroomItem } from "@/common/types/classroom.type";

const AdminClassrooms = () => {
  const { data: dataClassrooms, refetch: refetchDataClassrooms } =
    useClassrooms();

  const [showAddClassroom, setShowAddClassroom] = useState(false);
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
      onError: (err) => {
        console.log(111, err);
        setLabelSnackbar("Error add classroom!");
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
          onClose={() => setShowAddClassroom(false)}
          onSubmit={(payload) => {
            handleAddClassroom(payload);
          }}
        />
      )}
      {selectedClassroom && (
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
        rows={dataClassrooms}
        onView={(item) => console.log(1111, item)}
        onEdit={() => {}}
        onDelete={(classroom) => {
          setSelectedClassroom(classroom);
        }}
      />
    </Card>
  );
};

export default AdminClassrooms;
