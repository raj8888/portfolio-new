"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  Snackbar,
  Alert,
  LinearProgress,
} from "@mui/material";

export default function ContactPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({ open: false, severity: "success", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setSnack({ open: true, severity: "success", message: "Your message has been sent!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSnack({ open: true, severity: "error", message: data.error || "Something went wrong!" });
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setSnack({ open: true, severity: "error", message: "Failed to send email. Please try again." });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        px: { xs: 4, md: 12 },
        background: isDark
          ? "linear-gradient(to bottom, #0f172a, #000)"
          : "linear-gradient(to bottom, #f5f5f5, #e0e0e0)",
        color: isDark ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 6, textAlign: "center" }}>
          Contact Me
        </Typography>
      </motion.div>

      {/* Loading Progress */}
      {loading && <LinearProgress sx={{ width: "100%", mb: 3, borderRadius: 1 }} />}

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#fff",
              input: { color: isDark ? "#fff" : "#000" },
              label: { color: isDark ? "#aaa" : "#555" },
            }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#fff",
              input: { color: isDark ? "#fff" : "#000" },
              label: { color: isDark ? "#aaa" : "#555" },
            }}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            sx={{
              backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#fff",
              input: { color: isDark ? "#fff" : "#000" },
              label: { color: isDark ? "#aaa" : "#555" },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #3b82f6, #9333ea)",
              color: "#fff",
              py: 1.5,
              fontWeight: "bold",
              "&:hover": { background: "linear-gradient(to right, #2563eb, #7e22ce)" },
            }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </motion.form>

      {/* Snackbar for Success/Error */}
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snack.severity} sx={{ width: "100%" }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
