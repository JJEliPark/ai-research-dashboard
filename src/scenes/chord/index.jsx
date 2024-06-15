import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import BodyText from "../../components/BodyText";
import ChordDiagram from "../../components/ChordDiagram";

const Chord = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="70vh">
      <Header title="Chord Function" subtitle="List of Contacts for Future" />

      <Box display="flex" justifyContent="center" height="100%">
        <Box width="83%">
          <BodyText text="This is Chord Diagram for the Data" />
          <Box flexGrow={1}>
            <ChordDiagram />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chord;
