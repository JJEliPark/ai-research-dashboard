import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import GeoChart from "../../components/GeoChart";
import BodyText from "../../components/BodyText";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="70vh">
      <Header title="Geo Function" subtitle="List of Contacts for Future" />

      <Box display="flex" justifyContent="center" height="100%">
        <Box width="83%">
          <BodyText text="This is Geo Chart for the Data" />
          <Box flexGrow={1}>
            <GeoChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Geography;
