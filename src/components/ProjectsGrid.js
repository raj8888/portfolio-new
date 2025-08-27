"use client";

import { Grid, Card, CardContent, CardMedia, Typography, Stack, Chip, Box } from "@mui/material";
import { motion } from "framer-motion";
import projects from "@/config/projects";

export default function ProjectsGrid() {
  return (
    <Grid container justifyContent="center">
      {projects.map((project, index) => (
        <Grid key={index} marginTop={10}>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              sx={{
                width: 900,
                height: 600,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Box sx={{ height: 400, overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom noWrap>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    flexGrow: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {project.tech.map((tech, i) => (
                    <Chip key={i} label={tech} size="small" />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
