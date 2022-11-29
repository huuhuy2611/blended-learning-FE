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

interface IProps {
  onClose: () => void;
  onSubmit: (userIds: string[]) => void;
  dataIgnore?: UserItem[] | null;
}

const ModalUserToClassroom = (props: IProps) => {
  const { onSubmit, onClose, dataIgnore } = props;

  const { data: dataUsers } = useUsers();

  const [selectedUserIds, setSelectedUserIds] = useState<GridRowId[]>([]);

  const rows = useMemo(() => {
    if (!dataUsers || !dataUsers.length) return [];

    if (!dataIgnore || !dataIgnore.length) return dataUsers;

    const dataFilter = dataUsers.filter(
      (item) =>
        item.role !== "ADMIN" &&
        !dataIgnore.map(({ id }) => id).includes(item.id)
    );

    return dataFilter;
  }, [dataUsers, dataIgnore]);

  const columns = useMemo(() => {
    return [
      { field: "id", headerName: "ID", width: 150 },
      { field: "email", headerName: "Email", width: 200 },
      { field: "name", headerName: "Name", width: 120 },
      {
        field: "gender",
        headerName: "Gender",
      },
      {
        field: "role",
        headerName: "Role",
      },
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
        <Typography variant="h5">Add User to Classroom</Typography>
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
            onSelectionModelChange={(value) => setSelectedUserIds(value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <SecondaryButton onClick={onClose} sx={{ mr: 2 }}>
          Cancel
        </SecondaryButton>
        <PrimaryButton
          disabled={!selectedUserIds.length}
          onClick={() => {
            onSubmit(selectedUserIds as string[]);
          }}
        >
          Add Users to Classroom
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalUserToClassroom;
