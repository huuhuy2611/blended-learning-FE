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
          columns={["ID", "Email", "Name", "Gender", "Role"]}
          rows={dataUsers.map((user) => ({
            id: user.id,
            email: user.email,
            name: user?.profile?.name || "",
            gender: user?.profile?.gender || "",
            role: user.role,
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
