import { format } from "date-fns";
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
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import DocumentTextIcon from "@heroicons/react/24/solid/DocumentTextIcon";

export const UploadsTable = (props) => {
  const { items } = props;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>Name</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Date</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Uploader Name</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Uploader Email</TableCell>
                <TableCell sx={{ textAlign: "center" }}>PDF</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((upload) => {
                return (
                  <TableRow hover key={upload._id}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Typography variant="subtitle2">{upload.name}</Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {new Date(upload.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {upload.userId.name} {upload.userId.surname}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{upload.userId.email}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <a style={{ color: "inherit" }} href="/assets/documents/sample.pdf" download>
                        <SvgIcon fontSize="small">
                          <DocumentTextIcon />
                        </SvgIcon>
                      </a>
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
