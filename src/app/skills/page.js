"use client";
import { motion } from "framer-motion";
import { Box, Typography, LinearProgress, useTheme } from "@mui/material";
import { skillCategories } from "@/config/skills";

export default function SkillsPage() {
  const theme = useTheme();

  // Dynamic colors based on theme mode
  const isDark = theme.palette.mode === "dark";
  const bgColor = isDark ? "#0f172a" : "#f5f5f5";
  const cardBg = isDark ? "rgba(30,41,59,0.7)" : "rgba(255,255,255,0.8)";
  const cardBorder = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.1)";
  const textColor = isDark ? "#ffffff" : "#000000";
  const progressBg = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const progressGradient = "linear-gradient(to right, #3b82f6, #9333ea)";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 4, md: 8 },
        background: `linear-gradient(to bottom, ${bgColor}, ${isDark ? "#000000" : "#e0e0e0"})`,
        color: textColor,
      }}
    >
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", mb: 6, color: textColor }}
        >
          Skills
        </Typography>
      </motion.div>

      {/* Skill Categories */}
      {skillCategories.map((category, catIndex) => (
        <motion.div
          key={catIndex}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: catIndex * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Category Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              mb: 4,
              position: "relative",
              display: "inline-block",
              color: textColor,
            }}
          >
            {category.category}
            <motion.span
              style={{
                position: "absolute",
                bottom: -6,
                left: 0,
                height: 3,
                background: progressGradient,
                width: 0,
              }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </Typography>

          {/* Skills Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
              mb: 8,
            }}
          >
            {category.skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  type: "spring",
                }}
                viewport={{ once: true }}
                style={{
                  background: cardBg,
                  padding: "16px",
                  borderRadius: "12px",
                  border: `1px solid ${cardBorder}`,
                  boxShadow:
                    "0 4px 10px rgba(0,0,0,0.3), inset 0 0 10px rgba(59,130,246,0.1)",
                }}
              >
                {/* Icon */}
                <motion.img
                  src={skill.img}
                  alt={skill.name}
                  style={{
                    width: "44px",
                    height: "44px",
                    objectFit: "contain",
                    margin: "0 auto 8px auto",
                    display: "block",
                  }}
                  whileHover={{
                    rotate: [0, 8, -8, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Skill Name */}
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{ fontWeight: 500, mb: 1, color: textColor }}
                >
                  {skill.name}
                </Typography>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: idx * 0.05 }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 6,
                      borderRadius: 5,
                      backgroundColor: progressBg,
                      "& .MuiLinearProgress-bar": {
                        background: progressGradient,
                      },
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}
