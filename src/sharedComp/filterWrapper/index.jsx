import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Popover, Typography } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";

function FilterWrapper({ btnName = "Filter", children }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        variant="contained"
        startIcon={<FilterAlt />}
        onClick={handleClick}
        fullWidth
      >
        {btnName}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box p={{ xs: 1, md: 2 }}>
          {children ?? <Typography>The content of the filter.</Typography>}
        </Box>
      </Popover>
    </>
  );
}

FilterWrapper.propTypes = {
  btnName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterWrapper;
