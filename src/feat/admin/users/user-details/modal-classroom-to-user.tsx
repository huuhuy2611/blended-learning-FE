import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { PrimaryButton, SecondaryButton } from "@/common/components/button";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import { useUsers } from "@/common/hooks/use-user";
import { UserItem } from "@/common/types/user.type";
import { some } from "lodash";
import { ClassroomItem } from "@/common/types/classroom.type";
import { useClassrooms } from "@/common/hooks/use-classrooms";

interface IProps {
  onClose: () => void;
  onSubmit: (classroomIds: string[]) => void;
  dataIgnore?: ClassroomItem[] | null;
}

const ModalClassroomToUser = (props: IProps) => {
  const { onSubmit, onClose, dataIgnore } = props;

  const { data: dataClassrooms } = useClassrooms();

  const [selectedClassroomIds, setSelectedClassroomIds] = useState<GridRowId[]>(
    []
  );

  const rows = useMemo(() => {
    if (!dataClassrooms || !dataClassrooms.length) return [];

    if (!dataIgnore || !dataIgnore.length) return dataClassrooms;

    const dataFilter = dataClassrooms.filter((item) => !some(dataIgnore, item));

    return dataFilter;
  }, [dataClassrooms, dataIgnore]);

  const columns = useMemo(() => {
    return [
      { field: "id", headerName: "ID", width: 150 },
      { field: "title", headerName: "Title", width: 200 },
      { field: "status", headerName: "Status", width: 120 },
    ];
  }, []);

  return (
    <Dialog
      open
      sx={{
        "& .MuiPaper-root.MuiDialog-paper": {
          maxWidth: "unset",
        },
      }}
    >
      <DialogTitle
        className="div-center"
        sx={{ justifyContent: "space-between" }}
      >
        <Typography variant="h5">Add Classroom to User</Typography>
        <IconButton onClick={onClose}>
          <CloseTwoToneIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ height: "400px", minWidth: "800px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            hideFooterSelectedRowCount
            onSelectionModelChange={(value) => setSelectedClassroomIds(value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={onClose} sx={{ mr: 2 }}>
          Cancel
        </SecondaryButton>
        <PrimaryButton
          disabled={!selectedClassroomIds.length}
          onClick={() => onSubmit(selectedClassroomIds as string[])}
        >
          Add Classrooms to User
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalClassroomToUser;
