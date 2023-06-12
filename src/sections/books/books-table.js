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

export const BooksTable = (props) => {
  const { items } = props;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>Cover</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Title</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Author</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                <TableCell sx={{ textAlign: "center" }}>ISBN</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((book) => {
                return (
                  <TableRow hover key={book._id}>
                    <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                      <Avatar variant="square" src={book.cover}>
                        {book.title}
                      </Avatar>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Typography variant="subtitle2">{book.title}</Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{book.author}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{book.category.name}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{book.ISBN}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{book.quantity}</TableCell>
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
