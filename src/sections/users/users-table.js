import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";

export const UsersTable = (props) => {
  const { items } = props;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>Photo</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Name</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Surname</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Paternal</TableCell>
                <TableCell sx={{ textAlign: "center" }}>E-Mail</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Address</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Birth Date</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Phone</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Department</TableCell>
                <TableCell sx={{ textAlign: "center" }}>ID Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items
                .filter((user) => user.role === "user")
                .map((user) => {
                  return (
                    <TableRow hover key={user._id}>
                      <TableCell
                        sx={{ display: "flex", justifyContent: "center", whiteSpace: "nowrap" }}
                      >
                        <Avatar src={user.photo}>{user.name}</Avatar>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        <Typography variant="subtitle2">{user.name}</Typography>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        {user.surname}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        {user.paternalName}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        {user.email}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        {user.address}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        {new Date(user.birthDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        {user.phone}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        {user.workplace}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        {user.IDNumber}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};
