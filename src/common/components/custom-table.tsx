import {
  TableCell,
  tableCellClasses,
  TableRow,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

const StyledTableCell = styled(TableCell)(() => ({
  "&.MuiTableCell-stickyHeader": {
    background: "#dadada",
    color: "#000",
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

export interface IColumn {
  label: string;
  value: string;
}

interface IProps {
  columns: IColumn[];
  rows: any;
  onView?: (item: any) => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}

const CustomTable = (props: IProps) => {
  const { columns, rows, onView, onEdit, onDelete } = props;

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
      <Table stickyHeader sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((item, index) => (
              <StyledTableCell key={index}>{item.label}</StyledTableCell>
            ))}
            {(onView || onEdit || onDelete) && (
              <StyledTableCell>Actions</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: any) => (
            <StyledTableRow key={index}>
              {columns.map(({ value }, itemIndex) => (
                <StyledTableCell key={itemIndex}>{row[value]}</StyledTableCell>
              ))}

              {(onView || onEdit || onDelete) && (
                <StyledTableCell>
                  <Box>
                    {onView && (
                      <IconButton
                        sx={{
                          border: "1px solid #cbcfd4",
                          borderRadius: 1,
                          mr: 1,
                        }}
                        onClick={() => onView(row)}
                      >
                        <RemoveRedEyeTwoToneIcon />
                      </IconButton>
                    )}
                    {onEdit && (
                      <IconButton
                        sx={{
                          border: "1px solid #cbcfd4",
                          borderRadius: 1,
                          mr: 1,
                        }}
                        onClick={() => onEdit(row)}
                      >
                        <EditTwoToneIcon />
                      </IconButton>
                    )}
                    {onDelete && (
                      <IconButton
                        sx={{
                          border: "1px solid #cbcfd4",
                          borderRadius: 1,
                          mr: 1,
                        }}
                        onClick={() => onDelete(row)}
                      >
                        <DeleteTwoToneIcon />
                      </IconButton>
                    )}
                  </Box>
                </StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
