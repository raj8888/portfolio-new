"use client";

import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { GitHub, LinkedIn, Email, ArrowUpward } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        py: 4,
        px: { xs: 4, md: 8 },
        background: isDark ? "#0f172a" : "#f5f5f5",
        color: isDark ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: `1px solid ${isDark ? "#1e293b" : "#d1d5db"}`,
        gap: 2,
      }}
    >
      {/* Social & Contact */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
        <IconButton
          aria-label="GitHub"
          onClick={() => window.open("https://github.com/rajvardhanj", "_blank")}
          sx={{ color: isDark ? "#fff" : "#000" }}
          size="small"
        >
          <GitHub fontSize="small" />
        </IconButton>

        <IconButton
          aria-label="LinkedIn"
          onClick={() => window.open("https://www.linkedin.com/in/rajvardhanj/", "_blank")}
          sx={{ color: isDark ? "#0ea5e9" : "#0ea5e9" }}
          size="small"
        >
          <LinkedIn fontSize="small" />
        </IconButton>

        <IconButton
          aria-label="Email"
          onClick={() => window.location.href = "mailto:rajvardhanj2000@gmail.com"}
          sx={{ color: isDark ? "#facc15" : "#f59e0b" }}
          size="small"
        >
          <Email fontSize="small" />
        </IconButton>

        <Typography
          sx={{
            alignSelf: "center",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 14,
            "&:hover": { color: isDark ? "#3b82f6" : "#2563eb" },
          }}
          onClick={() => router.push("/contact")}
        >
          Contact
        </Typography>
      </Box>

      {/* Address */}
      <Typography sx={{ fontSize: 12, textAlign: "center" }}>
        Rajvardhan Jadhav | Bengaluru, Karnatak, India
      </Typography>

      {/* Back to Top */}
      <IconButton
        aria-label="Back to Top"
        onClick={scrollToTop}
        sx={{
          color: isDark ? "#fff" : "#000",
          "&:hover": { color: isDark ? "#3b82f6" : "#2563eb" },
        }}
        size="small"
      >
        <ArrowUpward fontSize="small" />
      </IconButton>

      {/* Copyright */}
      <Typography sx={{ fontSize: 10, textAlign: "center" }}>
        © {new Date().getFullYear()} Rajvardhan Jadhav. All rights reserved.
      </Typography>
    </Box>
  );
}
