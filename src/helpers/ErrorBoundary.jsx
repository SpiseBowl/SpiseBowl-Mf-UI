import React, { Component } from "react";
import { Box, Button, Paper, Typography, Collapse } from "@mui/material";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      isLocalhost: window.location.hostname === "localhost",
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
    // Optional: log to external service
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    });
    window.location.reload();
  };

  toggleDetails = () => {
    this.setState((prev) => ({ showDetails: !prev.showDetails }));
  };

  render() {
    const { hasError, error, errorInfo, showDetails, isLocalhost } = this.state;

    if (hasError) {
      return (
        <Paper elevation={3} sx={{ p: 3, backgroundColor: "#fff3e0", mt: 2 }}>
          <Typography variant="h6" color="error" gutterBottom>
            ⚠️ Something went wrong in this section.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            This part of the app failed to load properly. You can try again.
          </Typography>

          <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
            <Button variant="contained" onClick={this.handleRetry}>
              Retry
            </Button>
            {isLocalhost && (
              <Button variant="outlined" onClick={this.toggleDetails}>
                {showDetails ? "Hide" : "Show"} Details
              </Button>
            )}
          </Box>

          {showDetails && errorInfo && (
            <Collapse in={true}>
              <Paper
                variant="outlined"
                sx={{
                  mt: 2,
                  p: 2,
                  whiteSpace: "pre-wrap",
                  fontSize: "0.85rem",
                }}
              >
                {error?.toString()}
                {"\n"}
                {errorInfo.componentStack}
              </Paper>
            </Collapse>
          )}
        </Paper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
