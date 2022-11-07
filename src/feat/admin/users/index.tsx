import { PrimaryButton } from "@/common/components/button";
import { Card, Box, Typography } from "@mui/material";

import { useAddUser, useDeleteUser, useUsers } from "@/common/hooks/use-user";
import CustomTable from "@/common/components/custom-table";
import { useState } from "react";
import ModalAddUser from "./modal-add-user";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import CustomSnackbar from "@/common/components/snackbar";
import ModalConfirmation from "@/feat/classroom/right-classroom/modal-confirmation";
import { UserItem } from "@/common/types/user.type";

const AdminUsers = () => {
  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();
  const [errorSnackbar, setErrorSnackbar] = useLabelSnackbar();
  const [showModalUser, setShowModalUser] = useState(false);

  const [selectedUser, setSelectedUser] = useState<UserItem | null>(null);

  const { data: dataUsers, refetch: refetchDataUsers } = useUsers();

  const { mutateAsync: handleAddUser } = useAddUser({
    config: {
      onSuccess: () => {
        refetchDataUsers();
        setShowModalUser(false);
        setLabelSnackbar("Add new user successful!");
      },
    },
  });

  const { mutateAsync: handleDeleteUser } = useDeleteUser({
    config: {
      onSuccess: () => {
        refetchDataUsers();
        setShowModalUser(false);
        setLabelSnackbar("Delete user successful!");
      },
    },
  });

  if (!dataUsers) return null;

  return (
    <>
      {labelSnackbar && <CustomSnackbar message={labelSnackbar} />}
      {errorSnackbar && <CustomSnackbar message={errorSnackbar} type="error" />}
      {showModalUser && (
        <ModalAddUser
          onClose={() => setShowModalUser(false)}
          onSubmit={async (dataSubmit) => {
            try {
              await handleAddUser(dataSubmit);
            } catch (err: any) {
              setErrorSnackbar(err.message);
            }
          }}
        />
      )}
      {selectedUser && (
        <ModalConfirmation
          message="Are you sure delete this user?"
          onClose={() => setSelectedUser(null)}
          onDelete={async () => {
            try {
              await handleDeleteUser(selectedUser.id);
            } catch (err) {
              setLabelSnackbar("Error delete User");
            }
            setSelectedUser(null);
          }}
        />
      )}
      <Card sx={{ p: 2 }}>
        <Box
          className="div-center"
          sx={{ justifyContent: "space-between", mb: 2 }}
        >
          <Typography variant="h3">List users</Typography>
          <PrimaryButton onClick={() => setShowModalUser(true)}>
            Add user
          </PrimaryButton>
        </Box>
        <Box sx={{ pb: 2 }}>
          <CustomTable
            columns={[
              { label: "ID", value: "id" },
              { label: "Email", value: "email" },
              { label: "Name", value: "name" },
              { label: "Gender", value: "gender" },
              { label: "Role", value: "role" },
            ]}
            rows={dataUsers.map((user) => ({
              ...user,
              name: user?.profile?.name || "",
              gender: user?.profile?.gender || "",
            }))}
            onView={() => {}}
            onEdit={() => {}}
            onDelete={(item) => {
              setSelectedUser(item);
            }}
          />
        </Box>
      </Card>
    </>
  );
};

export default AdminUsers;
