import { PrimaryButton } from "@/common/components/button";
import { Card, Box, Typography } from "@mui/material";

import { useUsers } from "@/common/hooks/use-user";
import CustomTable from "@/common/components/custom-table";

const AdminUsers = () => {
  const { data: dataUsers } = useUsers();

  if (!dataUsers) return null;

  return (
    <Card sx={{ p: 2 }}>
      <Box
        className="div-center"
        sx={{ justifyContent: "space-between", mb: 2 }}
      >
        <Typography variant="h3">List users</Typography>
        <PrimaryButton>Add user</PrimaryButton>
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
          onDelete={() => {}}
        />
      </Box>
    </Card>
  );
};

export default AdminUsers;
