"use client";

import {
  Avatar,
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Code,
  Coffee,
  BugReport,
  EmojiEvents,
  CloudUpload,
} from "@mui/icons-material";

export default function HomePage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
      }}>
      {/* Hero Section */}
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mt: 8,
        }}>
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #1976d2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
            bgcolor: "#ffffff",
          }}>
          <img
            src="/profile.jpg"
            alt="Profile"
            style={{
              width: "100%",
              height: "114%",
              objectFit: "contain", // Makes the image fit entirely inside circle
              marginTop: "40px",
            }}
          />
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Rajvardhan Jadhav
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Software Developer
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}>

          <Typography variant="body1" sx={{ maxWidth: 620, color: "#555555" }}>
            I build and maintain production-grade web applications with a focus
            on reliability, performance, and clean architecture. My work spans
            frontend and backend development, along with production support,
            incident handling, and system stability.
          </Typography>
        </motion.div>
      </Container>

      {/* Fun Stats */}
      <Container maxWidth="lg" sx={{ mt: 12, mb: 12 }}>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ fontWeight: "bold", mb: 4 }}>
          A Few Fun Stats
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              icon: <Code fontSize="large" />,
              number: "30K+",
              label: "Lines of Code",
            },
            {
              icon: <Coffee fontSize="large" />,
              number: "1K+",
              label: "Cups of Tes",
            },
            {
              icon: <BugReport fontSize="large" />,
              number: "500+",
              label: "Bugs Fixed",
            },
            {
              icon: <EmojiEvents fontSize="large" />,
              number: "10+",
              label: "Projects Delivered",
            },
            {
              icon: <CloudUpload fontSize="large" />,
              number: "100+",
              label: "Deployments",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 3,
                    height: "100%",
                  }}>
                  <CardContent>
                    {item.icon}
                    <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                      {item.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
