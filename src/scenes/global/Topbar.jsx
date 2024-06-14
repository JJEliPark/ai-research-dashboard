import {
  Box,
  IconButton,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      backgroundColor={colors.grey[800]}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100, // Ensure it stays above other content
      }}
    >
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.grey[800]} borderRadius="3px">
        <Typography variant="h2" color={colors.grey[200]} fontWeight="bold">
          Visualization System for International AI Research
        </Typography>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <Tooltip title="Light / Black Mode">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Information">
          <IconButton onClick={handleClickOpen}>
            <QuestionMarkIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here is some important information for the user. You can include any
            details, instructions, or messages you want to convey here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Topbar;
