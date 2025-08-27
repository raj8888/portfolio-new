"use client";

import { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import ProjectsSlider from "@/components/ProjectsSlider";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function ProjectsPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        My Projects
      </Typography>

      {/* Conditional section */}
      {!showAll ? <ProjectsSlider /> : <ProjectsGrid />}

      {/* Toggle button */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          onClick={() => setShowAll(!showAll)}
          sx={{
            px: 4,
            py: 1,
            borderRadius: 3,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          {showAll ? "Show Less" : "Show All Projects"}
        </Button>
      </Box>
    </Container>
  );
}
