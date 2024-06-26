import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BodyText from "../../components/BodyText";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import AreaChart from "../../components/AreaChart";
import BumpChart from "../../components/BumpChart";
import ChordDiagram from "../../components/ChordDiagram";
import BubbleChart from "../../components/BubbleChart";
import NetworkChart from "../../components/NetworkChart";
import GeoChart from "../../components/GeoChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [boxHeight, setBoxHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const weight = window.innerWidth;
      setBoxHeight(weight * (2 / 3));
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize); // 창 크기 조정 시 업데이트

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 2, sm: 2, md: 2 }}
          justifyContent="center"
          sx={{ width: "83.33%" }}
        >
          <Grid
            xs={12} // full width on extra-small screens
            sm={12} // half width on small screens
            md={12} // one-third width on medium screens
            lg={12} // one-fourth width on large screens
          >
            <BodyText text="This is Sample Text This is Sample Text This is Sample Text This is Sample Text This is Sample Text This is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample TextThis is Sample Text" />
            <Divider sx={{ borderColor: colors.mainBlue[600] }} />
          </Grid>
          <Grid
            xs={12} // full width on extra-small screens
            sm={12} // half width on small screens
            md={4} // one-third width on medium screens
            lg={4} // one-fourth width on large screens
          >
            <Box
              height={300}
              my={2}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{
                border: "2px solid grey",
                color: "inherit",
                textDecoration: "none",
              }}
              component={Link}
              to="/area"
            >
              <AreaChart isDashboard={true} />
            </Box>
          </Grid>
          <Grid
            xs={12} // full width on extra-small screens
            sm={12} // half width on small screens
            md={4} // one-third width on medium screens
            lg={4} // one-fourth width on large screens}
          >
            <Box
              height={300}
              my={2}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              component={Link}
              to="/chord"
            >
              <ChordDiagram isDashboard={true} />
            </Box>
          </Grid>
          <Grid
            xs={12} // full width on extra-small screens
            sm={12} // half width on small screens
            md={4} // one-third width on medium screens
            lg={4} // one-fourth width on large screens
          >
            <Box
              height={300}
              my={2}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              component={Link}
              to="/bubble"
            >
              <BubbleChart isDashboard={true} />
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box
              height={400}
              my={0}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              component={Link}
              to="/geography"
            >
              <GeoChart isDashboard={true} />
            </Box>
          </Grid>
          <Grid
            xs={12} // full width on extra-small screens
            sm={12} // half width on small screens
            md={6} // one-third width on medium screens
            lg={6} // one-fourth width on large screens
          >
            <Box
              height={400}
              my={2}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              component={Link}
              to="/bump"
            >
              <BumpChart isDashboard={true} />
            </Box>
          </Grid>
          <Grid
            xs={12} // full width on extra-small screens
            sm={12} // half width on small screens
            md={6} // one-third width on medium screens
            lg={6} // one-fourth width on large screens
          >
            <Box
              height={400}
              my={2}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
              component={Link}
              to="/network"
            >
              <NetworkChart isDashboard={true} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
