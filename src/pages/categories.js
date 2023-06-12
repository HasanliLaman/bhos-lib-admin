import Head from "next/head";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  CircularProgress,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CategoryCard } from "src/sections/categories/category-card";

const companies = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    createdAt: "27/03/2019",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
    logo: "/assets/logos/logo-dropbox.png",
    title: "Dropbox",
    downloads: "594",
  },
  {
    id: "ed2b900870ceba72d203ec15",
    createdAt: "31/03/2019",
    description:
      "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
    logo: "/assets/logos/logo-medium.png",
    title: "Medium Corporation",
    downloads: "625",
  },
  {
    id: "a033e38768c82fca90df3db7",
    createdAt: "03/04/2019",
    description:
      "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.",
    logo: "/assets/logos/logo-slack.png",
    title: "Slack",
    downloads: "857",
  },
  {
    id: "1efecb2bf6a51def9869ab0f",
    createdAt: "04/04/2019",
    description: "Lyft is an on-demand transportation company based in San Francisco, California.",
    logo: "/assets/logos/logo-lyft.png",
    title: "Lyft",
    downloads: "406",
  },
  {
    id: "1ed68149f65fbc6089b5fd07",
    createdAt: "04/04/2019",
    description: "GitHub is a web-based hosting service for version control of code using Git.",
    logo: "/assets/logos/logo-github.png",
    title: "GitHub",
    downloads: "835",
  },
  {
    id: "5dab321376eff6177407e887",
    createdAt: "04/04/2019",
    description:
      "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
    logo: "/assets/logos/logo-squarespace.png",
    title: "Squarespace",
    downloads: "835",
  },
];

const Page = () => {
  const getCategories = () => axios.get("https://bhos-lib.onrender.com/categories");
  const { data } = useQuery(["categories"], getCategories);

  return (
    <>
      <Head>
        <title>BHOS LIB Admin | Categories</title>
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
                <Typography variant="h4">Categories</Typography>
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
            {data && (
              <Grid container spacing={3}>
                {data.data.data.doc.map((category) => (
                  <Grid xs={12} md={6} lg={4} key={category.id}>
                    <CategoryCard category={category} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
