"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import projects from "@/config/projects";

export default function ProjectsSlider() {
  const theme = useTheme();
  console.log()
  return (
    <div
      style={{
        position: "relative",
        background: theme.palette.mode === "dark" ? "#121212" : "#f5f7fa",
        padding: "60px 0",
        borderRadius: "12px",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true} // 🔄 infinite loop
        style={{ paddingBottom: "60px" }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                sx={{
                  maxWidth: 900,
                  mx: "auto",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <CardMedia
                    component="img"
                    height="340"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: "cover" }}
                  />
                </motion.div>

                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, maxWidth: "80%", mx: "auto" }}
                    >
                      {project.description}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      flexWrap="wrap"
                    >
                      {project.tech.map((tech, i) => (
                        <Chip key={i} label={tech} size="small" />
                      ))}
                    </Stack>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 👇 Custom navigation arrows */}
      <IconButton
        className="custom-prev"
        sx={{
          position: "absolute",
          top: "50%",
          left: 20,
          zIndex: 10,
          transform: "translateY(-50%)",
          backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "white",
          color: theme.palette.mode === "dark" ? "white" : "black",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "white",
          },
        }}
      >
        <ArrowBackIosNew />
      </IconButton>

      <IconButton
        className="custom-next"
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          zIndex: 10,
          transform: "translateY(-50%)",
          backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "white",
          color: theme.palette.mode === "dark" ? "white" : "black",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "white",
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </div>
  );
}
