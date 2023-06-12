import {
  SvgIcon,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Chip,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

export const RequestsTable = (props) => {
  const { items } = props;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>User</TableCell>
                <TableCell sx={{ textAlign: "center" }}>User Email</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Book</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Author</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Date</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Type</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((request) => {
                return (
                  <TableRow hover key={request._id}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Typography variant="subtitle2">
                        {request.userId.name} {request.userId.surname}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{request.userId.email}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{request.bookId.title}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{request.bookId.author}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {new Date(request.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {" "}
                      <Chip
                        label={request.type.toUpperCase()}
                        color={request.type === "issue" ? "success" : "warning"}
                      />
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <SvgIcon sx={{ color: "green", marginRight: "10px", cursor: "pointer" }}>
                        <CheckIcon />
                      </SvgIcon>
                      <SvgIcon sx={{ color: "red", cursor: "pointer" }}>
                        <XMarkIcon />
                      </SvgIcon>
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
