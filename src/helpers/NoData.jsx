import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { DocumentScannerTwoTone } from "@mui/icons-material";

function NoData({
  title = "No Data Found",
  description = "",
  children = null,
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        color: "gray",
      }}
    >
      <DocumentScannerTwoTone sx={{ fontSize: "100px" }} />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1">{description}</Typography>
      {children}
    </Box>
  );
}

NoData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default NoData;
