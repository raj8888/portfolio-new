"use client";

import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import { useThemeMode } from "@/context/ThemeRegistry";

export default function ExperiencePage() {
  const { mode } = useThemeMode();

const experiences = [
  {
    title: "Backend Engineer",
    company: "Health Vectors",
    date: "Aug 2023 – Dec 2023",
    description:
      "Developed and optimized RESTful APIs, implemented authentication and authorization with JWT/OAuth, and improved MongoDB query performance. Worked on integrating Socket.io for real-time features and automated workflows with RabbitMQ.",
    tech: "Node.js, Express.js, MongoDB, Mongoose, REST APIs, Socket.io, RabbitMQ",
  },
  {
    title: "Fullstack Engineer",
    company: "Health Vectors",
    date: "Jan 2024 – Jun 2025",
    description:
      "Designed and built scalable web applications with responsive UIs using React and Next.js. Integrated backend APIs with complex business logic, improved caching and performance, and contributed to production support and deployments.",
    tech: "Next.js, React, Redux, Material UI, Node.js, Express.js, MongoDB, Redis",
  },
  {
    title: "Software Engineer (DevOps & Platform)",
    company: "Health Vectors",
    date: "Jun 2025 – Present",
    description:
      "Led deployments and production support by setting up CI/CD pipelines and automating infrastructure with Docker and Ansible. Managed cloud resources on Azure, optimized server performance with Nginx, and implemented monitoring and logging for high availability.",
    tech: "Azure, Docker, Ansible, Nginx, GitLab, Shell Scripting, Production Support",
  },
];

  return (
    <Container sx={{ py: 6 }}>
      {/* Section Title */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Experience
        </Typography>
      </motion.div>

      {/* Timeline */}
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={mode === "dark" ? "primary" : "secondary"}>
                <WorkIcon />
              </TimelineDot>
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {exp.company} | {exp.date}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {exp.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
                    Tech Stack: {exp.tech}
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
