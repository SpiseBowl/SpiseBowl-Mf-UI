import React from "react";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function ExportButton() {
  return (
    <Button variant="contained" color="error" startIcon={<FileDownloadIcon />}>
      Export Button
    </Button>
  );
}

export default ExportButton;
