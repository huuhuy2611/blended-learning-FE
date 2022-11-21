import { PrimaryButton } from "@/common/components/button";
import { Card, Box, Typography } from "@mui/material";

import {
  useAddUser,
  useDeleteUser,
  useUpdateUser,
  useUsers,
} from "@/common/hooks/use-user";
import CustomTable from "@/common/components/custom-table";
import { useState } from "react";
import ModalAddUser from "./modal-add-user";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";
import CustomSnackbar from "@/common/components/snackbar";
import ModalConfirmation from "@/feat/classroom/right-classroom/modal-confirmation";
import { UserItem } from "@/common/types/user.type";
import { useRouter } from "next/router";
import useLocalStorage from "@/common/hooks/use-local-storage";

const AdminUsers = () => {
  const router = useRouter();
  const [userRole] = useLocalStorage("userRole", "");

  const [labelSnackbar, setLabelSnackbar] = useLabelSnackbar();
  const [errorSnackbar, setErrorSnackbar] = useLabelSnackbar();
  const [showModalUser, setShowModalUser] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
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

  const { mutateAsync: handleUpdateUser } = useUpdateUser({
    config: {
      onSuccess: () => {
        refetchDataUsers();
        setShowModalUser(false);
        setLabelSnackbar("Update user successful!");
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
          data={selectedUser}
          onClose={() => {
            setSelectedUser(null);
            setShowModalUser(false);
          }}
          onSubmit={async (dataSubmit) => {
            try {
              if (selectedUser) {
                const { password, ...rest } = dataSubmit;
                const _dataSubmit = dataSubmit.password ? dataSubmit : rest;
                await handleUpdateUser({
                  ..._dataSubmit,
                  userId: selectedUser.id,
                });
                return;
              }
              await handleAddUser(dataSubmit);
            } catch (err: any) {
              setErrorSnackbar(err.message);
            }
          }}
        />
      )}
      {showConfirmDelete && selectedUser && (
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
          {userRole === "ADMIN" && (
            <PrimaryButton onClick={() => setShowModalUser(true)}>
              Add user
            </PrimaryButton>
          )}
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
            rows={dataUsers}
            onView={(user) => {
              router.push(`/admin/users/${user.id}`);
            }}
            onEdit={
              userRole === "ADMIN"
                ? (user) => {
                    setSelectedUser(user);
                    setShowModalUser(true);
                  }
                : undefined
            }
            onDelete={
              userRole === "ADMIN"
                ? (user) => {
                    setSelectedUser(user);
                    setShowConfirmDelete(true);
                  }
                : undefined
            }
          />
        </Box>
      </Card>
    </>
  );
};

export default AdminUsers;
