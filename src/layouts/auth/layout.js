import PropTypes from "prop-types";
import NextLink from "next/link";
import { Box, Unstable_Grid2 as Grid, useTheme, useMediaQuery } from "@mui/material";
import { Logo } from "src/components/logo";

export const Layout = (props) => {
  const { children } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          xs={12}
          md={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: "inline-flex",
                height: 32,
                width: "100%",
              }}
            >
              <Logo type="dark" />
            </Box>
          </Box>
          {children}
        </Grid>
        {!isMobile && (
          <Grid
            xs={12}
            md={6}
            sx={{
              alignItems: "center",
              backgroundColor: "#eeeeee",
              backgroundImage: "linear-gradient(315deg, #eeeeee 0%, #ec4534 90%)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              "& img": {
                width: "100%",
              },
            }}
          >
            <Box sx={{ p: 3 }}>
              <img alt="" src="/assets/auth-illustration.svg" />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
