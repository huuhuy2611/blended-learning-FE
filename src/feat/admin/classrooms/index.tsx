import { PrimaryButton } from "@/common/components/button";
import { useClassrooms } from "@/common/hooks/use-classrooms";
import {
  TableRow,
  TableCell,
  Card,
  styled,
  tableCellClasses,
  Box,
  Typography,
} from "@mui/material";
import CustomTable from "@/common/components/custom-table";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AdminClassrooms = () => {
  const { data: dataClassrooms } = useClassrooms();

  if (!dataClassrooms) return null;

  return (
    <Card sx={{ p: 2 }}>
      <Box
        className="div-center"
        sx={{ justifyContent: "space-between", mb: 2 }}
      >
        <Typography variant="h3">List classrooms</Typography>
        <PrimaryButton>Add Classroom</PrimaryButton>
      </Box>

      <CustomTable
        columns={["ID", "Title", "Status"]}
        rows={dataClassrooms.map(({ id, title, status }) => ({
          id,
          title,
          status,
        }))}
        onView={(item) => console.log(1111, item)}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </Card>
  );
};

export default AdminClassrooms;
