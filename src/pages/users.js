import Head from "next/head";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { UsersTable } from "src/sections/users/users-table";

const Page = () => {
  const token = localStorage.getItem("token");
  const getUsers = () =>
    axios.get("https://bhos-lib.onrender.com/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  const { data } = useQuery(["users"], getUsers);

  return (
    <>
      <Head>
        <title>BHOS LIB Admin | Users</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Users</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            {!data && (
              <Box sx={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
                <CircularProgress />
              </Box>
            )}
            {data && <UsersTable items={data.data.data.doc} />}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
