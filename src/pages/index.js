import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>BHOS LIB Admin | Overview</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container rowSpacing={5} columnSpacing={4}>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewBudget difference={12} positive={false} sx={{ height: "100%" }} value="$6k" />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalCustomers difference={10} positive sx={{ height: "100%" }} value="715" />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTasksProgress sx={{ height: "100%" }} value={85.5} />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalProfit sx={{ height: "100%" }} value="217k" />
          </Grid>
          <Grid xs={12} lg={7}>
            <OverviewSales
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={5}>
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={["Desktop", "Tablet", "Phone"]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
