import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const BodyText = ({ text }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography variant="h4" color={colors.grey[100]} sx={{ mb: "5px" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default BodyText;
